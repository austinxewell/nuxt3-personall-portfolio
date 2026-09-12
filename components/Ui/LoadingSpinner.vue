<template>
    <div class="relative flex items-center justify-center" :class="$attrs.class">
        <!-- ambient glow -->
        <div class="absolute inset-0 rounded-full bg-yellow-500/25 blur-2xl" />

        <!-- rotating arc standing in for a spinner -->
        <div class="loading-ring absolute inset-0 rounded-full" />

        <!-- the actual logo, sized proportionally to whatever size this component is given -->
        <div class="relative w-[62.5%] h-[62.5%]">
            <img
                src="/images/small-logo.png"
                alt="Au"
                class="absolute inset-0 w-full h-full object-contain"
            />
            <!-- shine layer: brightens the gold, leaves dark areas alone -->
            <div class="loading-shine absolute inset-0" />
        </div>
    </div>
</template>

<script setup lang='ts'>
defineOptions({ inheritAttrs: false })
</script>

<style scoped>
.loading-ring {
    background: conic-gradient(
        from 0deg,
        transparent 0%,
        transparent 70%,
        rgb(202 138 4) 100%
    );
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px));
    animation: spin 1.6s linear infinite;
}

.loading-shine {
    background: linear-gradient(
        115deg,
        transparent 40%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 60%
    );
    background-size: 250% 250%;
    mix-blend-mode: overlay;
    animation: shimmer 2.2s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@keyframes shimmer {
    0% { background-position: 200% 200%; }
    100% { background-position: -50% -50%; }
}

@media (prefers-reduced-motion: reduce) {
    .loading-ring,
    .loading-shine {
        animation: none;
    }
}
</style>