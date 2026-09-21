<template>
    <UiModifyPanel
        title="Modify Services"
        complete-form-key="services"
        :edit-component="UiEditService"
        :create-component="UiCreateService"
        :on-open="() => servicesStore.fetchServices()"
    />
</template>

<script setup lang="ts">
import UiEditService from '~/components/Ui/Edit/Service.vue'
import UiCreateService from '~/components/Ui/Create/Service.vue'

const servicesStore = useServicesStore()
</script>