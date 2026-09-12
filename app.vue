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
    titleTemplate: 'Austin Ewell – AuEwellify | Software Engineer',
    bodyAttrs: { class: 'scroll-smooth' } 
})
</script>