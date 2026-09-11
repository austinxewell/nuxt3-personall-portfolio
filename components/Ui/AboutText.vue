<template>
    <p>
        <strong class="text-lg">Hi, I'm Austin Ewell</strong> —
        a <strong>Software Engineer</strong> with <span class="text-yellow-600 font-semibold">5+ years of professional experience</span>
        building and owning production web applications used by thousands of daily users. I specialize in
        <strong>modern frontend architecture</strong>, working primarily in
        <strong>TypeScript</strong>,
        <strong>Vue</strong>, and
        <strong>Nuxt (v2–v4)</strong>, with additional experience in
        <strong>React</strong> and
        <strong>Node.js</strong>.
        <br /><br />
        At <strong>StarkSys</strong>, I lead development and ongoing ownership of
        <span class="text-yellow-600 font-semibold">4+ SaaS applications</span>, participated in many SaaS applications and high-traffic websites, including an internal
        platform used by <strong>300+ employees daily</strong> that increased tracked employee activity by
        <span class="text-yellow-600 font-semibold">60%</span>. I've established the team's
        <strong>frontend architecture standards</strong> and code review practices, and I build accessible,
        <strong>WCAG/ARIA</strong>-compliant interfaces integrated with RESTful APIs and
        <strong>CI/CD pipelines</strong> using Git, Docker, and Kubernetes.
        <br /><br />
        Before StarkSys, I spent three years as an <strong>independent contractor</strong>, delivering full-stack
        web applications for small businesses end-to-end — from requirements gathering through deployment and
        ongoing support.
        <br /><br />
        Outside of client work, I built and shipped <span class="text-yellow-600 font-semibold">Planning Poker</span>,
        a real-time estimation tool using Nuxt 3, TypeScript, Express, and Socket.IO, adopted by my engineering
        team for Agile estimation after a critical third-party tool expired. I've also open-sourced an
        <span class="text-yellow-600 font-semibold">ESLint automation CLI</span> for Nuxt projects that cut
        project setup time by over 50%.
        <br /><br />
        <a
            :href="about.blog_url"
            target="_blank"
            class="flex justify-center font-bold text-center"
        >
            <p>Find out more about me by visiting my <span class="text-yellow-600 font-semibold">Dev Blog!</span></p>
        </a>
    </p>
</template>

<script  setup lang='ts'>
import { useAboutStore } from '#imports'

const aboutStore = useAboutStore()
const { about } = storeToRefs(aboutStore)
</script>