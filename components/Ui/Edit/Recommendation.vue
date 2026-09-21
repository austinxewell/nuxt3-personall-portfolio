<!-- components/Ui/Edit/Recommendation.vue -->
<template>
    <div v-if="!selectedRecommendation" class="flex flex-col gap-4">
        <p class="text-sm font-semibold">* Select a recommendation to modify</p>

        <BaseInput
            id="recommendationSearch"
            v-model="searchQuery"
            placeholder="Search by name or company..."
        />

        <div class="table-wrapper">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Recommended By</th>
                        <th>Company</th>
                        <th class="actions-col" />
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filteredRecommendations.length === 0">
                        <td colspan="3" class="text-center py-4 text-gray-500 dark:text-gray-400">
                            {{ recommendationStore.loading ? 'Loading recommendations...' : 'No matching recommendations.' }}
                        </td>
                    </tr>

                    <tr
                        v-for="rec in filteredRecommendations"
                        :key="rec.id"
                        class="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900"
                        @click="selectRecommendation(rec)"
                    >
                        <td>{{ rec.recommended_by }}</td>
                        <td>{{ rec.company_name }}</td>
                        <td class="actions-col">
                            <div class="flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    aria-label="Delete recommendation"
                                    class="text-gray-400 hover:text-red-600 dark:hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
                                    :disabled="deletingId === rec.id"
                                    @click.stop="handleDelete(rec)"
                                >
                                    <UIcon
                                        v-if="deletingId === rec.id"
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

    <UiRecommendationForm
        v-else
        v-model:recommendation="editRecommendation.recommendation"
        v-model:recommended-by="editRecommendation.recommended_by"
        v-model:job-title="editRecommendation.job_title"
        v-model:company-name="editRecommendation.company_name"
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
                @click="selectedRecommendation = null"
            >
                Back To Recommendation Selection
            </BaseButton>
        </template>
    </UiRecommendationForm>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import type { Recommendation } from '~/types/recommendation'

const toast = useToast()
const recommendationStore = useRecommendationStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const searchQuery = ref('')

const allRecommendations = computed(() => recommendationStore.recommendations)

const filteredRecommendations = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return allRecommendations.value

    return allRecommendations.value.filter((rec) =>
        rec.recommended_by.toLowerCase().includes(query) || rec.company_name.toLowerCase().includes(query)
    )
})

const selectedRecommendation = ref<Recommendation | null>(null)

const editRecommendation = reactive({
    recommendation: '',
    recommended_by: '',
    job_title: '',
    company_name: ''
})

const errors = reactive<Record<string, string>>({
    recommendation: '',
    recommendedBy: '',
    jobTitle: '',
    companyName: ''
})

const isSubmitting = ref(false)
const deletingId = ref<number | string | null>(null)

function selectRecommendation(rec: Recommendation) {
    selectedRecommendation.value = rec
    editRecommendation.recommendation = rec.recommendation
    editRecommendation.recommended_by = rec.recommended_by
    editRecommendation.job_title = rec.job_title
    editRecommendation.company_name = rec.company_name
    errors.recommendation = ''
    errors.recommendedBy = ''
    errors.jobTitle = ''
    errors.companyName = ''
}

function validateRecommendation() {
    errors.recommendation = ''
    errors.recommendedBy = ''
    errors.jobTitle = ''
    errors.companyName = ''

    let validated = true

    if (!editRecommendation.recommendation.trim()) {
        validated = false
        errors.recommendation = 'Recommendation is required'
    }

    if (!editRecommendation.recommended_by.trim()) {
        validated = false
        errors.recommendedBy = 'Recommended By is required'
    }

    if (!editRecommendation.job_title.trim()) {
        validated = false
        errors.jobTitle = 'Job Title is required'
    }

    if (!editRecommendation.company_name.trim()) {
        validated = false
        errors.companyName = 'Company Name is required'
    }

    return validated
}

async function submitUpdate() {
    if (!validateRecommendation() || !selectedRecommendation.value) return

    isSubmitting.value = true

    try {
        await recommendationStore.updateRecommendation(Number(selectedRecommendation.value.id), {
            recommendation: editRecommendation.recommendation,
            recommended_by: editRecommendation.recommended_by,
            job_title: editRecommendation.job_title,
            company_name: editRecommendation.company_name
        })
        toast.success('Recommendation updated')
        selectedRecommendation.value = null
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to update recommendation')
    } finally {
        isSubmitting.value = false
    }
}

async function handleDelete(rec: Recommendation) {
    deletingId.value = rec.id

    try {
        await recommendationStore.deleteRecommendation(Number(rec.id))
        toast.success('Recommendation deleted')
        await recommendationStore.fetchRecommendations()
    } catch (err) {
        console.error(err)
        toast.error('Unable to delete recommendation')
    } finally {
        deletingId.value = null
    }
}

onMounted(() => {
    if (allRecommendations.value.length === 0) recommendationStore.fetchRecommendations()
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