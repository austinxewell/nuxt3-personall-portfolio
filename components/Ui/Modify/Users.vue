<template>
    <UiModifyPanel
        title="Modify Users"
        complete-form-key="users"
        :edit-component="UiEditUser"
        :create-component="UiCreateUser"
        :on-open="() => userStore.fetchUsers()"
    />
</template>

<script setup lang="ts">
import UiEditUser from '~/components/Ui/Edit/User.vue'
import UiCreateUser from '~/components/Ui/Create/User.vue'

const userStore = useUsersStore()
</script>