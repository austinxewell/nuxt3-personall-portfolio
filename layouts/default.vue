<template>
    <div>
        <LayoutNavigationLargeNav class="hidden sm:block" />
        <slot />
        <LayoutFooter class="mb-18 sm:mb-0" />
        <LayoutNavigationSmallNav class="fixed bottom-0 z-50 sm:hidden" />
    </div>
</template>