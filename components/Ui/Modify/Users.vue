<template>
    <h2 class="text-xl font-bold mb-4">Modify Users</h2>

    <div class="flex flex-col">
        <template v-if="selectedAction === ''">
            <!-- Mobile: -->
            <div class="flex flex-col gap-2 sm:hidden">
                <button
                    v-for="action in actions"
                    :key="action.id"
                    type="button"
                    class="flex items-center gap-3 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-900"
                    @click="action.action"
                >
                    <UIcon :name="action.icon" class="h-5 w-5 shrink-0" />
                    <span class="font-medium">{{ action.actionName }}</span>
                </button>
            </div>

            <!-- sm+: -->
            <div class="hidden sm:flex sm:flex-row gap-4 justify-center">
                <UiAdminCard
                    v-for="action in actions"
                    :key="action.id"
                    :action-name="action.actionName"
                    :icon="action.icon"
                    :action="action.action"
                />
            </div>
        </template>

        <div>
            <UiEditUser v-if="selectedAction === 'edit'" />
        </div>

        <div>
            <UiCreateUser v-if="selectedAction === 'new'" />
        </div>

        <BaseButton
            v-if="selectedAction != ''"
            class="mt-4"
            type="button"
            color="inverse-alt"
            @click="selectedAction = ''"
        >
            Back To Modify Selection
        </BaseButton>

        <BaseButton
            v-else
            class="mt-4"
            type="button"
            color="inverse-alt"
            @click="emit('completeForm', 'users')"
        >
            Close
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['completeForm'])

const userStore = useUsersStore()

type UserAction = 'edit' | 'new' | ''

const selectedAction = ref<UserAction>('')

const actions = [
    {
        id: 1,
        actionName: 'Edit Existing User',
        icon: 'lucide:edit-2',
        action: () => openAction('edit')
    },
    {
        id: 2,
        actionName: 'Create New User',
        icon: 'lucide:square-plus',
        action: () => openAction('new')
    }
]

function openAction(action: UserAction) {
    selectedAction.value = action
}

onMounted(() => {
    userStore.fetchUsers()
})
</script>