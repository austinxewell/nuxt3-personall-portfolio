
<template>
    <div class="flex flex-col justify-center">
        <LayoutHero />
        <LayoutAbout />
        <LayoutPortfolio />
        <LayoutServices />
        <LayoutContact />
    </div>
</template>

<script setup lang='ts'>
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
</script>