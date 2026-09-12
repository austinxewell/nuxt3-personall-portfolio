<template>
    <div>
        <LayoutNavigationLargeNav />
        <div class="mx-auto max-w-screen-xl">
            <slot />
        </div>
        <LayoutFooter class="mb-18 sm:mb-0" />
        <LayoutNavigationSmallNav class="fixed bottom-0 z-50 sm:hidden" />
    </div>
</template>