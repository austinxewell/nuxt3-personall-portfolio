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
useHead({ bodyAttrs: { class: 'scroll-smooth' } })
</script>