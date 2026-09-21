<template>
    <UiModifyPanel
        title="Modify Skills"
        complete-form-key="skills"
        :edit-component="UiEditSkill"
        :create-component="UiCreateSkill"
        :on-open="() => skillsStore.fetchSkills()"
    />
</template>

<script setup lang="ts">
import UiEditSkill from '~/components/Ui/Edit/Skill.vue'
import UiCreateSkill from '~/components/Ui/Create/Skill.vue'

const skillsStore = useSkillsStore()
</script>