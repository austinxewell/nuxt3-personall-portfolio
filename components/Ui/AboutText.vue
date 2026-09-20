<template>
    <div>
        <p>
            <strong class="text-lg">Hi, I'm Austin Ewell</strong> —
            a <strong>Software Engineer</strong> with <span class="text-yellow-600 font-semibold">{{ professionalYears }}+ years of professional experience</span>
            building and owning production web applications used by thousands of daily users, backed by
            <span class="text-yellow-600 font-semibold">{{ totalYears }}+ years</span> of hands-on development overall,
            dating back to my early freelance work. I specialize in
            <strong>modern frontend architecture</strong>, working primarily in
            <strong>TypeScript</strong>,
            <strong>Vue</strong>, and
            <strong>Nuxt (v2–v4)</strong>, with additional experience in
            <strong>React</strong> and
            <strong>Node.js</strong>.
        </p>
        <br />
        <p>
            At <strong>StarkSys</strong>, I lead development and ongoing ownership of
            <span class="text-yellow-600 font-semibold">4+ SaaS applications</span>, played a role in developing many additional web applications and high-traffic websites, including an internal
            platform used by <strong>300+ employees daily</strong> that increased tracked employee activity by
            <span class="text-yellow-600 font-semibold">60%</span>. I've established the team's
            <strong>frontend architecture standards</strong> and code review practices, and I build accessible,
            <strong>WCAG/ARIA</strong> compliant interfaces integrated with RESTful APIs and
            <strong>CI/CD pipelines</strong> using Git, Docker, and Kubernetes.
        </p>
        <br/>
        <p>
            Before StarkSys, I spent three years as an <strong>independent contractor</strong>, delivering full-stack
            web applications for small businesses end-to-end, from requirements gathering through deployment and
            ongoing support.
        </p>
        <br/>
        <p>
            Outside of client work, I built and shipped <span class="text-yellow-600 font-semibold">AuEwellify Planning Poker</span>,
            a real-time estimation tool using Nuxt 3, TypeScript, Express, and Socket.IO, adopted by my engineering
            team for Agile estimation after a critical third-party tool expired. I've also open-sourced an
            <span class="text-yellow-600 font-semibold">ESLint automation CLI</span> for Nuxt projects that cut
            project setup time by over 50%.
        </p>
        <br/>
        <p class="text-center">
            Find out more <span class="hidden sm:inline">about me</span> by visiting my
            <a
                :href="about.blog_url"
                target="_blank"
                class="text-yellow-600 font-semibold"
            >
                Dev Blog!
            </a>
        </p>
    </div>
</template>

<script setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)

// StarkSys start date — drives the "professional experience" figure
const PROFESSIONAL_START = new Date('2022-02-01')
// Freelance start date — drives the "total hands-on experience" figure
const CODING_START = new Date('2019-01-01')

function yearsSince(start: Date): number {
    const now = new Date()
    let years = now.getFullYear() - start.getFullYear()
    const hasHadAnniversaryThisYear =
        now.getMonth() > start.getMonth() ||
        (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate())
    if (!hasHadAnniversaryThisYear) years--
    return years
}

const professionalYears = computed(() => yearsSince(PROFESSIONAL_START))
const totalYears = computed(() => yearsSince(CODING_START))
</script>