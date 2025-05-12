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
    titleTemplate: '%s | Austin Ewell – AuEwellify',
    bodyAttrs: { class: 'scroll-smooth' } 
})
</script>