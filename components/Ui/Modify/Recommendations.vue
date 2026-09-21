<template>
    <UiModifyPanel
        title="Modify Recommendations"
        complete-form-key="recommendations"
        :edit-component="UiEditRecommendation"
        :create-component="UiCreateRecommendation"
        :on-open="() => recommendationStore.fetchRecommendations()"
    />
</template>

<script setup lang="ts">
import UiEditRecommendation from '~/components/Ui/Edit/Recommendation.vue'
import UiCreateRecommendation from '~/components/Ui/Create/Recommendation.vue'

const recommendationStore = useRecommendationStore()
</script>