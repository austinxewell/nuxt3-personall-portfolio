<template>
    <footer class=" py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <!-- Left: Logo or name -->
        <div class="flex items-center gap-2 mb-6">
            <img
                src="@/assets/images/small-logo.png"
                alt="Logo"
                class="w-8 h-8"
            />
            <img
                class="h-5"
                src="@/assets/images/text-logo.png"
                alt=""
            />
        </div>
  
        <!-- Center: Links -->
        <div class="flex gap-6 text-sm">
            <a href="#portfolio" class="hover:text-yellow-600 transition-colors">Projects</a>
            <a href="#contact" class="hover:text-yellow-600 transition-colors">Contact</a>
            <a
                href="/Austin_Ewell_Resume.pdf"
                download
                class="hover:text-yellow-600 transition-colors"
            >Resume</a>
        </div>
  
        <div class="text-xs text-gray-400 mt-4 md:mt-0">
            &copy; {{ new Date().getFullYear() }} Austin Ewell. All rights reserved.
        </div>
    </footer>
</template>

<script setup lang='ts'>

</script>