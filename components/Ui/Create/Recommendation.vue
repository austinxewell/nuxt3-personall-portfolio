<!-- components/Ui/Create/Recommendation.vue -->
<template>
    <UiRecommendationForm
        v-model:recommendation="newRecommendation.recommendation"
        v-model:recommended-by="newRecommendation.recommended_by"
        v-model:job-title="newRecommendation.job_title"
        v-model:company-name="newRecommendation.company_name"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Add Recommendation"
        submitting-label="Creating"
        @submit="submitRecommendation"
    />
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
const recommendationStore = useRecommendationStore()

const emit = defineEmits<{(e: 'complete'): void}>()

const newRecommendation = reactive({
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

function validateRecommendation() {
    errors.recommendation = ''
    errors.recommendedBy = ''
    errors.jobTitle = ''
    errors.companyName = ''

    let validated = true

    if (!newRecommendation.recommendation.trim()) {
        validated = false
        errors.recommendation = 'Recommendation is required'
    }

    if (!newRecommendation.recommended_by.trim()) {
        validated = false
        errors.recommendedBy = 'Recommended By is required'
    }

    if (!newRecommendation.job_title.trim()) {
        validated = false
        errors.jobTitle = 'Job Title is required'
    }

    if (!newRecommendation.company_name.trim()) {
        validated = false
        errors.companyName = 'Company Name is required'
    }

    return validated
}

async function submitRecommendation() {
    if (!validateRecommendation()) return

    isSubmitting.value = true

    try {
        await recommendationStore.createRecommendation({
            recommendation: newRecommendation.recommendation,
            recommended_by: newRecommendation.recommended_by,
            job_title: newRecommendation.job_title,
            company_name: newRecommendation.company_name
        })
        toast.success('Recommendation created')
        resetForm()
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to create recommendation')
    } finally {
        isSubmitting.value = false
    }
}

function resetForm() {
    newRecommendation.recommendation = ''
    newRecommendation.recommended_by = ''
    newRecommendation.job_title = ''
    newRecommendation.company_name = ''
    errors.recommendation = ''
    errors.recommendedBy = ''
    errors.jobTitle = ''
    errors.companyName = ''
}
</script>