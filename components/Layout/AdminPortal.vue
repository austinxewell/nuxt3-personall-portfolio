<template>
    <div class="py-8 px-8">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-1 font-semibold">
            Admin Portal
        </h2>

        <p class="font-semibold mb-6">Editing as: {{ adminUsername }}</p>

        <div class="flex flex-row gap-6 flex-wrap items-center justify-center">
    
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
                <UiProjectUpdateForm @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="updateAbout">
                <UiUpdateAbout @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="imageDb">
                <UiModifyImageDatabase @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="tagDb">
                <UiModifyTagDatabase @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="skills">
                <UiModifySkills @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="collaborations">
                <UiModifyCollaborations @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="services">
                <UiModifyServices @complete-form="closeModal" />
            </BaseModal>

            <BaseModal ref="recommendations">
                <UiModifyRecommendations @complete-form="closeModal" />
            </BaseModal>
    
            <BaseModal ref="users">
                <UiModifyUsers @complete-form="closeModal" />
            </BaseModal>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UiModifyCollaborations } from '#components'
import BaseModal from '@/components/Base/Modal.vue'

const projectCreation = ref<typeof BaseModal>()
const updateProject = ref<typeof BaseModal>()
const updateAbout = ref<typeof BaseModal>()
const imageDb = ref<typeof BaseModal>()
const tagDb = ref<typeof BaseModal>()
const skills = ref<typeof BaseModal>()
const collaborations = ref<typeof BaseModal>()
const services = ref<typeof BaseModal>()
const recommendations = ref<typeof BaseModal>()
const users = ref<typeof BaseModal>()

const authStore = useAuthStore()
const adminUsername = computed(() => authStore.user?.display_name)

const modalRefs: Record<string, typeof projectCreation> = {
    projectCreation,
    updateProject,
    updateAbout,
    imageDb,
    tagDb,
    skills,
    collaborations,
    services,
    recommendations,
    users
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
    },
    {
        id: 6,
        actionName: 'Modify Skills',
        action: () => openModal('skills'),
        icon: 'lucide:wrench'
    },
    {
        id: 7,
        actionName: 'Modify Collaborations',
        action: () => openModal('collaborations'),
        icon: 'lucide:handshake'
    },
    {
        id: 8,
        actionName: 'Modify Services',
        action: () => openModal('services'),
        icon: 'lucide:briefcase'
    },
    {
        id: 9,
        actionName: 'Modify Recommendations',
        action: () => openModal('recommendations'),
        icon: 'lucide:message-square-quote'
    },
    {
        id: 10,
        actionName: 'Modify Users',
        action: () => openModal('users'),
        icon: 'lucide:users'
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