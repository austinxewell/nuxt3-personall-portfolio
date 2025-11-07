<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div
            class="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-8 border border-gray-100 dark:border-gray-700"
        >
            <div class="flex justify-center items-center gap-2 mb-6">
                <img
                    :src="smallLogo"
                    alt="Small Logo"
                    class="w-9 h-9"
                />
                <img
                    :src="textLogo"
                    alt="Text Logo"
                    class="h-6"
                />
            </div>

            <h1 class="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
                Admin Portal
            </h1>

            <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
                <BaseInput
                    id="email"
                    v-model="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />

                <BaseInput
                    id="password"
                    v-model="password"
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    required
                />

                <BaseButton type="submit" :disabled="loading">
                    <span v-if="!loading">Sign In</span>
                    <span v-else>Signing In...</span>
                </BaseButton>

                <p v-if="error" class="mt-2 text-center text-red-500 dark:text-red-400">
                    {{ error }}
                </p>
            </form>

            <div class="flex justify-end pt-4">
                <NuxtLink to="/">Back to Website</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore'

definePageMeta({ layout: 'empty' })

const smallLogo = '/images/small-logo.png'
const textLogo = '/images/text-logo.png'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const loading = ref(false)
const error = ref('')

async function handleLogin() {
    if (!email.value || !password.value) {
        error.value = 'Please fill in all fields.'
        return
    }

    loading.value = true
    error.value = ''

    try {
        await authStore.login(email.value, password.value)
        if (authStore.user) 
            router.push('/adminPortal')
    } catch (err) {
        console.error(err)
        error.value = authStore.error || 'Login failed'
    } finally {
        loading.value = false
    }
}
</script>
