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
        project_name: 'Git-N-Shape',
        slug: 'git-n-shape',
        overview: 'A workout and meal generation tool to help users manage personalized fitness and nutrition plans.',
        description: `
            <p><strong>Git-N-Shape</strong> is a front-end web app that helps users generate custom workout routines and meal plans based on their fitness goals. Built with <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>, it integrates third-party APIs to deliver dynamic content and interactive user experiences.</p>
            <br>
            <p>The app uses the <strong>Spoonacular API</strong> to generate balanced meal plans for breakfast, lunch, and dinner, each with full recipes accessible via modal popups. Users can save and compare different plans using localStorage for persistent state management on the client side.</p>
            <br>
            <p>Workout routines were originally powered by the <strong>ExerciseDB API</strong>, allowing users to target specific muscle groups. <strong>Note:</strong> Due to a business model change, the ExerciseDB API now requires a paid key, and the live version currently lacks this functionality.</p>
            <br
            <p>The UI is built using the <strong>Bulma CSS framework</strong> for layout and form control, enhanced with <strong>GSAP animations</strong> for smooth transitions. Font Awesome provides iconography, and all state is managed via vanilla JavaScript for lightweight performance.</p>
            <br>
            <p><strong>Key Contributions:</strong> API integration, dynamic DOM manipulation, modular JS structure, responsive design, form handling, local storage persistence, custom modal logic, and graceful error handling. Designed and built end-to-end with performance and UX in mind.</p>
        `,
        isFavorite: true,
        live_url: 'https://austinxewell.github.io/git-n-shape/',
        github_url: 'https://github.com/austinxewell/git-n-shape',
        tech_tags: [
            { tag_name: 'JavaScript', is_primary: true },
            { tag_name: 'HTML', is_primary: true },
            { tag_name: 'CSS', is_primary: true },
            { tag_name: 'Bulma', is_primary: false },
            { tag_name: 'GSAP', is_primary: false },
            { tag_name: 'ExerciseDB', is_primary: false },
            { tag_name: 'Spoonacular', is_primary: false },
            { tag_name: 'Font Awesome', is_primary: false },
            { tag_name: 'API Integration', is_primary: false },
            { tag_name: 'LocalStorage', is_primary: false },
            { tag_name: 'CSS Grid', is_primary: false },
            { tag_name: 'CSS Flexbox', is_primary: false },
        ],
        images: [
            {
                img_name: 'Git-N-Shape Intro',
                img_url: 'https://i.postimg.cc/fyVtgm2w/gns-intro.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape Landing',
                img_url: 'https://i.postimg.cc/bJCST3RC/gns-landing.png',
                is_thumbnail: true,
            },
            {
                img_name: 'Git-N-Shape Meal Plan',
                img_url: 'https://i.postimg.cc/B6Q1Hd2P/gns-meal-plan.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape Save Meal Plan',
                img_url: 'https://i.postimg.cc/6pnRXV9q/gns-save-plan-modal.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape Save Plan Success Message',
                img_url: 'https://i.postimg.cc/RVjfypx2/gns-saved-message.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape Saved Plans',
                img_url: 'https://i.postimg.cc/LsSP6qXT/gns-saved-plans.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape View Saved Plans',
                img_url: 'https://i.postimg.cc/yNTZJV3z/gns-view-saved-plans.png',
                is_thumbnail: false,
            },
            {
                img_name: 'Git-N-Shape Delete Saved Plans',
                img_url: 'https://i.postimg.cc/bNGk6cWQ/gns-delete-all-plans.png',
                is_thumbnail: false,
            },
        ]
    },
    {
        id: 3,
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
        id: 4,
        project_name: 'Crysta Diane Photography 2.0',
        slug: 'crysta-diane-photography',
        overview: 'A full-stack photography portfolio platform with admin capabilities and contact integration.',
        description: `
            <p><strong>Crysta Diane Photography 2.0</strong> is a full-stack web application that I fully architected and developed. It combines a modern, <strong>Nuxt 3</strong> frontend with a custom-built <strong>Express.js</strong> backend API. Designed to serve a real-world photography business, this project showcases professional photo galleries, service offerings, customer reviews, and a secure admin dashboard—all with a clean UI and intuitive UX.</p>
            <br />
            <p>The <strong>frontend</strong> leverages <strong>TypeScript</strong> for type safety and scalability, <strong>Tailwind CSS</strong> for utility-first styling, and <strong>Pinia</strong> for state management. It uses <strong>Nuxt 3</strong> for powerful SSR and static site generation, integrated with <strong>Axios</strong> for RESTful API communication. Routing is handled via <strong>Vue Router</strong>, and the UI incorporates reusable components including carousels and modals.</p>
            <br />
            <p>Key client-side functionality includes a <strong>custom-built contact form</strong> with frontend validation and inline error handling, a <strong>secure login system</strong> for administrators using JWT-based authentication, and a dynamic <strong>admin panel</strong> that allows authorized users to create, update, and delete website content such as gallery images, service listings, and user reviews. Session tokens are stored and validated using <strong>js-cookie</strong> and <strong>jwt-decode</strong>.</p>
            <br />
            <p>On the <strong>backend</strong>, the project features a <strong>Node.js + Express</strong> server built entirely from scratch. It uses <strong>MySQL2</strong> to manage and persist data, with schema-driven tables for users, photos, reviews, and services. Authentication is handled via <strong>jsonwebtoken</strong> and password encryption through <strong>bcryptjs</strong>. <strong>CORS</strong> and <strong>cookie-parser</strong> middleware are implemented for cross-origin and session handling. Environment variables are managed through <strong>dotenv</strong>, and hot reload during development is supported via <strong>nodemon</strong>.</p>
            <br />
            <p>From a devops and quality standpoint, the project maintains strict code consistency and formatting using <strong>Prettier</strong> and <strong>ESLint</strong>. The frontend is built using <strong>Vite</strong> under the hood via Nuxt for fast hot module replacement and build performance.</p>
            <br />
            <p><strong>Key Features:</strong><br />
            - Dynamic image gallery with zoom functionality<br />
            - Contact form with client-side validation and admin notifications<br />
            - Admin dashboard for secure, in-app data management<br />
            - Token-based authentication system<br />
            - CRUD operations for site content via REST API<br />
            - Real-world deployment structure with separate frontend and backend repos</p>
            <br />
            <p><strong>Backend Repository:</strong> <a href="https://github.com/austinxewell/CDPhoto-Backend/tree/dev" target="_blank">GitHub - Backend</a></p>
        `,
        isFavorite: true,
        live_url: '',
        github_url: 'https://github.com/austinxewell/crysta-diane-photo-2.0',
        tech_tags: [
            // Frontend
            { tag_name: 'Nuxt 3', is_primary: true },
            { tag_name: 'Vue 3', is_primary: false },
            { tag_name: 'Vue Router', is_primary: false },
            { tag_name: 'Pinia', is_primary: false },
            { tag_name: 'TypeScript', is_primary: false },
            { tag_name: 'JavaScript', is_primary: true },
            { tag_name: 'Tailwind', is_primary: false },
            { tag_name: 'SASS', is_primary: false },
            { tag_name: 'Vue3 Carousel', is_primary: false },
            // Backend
            { tag_name: 'Node', is_primary: true },
            { tag_name: 'Express', is_primary: false },
            { tag_name: 'REST API', is_primary: false },
            { tag_name: 'MySQL2', is_primary: false },
            { tag_name: 'JWT Auth', is_primary: false },
            { tag_name: 'bcrypt', is_primary: false },
            { tag_name: 'cookie-parser', is_primary: false },
            { tag_name: 'CORS', is_primary: false },
            { tag_name: 'Nodemon', is_primary: false },
            // Tooling / Utilities
            { tag_name: 'Axios', is_primary: false },
            { tag_name: 'js-cookie', is_primary: false },
            { tag_name: 'jwt-decode', is_primary: false },
            { tag_name: 'Prettier', is_primary: false },
            { tag_name: 'ESLint', is_primary: false },
            { tag_name: 'Vite', is_primary: false },
            { tag_name: 'dotenv', is_primary: false },
            // Concepts & Architecture
            { tag_name: 'Full Stack', is_primary: false },
            { tag_name: 'Authentication', is_primary: false },
            { tag_name: 'Component-Based Architecture', is_primary: false },
        ],
        images: [
            { img_name: 'CDP Landing', img_url: 'https://i.postimg.cc/x18tRz5d/cdp-landing.png', is_thumbnail: true },
            { img_name: 'CDP About', img_url: 'https://i.postimg.cc/QxX6FPW1/cdp-about.png', is_thumbnail: false },
            { img_name: 'CDP Reviews', img_url: 'https://i.postimg.cc/vH30fzWj/cdp-footer.png', is_thumbnail: false },
            { img_name: 'CDP Leave Review', img_url: 'https://i.postimg.cc/tJbBtvv0/cdp-revie-modal.png', is_thumbnail: false },
            { img_name: 'CDP Gallery', img_url: 'https://i.postimg.cc/G3P7hr9b/cdp-gallery.png', is_thumbnail: false },
            { img_name: 'CDP Gallery Photo Selected', img_url: 'https://i.postimg.cc/j5P8fYXQ/cdp-zoomed-photo.png', is_thumbnail: false },
            { img_name: 'CDP Services', img_url: 'https://i.postimg.cc/cJV96LQL/cdp-services.png', is_thumbnail: false },
            { img_name: 'CDP Services Navigation', img_url: 'https://i.postimg.cc/gkpZmXT2/cdp-service-nav.png', is_thumbnail: false },
            { img_name: 'CDP Contact', img_url: 'https://i.postimg.cc/q7tDk36F/cdp-contact.png', is_thumbnail: false },
            { img_name: 'CDP Contact Form', img_url: 'https://i.postimg.cc/9QgN5p0T/cdp-contact-form.png', is_thumbnail: false },
            { img_name: 'CDP Contact Form Errors', img_url: 'https://i.postimg.cc/Jzzd2grM/cdp-contact-form-errors.png', is_thumbnail: false },
            { img_name: 'CDP Admin Login', img_url: 'https://i.postimg.cc/L5VNykGJ/cdp-admin-login.png', is_thumbnail: false },
            { img_name: 'CDP Admin View', img_url: 'https://i.postimg.cc/MT4Jtw2c/cdp-admin-view.png', is_thumbnail: false },
            { img_name: 'CDP Admin Modify Data', img_url: 'https://i.postimg.cc/76byg6c8/cdp-modify-data.png', is_thumbnail: false }
        ]
    },
]