<template>
    <section id="about" class="px-6 py-4 sm:py-8">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl md:ml-20 mb-6 font-semibold">
            Rooted in Passion. Refined in <span class="text-yellow-600 font-bold">Gold</span>.
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14">
            <img
                class="h-[30svh] sm:h-[35svh] w-auto max-w-full rounded-2xl object-cover shrink-0
               md:h-auto md:max-h-[45svh] md:w-2/5
               lg:max-h-[50svh] lg:w-1/3
               xl:max-h-[55svh] xl:w-2/5"
                :src="cartoonAviSrc"
                alt="Cartoon Avatar"
            />

            <UiAboutText class="min-w-0 flex-1" />
        </div>

        <div>
            <div class="flex justify-center mt-12">
                <h3 class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-center max-w-4xl">
                    Technologies That Power My
                    <span class="text-yellow-600 font-bold">Golden</span>
                    Standard.
                </h3>
            </div>

            <UiTechStack />

            <UiPartnerCompanies class="mt-10" />

            <div class="flex flex-wrap justify-center items-center gap-10 mt-10">
                <BaseButton class="w-fit flex items-center justify-center" @click="navigateToContact">
                    <span>Contact</span>
                    <UIcon name="i-lucide-mail" class="size-5 ml-2" />
                </BaseButton>

                <a :href="about.blog_url" target="_blank">
                    <BaseButton  
                        class="w-fit flex items-center justify-center"
                    >
                        <span>Dev Blog</span>
                        <UIcon name="mdi:book-outline" class="size-5 ml-2" />
                    </BaseButton>
                </a>

                <a
                    :href="about.linkedin_url"
                    target="_blank"
                    class="hover:cursor-pointer flex items-center"
                >
                    <img
                        class="h-10"
                        :src="linkedInSrc"
                        alt="LinkedIn Logo"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)

function navigateToContact() {
    const element = document.getElementById('contact')
    if (element) 
        element.scrollIntoView({ behavior: 'smooth' })
}

const linkedInSrc = '/images/linkedin.png'
const cartoonAviSrc = '/images/cartoon-avatar.png'
</script>