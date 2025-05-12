<template>
    <LayoutProjects />
</template>

<script setup lang='ts'>
definePageMeta({ layout: 'project-pages' })
useHead({ title: 'Projects' })

useSeoMeta({
    description: 'View all projects by Austin Ewell at AuEwellify',
    ogTitle: 'Projects | Austin Ewell - AuEwellify',
    ogDescription: 'View all projects by Austin Ewell at AuEwellify',
    ogImage: 'https://i.postimg.cc/sxpgrNsg/portfolio-view-projects.png',
    // TODO: Add true domain when available.
    // ogUrl: 'https://yourdomain.com/projects',
    twitterTitle: 'Projects | Austin Ewell - AuEwellify',
    twitterDescription: 'View all projects by Austin Ewell at AuEwellify',
    twitterImage: 'https://i.postimg.cc/sxpgrNsg/portfolio-view-projects.png'
})
</script>