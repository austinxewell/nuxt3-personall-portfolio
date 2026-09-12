<template>
    <div class="flex flex-col gap-4 sm:px-6">
        <h3 class="font-bold">Project Tags:</h3>

        <section>
            <div class="flex justify-between mb-2">
                <p class="text-sm">Click Project Tags to Set As Primary</p>
                <span>(/3)</span>
            </div>

            <div 
                v-if="projectTags.length"
                class="flex flex-wrap gap-2"
            >
                <UiProjectTag
                    v-for="tag in projectTags"
                    :key="tag.id"
                    class="w-fit cursor-pointer"
                    :tag="tag.name"
                    @click="setTagPrimary(tag.id)"
                />
            </div>

            <pre>{{ projectTags }}</pre>
        </section>

            
        <BaseMultiSelect 
            :options="tagOptions"
            :selected="projectTags"
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
                >
                    Create Tag
                </BaseButton>
            </div>
        </section>

        <BaseButton 
            class="flex gap-2 mt-2"
            :disabled="isSubmitting"
            @click="linkTagsToProject"
        >
            {{ isSubmitting ? 'Linking Tags' : 'Next Step' }}
            <UIcon name="lucide:arrow-right" size="20" />
        </BaseButton>
    </div>
</template>

<script setup lang='ts'>
import { useToast } from 'vue-toastification'
import type { Tag } from '~/types/tags'
import type { MultiSelectOption } from '~/types/multiSelect'

defineProps<{
    createdProjectId: number
}>()

const tagStore = useTagStore()
const toast = useToast()

const emit = defineEmits(['goToStep'])

const tagOptions = computed<MultiSelectOption[]>(() =>
    tagStore.tags.map((tag: Tag) => ({
        id: tag.id,
        name: tag.tag_name,
        is_primary: false
    }))
)

const projectTags = ref<MultiSelectOption[]>([])
const showAddTag = ref(false)
const newTagName = ref<string>('')
const newTagError = ref<string>('')

function selectTag(selectedTag: MultiSelectOption) {
    const index = projectTags.value.findIndex(tag => tag.id === selectedTag.id)

    if (index === -1) 
        projectTags.value.push(selectedTag)
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

function formatTagPayloads() {
    // Will format tags to correct payloads
}

async function linkTagsToProject() {
    isSubmitting.value = true

    formatTagPayloads()

    // const tagErrorCount = 0
    

    try {
        
        
        toast.success('Project created successfully')
        
        const STEP_TWO = 2
        emit('goToStep', STEP_TWO)
    } catch (error) {
        console.error(error)
        toast.error('Unable to Link Tags to Project')
    } finally {
        isSubmitting.value = false
    }
}
</script>