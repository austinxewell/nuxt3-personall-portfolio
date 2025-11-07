<template>
    <div>
        <UApp>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UApp>
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: 'Full Stack Web Developer | Austin Ewell – AuEwellify',
    bodyAttrs: { class: 'scroll-smooth' } 
})
</script>