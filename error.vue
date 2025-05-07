<template>
    <div class="error-page">
        <h1>{{ error.statusCode }}</h1>
        <p>{{ error.statusMessage }}</p>
        <NuxtLink to="/">Go back home</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>
