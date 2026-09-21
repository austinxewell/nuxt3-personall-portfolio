<!-- components/admin/AdminModifyPanel.vue -->
<template>
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>

    <div class="flex flex-col">
        <template v-if="selectedAction === ''">
            <!-- Mobile: -->
            <div class="flex flex-col gap-2 sm:hidden">
                <button
                    v-for="action in actions"
                    :key="action.id"
                    type="button"
                    class="flex items-center gap-3 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-900"
                    @click="action.action"
                >
                    <UIcon :name="action.icon" class="h-5 w-5 shrink-0" />
                    <span class="font-medium">{{ action.actionName }}</span>
                </button>
            </div>

            <!-- sm+: -->
            <div class="hidden sm:flex sm:flex-row gap-4 justify-center">
                <UiAdminCard
                    v-for="action in actions"
                    :key="action.id"
                    :action-name="action.actionName"
                    :icon="action.icon"
                    :action="action.action"
                />
            </div>
        </template>

        <div>
            <component :is="editComponent" v-if="selectedAction === 'edit'" />
        </div>

        <div>
            <component :is="createComponent" v-if="selectedAction === 'new'" />
        </div>

        <BaseButton
            v-if="selectedAction != ''"
            class="mt-4"
            type="button"
            color="inverse-alt"
            @click="selectedAction = ''"
        >
            Back To Modify Selection
        </BaseButton>

        <BaseButton
            v-else
            class="mt-4"
            type="button"
            color="inverse-alt"
            @click="emit('completeForm', completeFormKey)"
        >
            Close
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

type PanelAction = 'edit' | 'new' | ''

const props = defineProps<{
    title: string
    completeFormKey: string
    editComponent: Component
    createComponent: Component
    onOpen?:() => void
}>()

const emit = defineEmits(['completeForm'])

const selectedAction = ref<PanelAction>('')

const actions = [
    {
        id: 1,
        actionName: 'Edit Existing',
        icon: 'lucide:edit-2',
        action: () => openAction('edit')
    },
    {
        id: 2,
        actionName: 'Create New',
        icon: 'lucide:square-plus',
        action: () => openAction('new')
    }
]

function openAction(action: PanelAction) {
    selectedAction.value = action
}

onMounted(() => {
    props.onOpen?.()
})
</script>