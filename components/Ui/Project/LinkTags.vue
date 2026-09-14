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
import type { Tag, TagWithPrimary, TagToProject } from '~/types/tags'
import type { MultiSelectOption } from '~/types/multiSelect'

const props = defineProps<{
    createdProjectId: number | null
}>()

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

const selectedOptions = computed<MultiSelectOption[]>(() =>
    projectTags.value.map((tag) => ({
        id: tag.id,
        name: tag.tag_name
    }))
)

const selectedPrimaryTags = computed<TagWithPrimary[]>(() => {
    return projectTags.value.filter((tag) => tag.is_primary)
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

function formatTagPayloads(): TagToProject[] {
    const projectId = props.createdProjectId

    if (projectId === null) {
        toast.error('Internal Error: Could not find project to link tags to.')
        throw new Error('Cannot link tags: createdProjectId is null')
    }

    return projectTags.value.map((tag) => ({
        project_id: projectId,
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
    if (props.createdProjectId === null) validated = false

    return validated
})

async function linkTagsToProject() {
    if (!validatedPayload.value) return

    isSubmitting.value = true

    try {
        const payloads = formatTagPayloads()
        const results = await Promise.allSettled(
            payloads.map((payload) => tagStore.linkTagToProject(payload))
        )

        const failedCount = results.filter((result) => result.status === 'rejected').length

        if (failedCount > 0) 
            toast.error(`${failedCount} tag${failedCount > 1 ? 's' : ''} could not be linked.`)
        else 
            toast.success('Tags Successfully Linked to Project')
        

        const STEP_TWO = 2
        emit('goToStep', STEP_TWO)
    } catch (error) {
        console.error(error)
        toast.error('Unable to Link Tags to Project')
    } finally {
        isSubmitting.value = false
    }
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
</script>