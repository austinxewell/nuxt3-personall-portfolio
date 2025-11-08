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
            <UiProjectCreationForm @complete-form="closeModal" />
        </BaseModal>

        <BaseModal ref="updateProject">
            <h1>Update Project</h1>
        </BaseModal>

        <BaseModal ref="updateAbout">
            <h1>Update About</h1>
        </BaseModal>

        <BaseModal ref="imageDb">
            <h1>Modify and View Images In Database</h1>
        </BaseModal>

        <BaseModal ref="tagDb">
            <h1>Modify and View Tags In Database</h1>
        </BaseModal>
    </div>
</template>

<script setup lang="ts">
import BaseModal from '@/components/Base/Modal.vue'

const projectCreation = ref<typeof BaseModal>()
const updateProject = ref<typeof BaseModal>()
const updateAbout = ref<typeof BaseModal>()
const imageDb = ref<typeof BaseModal>()
const tagDb = ref<typeof BaseModal>()


const modalRefs: Record<string, typeof projectCreation> = {
    projectCreation,
    updateProject,
    updateAbout,
    imageDb,
    tagDb
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
        action: () => openModal('updateProject'),
        icon: 'lucide:edit-2'
    },
    {
        id: 3,
        actionName: 'Update About Me',
        action: () => openModal('updateAbout'),
        icon: 'lucide:user-pen'
    },
    {
        id: 4,
        actionName: 'Modify Images Database',
        action: () => openModal('imageDb'),
        icon: 'lucide:images'
    },
    {
        id: 5,
        actionName: 'Modify Tag Database',
        action: () => openModal('tagDb'),
        icon: 'lucide:tags'
    }
])

function openModal(name: string) {
    const modal = modalRefs[name]
    if (modal?.value) modal.value.open()
}

function closeModal(name: string) {
    const modal = modalRefs[name]
    if (modal?.value) modal.value.close()
}
</script>