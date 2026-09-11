<template>
    <div class="absolute -top-12 sm:top-0 right-0 sm:right-6 z-30">
        <div class="hidden sm:block absolute inset-0 -z-10 bg-yellow-400/40 dark:bg-yellow-500/30 blur-3xl rounded-full" />
        <img
            :src="badgeSrc"
            alt="Booking Projects Badge"
            class="hidden sm:block w-[12rem] h-[12rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem]"
        />
    </div>
</template>

<script setup lang='ts'>
const badgeSrc = '/images/hero-badge.png'
</script>