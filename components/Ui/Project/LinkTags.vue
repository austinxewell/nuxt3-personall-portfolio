<template>
    <div class="flex flex-col gap-4">
        <h3 class="font-bold">Project Tags:</h3>

        <div class="flex flex-wrap gap-2">
            <UiProjectTag
                v-for="tag in projectTags"
                :key="tag.id"
                class="w-fit"
                :tag="tag.name"
            />
        </div>

        <BaseMultiSelect 
            :options="tagOptions"
            :selected="projectTags"
            placeholder="Select All Tags"
            @select="selectTag"
        />

        <p v-if="!showAddTag">
            Cant find your tag? 
            <button 
                class="cursor-pointer hover:underline"
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
    </div>
</template>

<script setup lang='ts'>
import { useTagStore } from '#imports'
import type { Tag } from '~/types/tags'
import type { MultiSelectOption } from '~/types/multiSelect'

const tagStore = useTagStore()

const tagOptions = computed<MultiSelectOption[]>(() =>
    tagStore.tags.map((tag: Tag) => ({
        id: tag.id,
        name: tag.tag_name
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
</script>