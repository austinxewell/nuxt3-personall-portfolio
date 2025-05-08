<template>
    <div>
        <LayoutNavigationLargeNav class="hidden sm:block" />
        <slot />
        <LayoutFooter />
        <LayoutNavigationSmallNav class="fixed bottom-0 z-50 sm:hidden" />
    </div>
</template>