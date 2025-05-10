export const projects = [
    {
        id: 1,
        project_name: 'Pulse',
        slug: 'pulse',
        overview: 'A modern project management app to track, organize, and manage workflows.',
        description: `
            <p><strong>Pulse</strong> is a full-featured <strong>project management application</strong> built with a modern frontend stack using <strong>Nuxt 3</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. The platform was designed to help users manage complex workflows with clarity and speed. It supports <strong>task management</strong>, <strong>project-level dashboards</strong>, <strong>collaborative workspaces</strong>, and <strong>user authentication</strong>.</p>
            <br />
            <p>On the technical side, Pulse uses <strong>Supabase</strong> as its backend for <strong>authentication</strong>, <strong>database</strong>, and <strong>real-time features</strong>. All forms are built with <strong>FormKit</strong> for rapid scaffolding and custom validation logic. <strong>TanStack Table</strong> powers the tabular data views with full client-side filtering and sorting. <strong>State</strong> is handled via <strong>Pinia</strong>, while <strong>Reka UI</strong> and <strong>Tailwind</strong> are used for consistent design components and utility-first styling. The app is bundled with <strong>Vite</strong> for fast builds and hot module replacement.</p>
            <br />
            <p>Additional tooling includes <strong>Iconify</strong> for vector icons, <strong>SweetAlert2</strong> for UI alerts and confirmations, and <strong>FakerJS</strong> for generating seed data during development. <strong>Linter and formatting</strong> are enforced with <strong>ESLint</strong> and <strong>Prettier</strong>, ensuring consistent code quality throughout. <strong>Light and dark mode themes</strong> are supported globally.</p>
            <br />
            <p><strong>Pulse</strong> emphasizes <strong>real-time feedback</strong> and smooth user interaction. It includes features like <strong>toast notifications</strong>, <strong>engaging dialog</strong>, and <strong>loading states</strong>. Forms include <strong>inline validation</strong> and <strong>accessible design practices</strong>. The entire <strong>UI</strong> is responsive and optimized for both <strong>desktop</strong> and <strong>mobile</strong> environments.</p>
            <br />
            <p><strong>Note:</strong> Account creation has been disabled due to <strong>Supabase</strong> limitations on free-tier projects. To explore the full functionality of the live demo, please use the provided credentials below.</p>
            <br />
            <p><strong>Live Demo Access</strong><br />
            <strong>Email:</strong> austin.ewell86@gmail.com<br />
            <strong>Password:</strong> password</p>
        `,
        isFavorite: true,
        live_url: 'https://pulse-project-managment.netlify.app/',
        github_url: 'https://github.com/austinxewell/pulse-project-management',
        tech_tags: [
            { tag_name: 'TypeScript', is_primary: true },
            { tag_name: 'Nuxt 3', is_primary: true },
            { tag_name: 'Tailwind', is_primary: true },
            { tag_name: 'Supabase', is_primary: false },
            { tag_name: 'Pinia', is_primary: false },
            { tag_name: 'Vite', is_primary: false },
            { tag_name: 'FormKit', is_primary: false },
            { tag_name: 'TanStack', is_primary: false },
            { tag_name: 'Iconify', is_primary: false },
            { tag_name: 'RekaUI', is_primary: false },
            { tag_name: 'SweetAlert2', is_primary: false },
            { tag_name: 'FakerJS', is_primary: false },
            { tag_name: 'ESLint', is_primary: false },
            { tag_name: 'Prettier', is_primary: false },
        ],
        images: [
            {
                img_name: 'Landing Page',
                img_url: 'https://i.postimg.cc/Gp5JydPy/pulse-landing.png',
                is_thumbnail: true,
            },
            {
                img_name: 'Landing Page - Light Mode',
                img_url: 'https://i.postimg.cc/g2qSJdMv/pulse-landing-light-mode.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Login',
                img_url: 'https://i.postimg.cc/bvTph7cJ/pulse-login.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Login - Light Mode',
                img_url: 'https://i.postimg.cc/ThvKBjGX/pulse-login-light-mode.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Projects',
                img_url: 'https://i.postimg.cc/vTRr0hN8/pulse-projects.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Project',
                img_url: 'https://i.postimg.cc/GhDgWvGg/Project.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Tasks',
                img_url: 'https://i.postimg.cc/TPdk5SSB/Tasks.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Task',
                img_url: 'https://i.postimg.cc/ry3YZf0t/Task.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Create New Task Form',
                img_url: 'https://i.postimg.cc/gjHXhM1B/pulse-task-creating.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Create New Task Form - Error State',
                img_url: 'https://i.postimg.cc/zvrHVm2g/pulse-task-creating-error.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Create New Project Form',
                img_url: 'https://i.postimg.cc/9MTqmXb2/pulse-project-creation.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Toasts',
                img_url: 'https://i.postimg.cc/pVp6BwTH/Toast.png',
                is_thumbnail: false,
            },
        ],
    },
    {
        id: 2,
        project_name: 'TypeScript Journal',
        slug: 'typescript-journal',
        overview: 'A lightweight journaling tool that captures thoughts and emotions with a clean UI.',
        description: `
            <p>
                TypeScript Journal is a simple, clean journaling app built as an introduction to TypeScript with Vue. 
                It allows users to log personal notes and assign an emotion to each entry using intuitive icon-based selection.
                All data is stored in <strong>localStorage</strong>, making it fully client-side and ideal for quick experiments or learning exercises.
            </p>
            <br />
            <p>
                This project emphasizes core TypeScript concepts in a Vue 3 context, including component typing, 
                props validation, and safe state management. Styling is handled with <strong>SCSS</strong>, and 
                the app is bundled using <strong>Vite</strong> for lightning-fast development.
            </p>
            <br />
            <p>
                While basic in scope, this project served as a stepping stone for exploring best practices in 
                typed Vue development and UI responsiveness without external dependencies.
            </p>
        `,
        isFavorite: true,
        live_url: 'https://ts-journal.netlify.app/',
        github_url: 'https://github.com/austinxewell/typescript-vueschool-lesson',
        tech_tags: [
            { tag_name: 'TypeScript', is_primary: true },
            { tag_name: 'Vue', is_primary: true },
            { tag_name: 'SCSS', is_primary: true },
            { tag_name: 'Vite', is_primary: false }
        ],
        images: [
            {
                img_name: 'Journal Entry View',
                img_url: 'https://i.postimg.cc/sXVq4xLf/ts-journal-landing.png',
                is_thumbnail: true
            },
            {
                img_name: 'Journal Entry View',
                img_url: 'https://i.postimg.cc/NMpVJYh6/ts-journal-with-entries.png',
                is_thumbnail: false
            },
        ]
    },
    {
        id: 3,
        project_name: 'Crysta Diane Photography',
        slug: 'crysta-diane-photography',
        overview: 'This dummy played games with my sister, whatta beezy.',
        description: 'This will be a long description of the project. Repeated over and over and over and over and over and over and over again.',
        isFavorite: false,
        live_url: '',
        tech_tags: [
            {
                tag_name: 'TypeScript',
                is_primary: true
            },
            {
                tag_name: 'Nuxt3',
                is_primary: true
            },
            {
                tag_name: 'Tailwind',
                is_primary: true
            },
        ],
        images: [
            {
                img_name: 'Pulse Landing Page',
                img_url: 'https://ibb.co/JbMJBz3',
                is_thumbnail: true,
            },
        ]
    },
    {
        id: 4,
        project_name: 'Git-n-Shape',
        slug: 'git-n-shape',
        overview: 'A project for fitness, fitness ass in dem jeans.',
        description: 'This will be a long description of the project. Repeated over and over and over and over and over and over and over again.',
        isFavorite: false,
        live_url: 'https://pulse-project-managment.netlify.app/login',
        tech_tags: [
            {
                tag_name: 'TypeScript',
                is_primary: true
            },
            {
                tag_name: 'Nuxt3',
                is_primary: true
            },
            {
                tag_name: 'Tailwind',
                is_primary: true
            },
        ],
        images: [
            {
                img_name: 'Pulse Landing Page',
                img_url: 'https://ibb.co/JbMJBz3',
                is_thumbnail: true,
            },
        ]
    },
]