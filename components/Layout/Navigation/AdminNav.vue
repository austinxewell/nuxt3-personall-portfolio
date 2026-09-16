<template>
    <header class="relative flex items-center p-4 bg-white dark:bg-gray-800 shadow">
        <!-- Left -->
        <div class="flex items-center gap-2 z-10">
            <img
                class="w-14 h-14"
                :src="smallLogo"
                alt="Small Logo"
            />
            <img
                class="h-6 sm:hidden lg:block"
                :src="textLogo"
                alt="Text Logo"
            />
        </div>

        <!-- Center (absolutely centered) -->
        <nav class="hidden absolute left-1/2 transform -translate-x-1/2 sm:flex gap-6 text-sm md:text-base font-medium">
            <NuxtLink 
                to="/"
                class="flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
            >
                <UIcon name="lucide:globe" class="mr-2" />
                Website
            </NuxtLink>

            <NuxtLink 
                to="/projects"
                class="flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors cursor-pointer"
            >
                <UIcon name="i-lucide-briefcase" class="mr-2" />
                Projects
            </NuxtLink>


        </nav>

        <!-- Right -->
        <div class="ml-auto flex gap-4 items-center z-10">
            <UModal v-model:open="isLogoutModalOpen" title="Log Out?">
                <BaseButton color="primary">
                    Logout
                </BaseButton>

                <template #body>
                    <p class="text-sm mb-6">
                        Are you sure you want to log out of the Admin Portal?
                    </p>

                    <div class="flex justify-end gap-2">
                        <BaseButton
                            type="button"
                            color="inverse-alt"
                            @click="isLogoutModalOpen = false"
                        >
                            Cancel
                        </BaseButton>
                        <BaseButton
                            type="button"
                            color="primary"
                            @click="logoutUser"
                        >
                            Logout
                        </BaseButton>
                    </div>
                </template>
            </UModal>
            <BaseDarkModeButton />
        </div>
    </header>
</template>

<script setup lang="ts">
const smallLogo = '/images/small-logo.png'
const textLogo = '/images/text-logo.png'

const authStore = useAuthStore()
const isLogoutModalOpen = ref(false)

function logoutUser() {
    authStore.logout()
}
</script>