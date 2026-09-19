<template>
    <div v-if="!selectedSkill" class="flex flex-col gap-4">
        <p class="text-sm font-semibold">* Select a skill to modify</p>

        <BaseInput
            id="skillSearch"
            v-model="searchQuery"
            placeholder="Search skills..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredSkills.length === 0">
                        <td colspan="2" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ skillsStore.loading ? 'Loading skills...' : 'No matching skills.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="skill in filteredSkills"
                        :key="skill.id"
                        class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900"
                        @click="selectSkill(skill)"
                    >
                        <td>
                            <div class="flex items-center gap-2">
                                <UIcon :name="skill.icon" class="h-5 w-5" />
                                {{ skill.name }}
                            </div>
                        </td>
                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    aria-label="Delete skill"
                                    class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                    :disabled="deletingId === skill.id"
                                    @click.stop="handleDelete(skill)"
                                >
                                    <UIcon
                                        v-if="deletingId === skill.id"
                                        name="lucide:loader-2"
                                        class="animate-spin"
                                    />
                                    <UIcon v-else name="lucide:trash-2" />
                                </button>
                                <UIcon name="lucide:chevron-right" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <UiSkillForm
        v-else
        v-model:name="editSkill.name"
        v-model:icon="editSkill.icon"
        v-model:is-expert="isExpert"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Save Changes"
        submitting-label="Saving"
        @submit="submitUpdate"
    >
        <template #footer>
            <BaseButton
                type="button"
                color="inverse-alt"
                :disabled="isSubmitting"
                @click="selectedSkill = null"
            >
                Back To Skill Selection
            </BaseButton>
        </template>
    </UiSkillForm>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { Skill } from '~/types/skills'

const toast = useToast()
const skillsStore = useSkillsStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const searchQuery = ref('')

const filteredSkills = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return skillsStore.skills

    return skillsStore.skills.filter((skill) => skill.name.toLowerCase().includes(query))
})

const selectedSkill = ref<Skill | null>(null)

const editSkill = reactive({
    name: '',
    icon: ''
})

const errors = reactive<Record<string, string>>({
    name: '',
    icon: ''
})

const isSubmitting = ref(false)
const isExpert = ref(false)
const deletingId = ref<number | null>(null)

function selectSkill(skill: Skill) {
    selectedSkill.value = skill
    editSkill.name = skill.name
    editSkill.icon = skill.icon
    isExpert.value = skill.level === 'expert'
    errors.name = ''
    errors.icon = ''
}

function validateSkill() {
    errors.name = ''
    errors.icon = ''

    let validated = true

    if (!editSkill.name.trim()) {
        validated = false
        errors.name = 'Skill Name is required'
    }

    if (!editSkill.icon.trim()) {
        validated = false
        errors.icon = 'Icon is required'
    }

    return validated
}

async function submitUpdate() {
    if (!validateSkill() || !selectedSkill.value) return

    isSubmitting.value = true

    try {
        await skillsStore.updateSkill(selectedSkill.value.id, {
            name: editSkill.name,
            icon: editSkill.icon,
            level: isExpert.value ? 'expert' : 'basic'
        })
        toast.success('Skill updated')
        selectedSkill.value = null
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to update skill')
    } finally {
        isSubmitting.value = false
    }
}

async function handleDelete(skill: Skill) {
    deletingId.value = skill.id

    try {
        await skillsStore.deleteSkill(skill.id)
        toast.success('Skill deleted')
        await skillsStore.fetchSkills()
    } catch (err) {
        console.error(err)
    } finally {
        deletingId.value = null
    }
}

onMounted(() => {
    if (skillsStore.skills.length === 0) skillsStore.fetchSkills()
})
</script>

<style scoped>
.table-wrapper {
    max-height: 20rem;
    overflow-y: auto;
    border: 1px solid var(--tw-border-color, #d1d5db);
    border-radius: 0.5rem;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.styled-table thead {
    position: sticky;
    top: 0;
    background-color: rgb(243 244 246 / 1);
    color: rgb(55 65 81 / 1);
    z-index: 10;
}

.dark .styled-table thead {
    background-color: rgb(31 41 55 / 1);
    color: rgb(229 231 235 / 1);
}

.styled-table th,
.styled-table td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgb(229 231 235 / 1);
}

td.actions-col,
th.actions-col {
    width: 15%;
    white-space: nowrap;
    text-align: center;
}
</style>