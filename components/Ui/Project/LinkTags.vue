<template>
    <div class="flex flex-col gap-4 sm:px-6">
        <h3 class="font-bold">Project Tags:</h3>

        <section>
            <div class="flex justify-between mb-2">
                <p
                    class="text-sm"
                    :class="{ 'text-red-600': selectedPrimaryTags.length > 3 }"
                >Click Project Tags to Set As Primary</p>
                <span :class="{ 'text-red-600 font-bold': selectedPrimaryTags.length > 3 }">({{ selectedPrimaryTags.length }}/3)</span>
            </div>

            <div 
                v-if="projectTags.length"
                class="flex flex-wrap gap-2"
            >
                <UiProjectTag
                    v-for="tag in projectTags"
                    :key="tag.id"
                    class="w-fit cursor-pointer"
                    :tag="tag.tag_name"
                    :is-primary="tag.is_primary"
                    @click="setTagPrimary(tag.id)"
                />
            </div>
        </section>

            
        <BaseMultiSelect 
            :options="tagOptions"
            :selected="selectedOptions"
            placeholder="Select All Tags"
            @select="selectTag"
        />

        <p v-if="!showAddTag">
            Cant find your tag? 
            <button 
                class="cursor-pointer hover:underline text-yellow-600 font-semibold"
                @click="showAddTag = true"
            >
                Click Here.
            </button>
        </p>

        <div v-else class="flex justify-between">
            <h3 class="font-bold">Create New Tag:</h3>

            <button @click="showAddTag = false">
                <UIcon name="lucide:x" />
            </button>
        </div>

        <section v-if="showAddTag">
            <div class="flex flex-nowrap gap-4">
                <BaseInput 
                    id="tagName"
                    v-model="newTagName"
                    class="w-full"
                    placeholder="Enter Tag Name"
                    :error="newTagError"
                />
                <BaseButton
                    color="inverse-alt"
                    class="flex-shrink-0"
                    @click="createTag"
                >
                    Create Tag
                </BaseButton>
            </div>
        </section>

        <BaseButton 
            class="flex gap-2 mt-2"
            :disabled="isSubmitting || !validatedPayload"
            @click="linkTagsToProject"
        >
            {{ isSubmitting ? 'Linking Tags' : 'Next Step' }}
            <UIcon name="lucide:arrow-right" size="20" />
        </BaseButton>
    </div>
</template>

<script setup lang='ts'>
import { useToast } from 'vue-toastification'
import type { Tag, TagWithPrimary, TagToProject, DeleteTagToProjectPayload } from '~/types/tags'
import type { MultiSelectOption } from '~/types/multiSelect'

const props = withDefaults(defineProps<{
    createdProjectId?: number | null
    isUpdate?: boolean 
}>(), {
    createdProjectId: null,
    isUpdate: false
})

const projectsStore = useProjectsStore()
const tagStore = useTagStore()
const toast = useToast()

const emit = defineEmits(['goToStep'])

const tagOptions = computed<MultiSelectOption[]>(() =>
    tagStore.tags.map((tag: Tag) => ({
        id: tag.id,
        name: tag.tag_name
    }))
)

const projectTags = ref<TagWithPrimary[]>([])
const originalTagIds = ref<Set<number>>(new Set())

const selectedOptions = computed<MultiSelectOption[]>(() =>
    projectTags.value.map((tag) => ({
        id: tag.id,
        name: tag.tag_name
    }))
)

const selectedPrimaryTags = computed<TagWithPrimary[]>(() => {
    return projectTags.value.filter((tag) => tag.is_primary)
})

const removedTagIds = computed<number[]>(() => {
    const currentIds = new Set(projectTags.value.map((tag) => tag.id))
    return [...originalTagIds.value].filter((id) => !currentIds.has(id))
})

const showAddTag = ref(false)
const newTagName = ref<string>('')
const newTagError = ref<string>('')

function selectTag(selectedOption: MultiSelectOption) {
    const index = projectTags.value.findIndex(tag => tag.id === selectedOption.id)

    if (index === -1) 
        projectTags.value.push({
            id: selectedOption.id,
            tag_name: selectedOption.name,
            is_primary: false
        })
    else 
        projectTags.value.splice(index, 1)
    
}

const isSubmitting = ref(false)

function setTagPrimary(tagId: number) {
    projectTags.value = projectTags.value.map(tag => 
        tag.id === tagId
            ? {
                ...tag,
                is_primary: !tag.is_primary 
            }
            : tag
    )
}

const projectId = computed(() =>
    props.isUpdate ? projectsStore.project?.id ?? null : props.createdProjectId
)

function formatTagPayloads(): TagToProject[] {
    const id = projectId.value

    if (id === null) {
        toast.error('Internal Error: Could not find project to link tags to.')
        throw new Error('Cannot link tags: project id is null')
    }

    return projectTags.value.map((tag) => ({
        project_id: id,
        tag_id: tag.id,
        is_primary: tag.is_primary
    }))
}

const validatedPayload = computed(() => {
    let validated = true
    const MAX_PRIMARY_TAGS = 3

    if (projectTags.value.length === 0) validated = false
    if (selectedPrimaryTags.value.length === 0) validated = false
    if (selectedPrimaryTags.value.length > MAX_PRIMARY_TAGS) validated = false
    if (projectId.value === null) validated = false

    return validated
})

async function submitProjectTags() {
    isSubmitting.value = true

    try {
        const linkPayloads = formatTagPayloads()
        const id = projectId.value as number

        const linkPromises = linkPayloads.map((payload) => tagStore.linkTagToProject(payload))
        const removePromises = removedTagIds.value.map((tagId) => {
            const removePayload: DeleteTagToProjectPayload = {
                project_id: id,
                tag_id: tagId 
            }
            return tagStore.removeTagFromProject(removePayload)
        })

        const results = await Promise.allSettled([...linkPromises, ...removePromises])

        const failedCount = results.filter((result) => result.status === 'rejected').length

        if (failedCount > 0) 
            toast.error(`${failedCount} tag change${failedCount > 1 ? 's' : ''} could not be saved.`)
        else 
            toast.success('Tags Successfully Linked to Project')

        const IS_UPDATE_NEXT_STEP = 3
        const NEXT_STEP = 2

        const STEP_INDEX = props.isUpdate ? IS_UPDATE_NEXT_STEP : NEXT_STEP
        emit('goToStep', STEP_INDEX)
    } catch (error) {
        console.error(error)
        toast.error('Unable to Link Tags to Project')
    } finally {
        isSubmitting.value = false
    }
}

async function linkTagsToProject() {
    if (!validatedPayload.value) return
    await submitProjectTags()
}

async function createTag() {
    const payload = { tag_name: newTagName.value }

    try {
        await tagStore.createNewTag(payload)
        newTagName.value = ''
        toast.success('Tag created successfully')
    } catch(err) {
        console.error(err)
        toast.error('Unable to create new tag')
    }
}

function autofillTags() {
    if (projectsStore.project?.id && props.isUpdate) {
        const matchedTags = projectsStore.project.tech_tags
            .map((techTag) => {
                const matchedTag = tagStore.tags.find(
                    (tag) => tag.tag_name === techTag.tag_name
                )

                if (!matchedTag) return null

                return {
                    id: matchedTag.id,
                    tag_name: techTag.tag_name,
                    is_primary: techTag.is_primary
                }
            })
            .filter((tag): tag is TagWithPrimary => tag !== null)

        projectTags.value = matchedTags
        originalTagIds.value = new Set(matchedTags.map((tag) => tag.id))
    }
}

onMounted(() => {
    autofillTags()
})
</script>