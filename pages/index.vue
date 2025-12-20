<template>
    <div v-if="isLoading">Is Loading...</div>
    <div v-else class="flex flex-col justify-center">
        <LayoutHero />
        <LayoutAbout />
        <LayoutPortfolio />
        <LayoutServices />
        <LayoutContact />
    </div>
</template>

<script setup lang='ts'>
import { 
    useAboutStore, 
    useSkillsStore, 
    useCollaborationsStore, 
    useProjectsStore,
    useServicesStore
} from '#imports'

useHead({ title: 'Full Stack Web Developer' })

useSeoMeta({
    description: 'A showcase of projects by Austin Ewell at AuEwellify, a full-stack developer specializing in front-end excellence.',
    ogTitle: 'Austin Ewell - AuEwellify',
    ogDescription: 'Explore development by Austin Ewell at AuEwellify, a full-stack developer specializing in front-end excellence.',
    ogImage: 'https://i.postimg.cc/gkXvpDLb/portfolio-hero-dark.png',
    ogUrl: 'https://auewellify.dev/',
    twitterTitle: 'Austin Ewell - AuEwellify',
    twitterDescription: 'A showcase of projects by Austin Ewell at AuEwellify, a full-stack developer specializing in front-end excellence.',
    twitterImage: 'https://i.postimg.cc/gkXvpDLb/portfolio-hero-dark.png'
})

const aboutStore = useAboutStore()
const skillsStore = useSkillsStore()
const collaborationStore = useCollaborationsStore()
const projectsStore = useProjectsStore()
const servicesStore = useServicesStore()

const isLoading = ref(false)

onMounted(async() => {
    isLoading.value = true

    await Promise.all([
        aboutStore.fetchAbout(),
        skillsStore.fetchSkills(),
        collaborationStore.fetchCollaborations(),
        projectsStore.fetchFavoriteProjects(),
        projectsStore.fetchProjects(),
        servicesStore.fetchServices()
    ])

    isLoading.value = false
})
</script>