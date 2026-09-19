<template>
    <UiUserForm
        v-model:email="newUser.email"
        v-model:display-name="newUser.display_name"
        v-model:password="newUser.password"
        v-model:confirm-password="confirmPassword"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Add User"
        submitting-label="Creating"
        password-label="* Password"
        @submit="submitUser"
    />
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
const userStore = useUsersStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const newUser = reactive({
    email: '',
    display_name: '',
    password: ''
})

const confirmPassword = ref('')

const errors = reactive<Record<string, string>>({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
})

const isSubmitting = ref(false)

function validateUser() {
    errors.email = ''
    errors.displayName = ''
    errors.password = ''
    errors.confirmPassword = ''

    let validated = true

    if (!newUser.email.trim()) {
        validated = false
        errors.email = 'Email is required'
    }

    if (!newUser.password.trim()) {
        validated = false
        errors.password = 'Password is required'
    } else if (newUser.password !== confirmPassword.value) {
        validated = false
        errors.confirmPassword = 'Passwords do not match'
    }

    return validated
}

async function submitUser() {
    if (!validateUser()) return

    isSubmitting.value = true

    try {
        await userStore.registerNewUser({
            email: newUser.email,
            password: newUser.password,
            display_name: newUser.display_name || undefined
        })
        toast.success('User created')
        resetForm()
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to create user')
    } finally {
        isSubmitting.value = false
    }
}

function resetForm() {
    newUser.email = ''
    newUser.display_name = ''
    newUser.password = ''
    confirmPassword.value = ''
    errors.email = ''
    errors.displayName = ''
    errors.password = ''
    errors.confirmPassword = ''
}
</script>