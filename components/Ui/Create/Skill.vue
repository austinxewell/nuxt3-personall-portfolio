<template>
    <UiSkillForm
        v-model:name="newSkill.name"
        v-model:icon="newSkill.icon"
        v-model:is-expert="isExpert"
        :errors="errors"
        :is-submitting="isSubmitting"
        submit-label="Add Skill"
        submitting-label="Creating"
        @submit="submitSkill"
    />
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
const skillStore = useSkillsStore()

const emit = defineEmits<{(e: 'complete'): void
}>()

const newSkill = reactive({
    name: '',
    icon: ''
})

const errors = reactive<Record<string, string>>({
    name: '',
    icon: ''
})

const isSubmitting = ref(false)
const isExpert = ref(false)

function validateSkill() {
    errors.name = ''
    errors.icon = ''

    let validated = true

    if (!newSkill.name.trim()) {
        validated = false
        errors.name = 'Skill Name is required'
    }

    if (!newSkill.icon.trim()) {
        validated = false
        errors.icon = 'Icon is required'
    }

    return validated
}

async function submitSkill() {
    if (!validateSkill()) return

    isSubmitting.value = true

    try {
        await skillStore.createSkill({
            name: newSkill.name,
            icon: newSkill.icon,
            level: isExpert.value ? 'expert' : 'basic',
            category: 'general'
        })
        toast.success('Skill created')
        resetForm()
        emit('complete')
    } catch (err) {
        console.error(err)
        toast.error('Unable to create skill')
    } finally {
        isSubmitting.value = false
    }
}

function resetForm() {
    newSkill.name = ''
    newSkill.icon = ''
    isExpert.value = false
    errors.name = ''
    errors.icon = ''
}
</script>