<template>
    <LayoutAdminPortal />
</template>

<script setup lang="ts">
definePageMeta({ 
    middleware: 'auth-admin',
    layout: 'admin' 
})
</script>
