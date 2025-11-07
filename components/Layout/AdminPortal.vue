<template>
    <div class="pt-20 px-8 flex flex-row gap-6 flex-wrap items-center justify-center">
        <UiAdminCard
            v-for="action in actions"
            :key="action.id"
            :action-name="action.actionName"
            :icon="action.icon"
            :action="action.action"
        />

        <BaseModal ref="projectCreation">
            <UiProjectCreationForm />
        </BaseModal>

        <BaseModal ref="updateAbout">
            <h1>Update About</h1>
        </BaseModal>
    </div>
</template>

<script setup lang="ts">
import BaseModal from '@/components/Base/Modal.vue'

const projectCreation = ref<typeof BaseModal>()
const updateAbout = ref<typeof BaseModal>()

const modalRefs: Record<string, typeof projectCreation> = {
    projectCreation,
    updateAbout
}

const actions = ref([
    {
        id: 1,
        actionName: 'Create New Project',
        action: () => openModal('projectCreation'),
        icon: 'lucide:square-plus'
    },
    {
        id: 2,
        actionName: 'Update a Project',
        action: () => console.log('Update Project clicked'),
        icon: 'lucide:edit-2'
    },
    {
        id: 3,
        actionName: 'Update About Me',
        action: () => openModal('updateAbout'),
        icon: 'lucide:user-pen'
    }
])

function openModal(name: string) {
    const modal = modalRefs[name]
    if (modal?.value) modal.value.open()
}
</script>