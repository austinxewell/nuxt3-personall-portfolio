export const projects = [
    {
        id: 1,
        project_name: 'Pulse Project Managment',
        slug: 'pulse-project-management',
        overview: 'A modern project management app to track, organize, and manage workflows.',
        description: `
            <p><strong>Pulse Project Management</strong> is a full-featured <strong>project management application</strong> built with a modern frontend stack using <strong>Nuxt 3</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. The platform was designed to help users manage complex workflows with clarity and speed. It supports <strong>task management</strong>, <strong>project-level dashboards</strong>, <strong>collaborative workspaces</strong>, and <strong>user authentication</strong>.</p>
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
            <br>
            <p>The UI is built using the <strong>Bulma CSS framework</strong> for layout and form control, enhanced with <strong>GSAP animations</strong> for smooth transitions. Font Awesome provides iconography, and all state is managed via vanilla JavaScript for lightweight performance.</p>
            <br>
            <p><strong>Key Contributions:</strong> API integration, dynamic DOM manipulation, modular JS structure, responsive design, form handling, local storage persistence, custom modal logic, and graceful error handling. Designed and built end-to-end with performance and UX in mind.</p>
            <br>
            <strong><p>Contributors:</p></strong>
            <p>— <a href="https://github.com/SadboiTay" target="_blank">Taylor Hakes</a></p>
            <p>— <a href="https://github.com/michaelheinhold" target="_blank">Michael Heinhold</a></p>
            <p>— <a href="https://github.com/austinxewell" target="_blank">Austin Ewell</a></p>
            <p>— <a href="https://github.com/CorySlsbry" target="_blank">CorySlsbry</a></p>
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
            <p><strong>Backend Repository:</strong> <a href="https://github.com/austinxewell/CDPhoto-Backend" target="_blank">GitHub - Backend</a></p>
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
    {
        id: 5,
        project_name: 'Bag of Tricks',
        slug: 'bag-of-tricks',
        overview: 'A customizable trick selector that stores your moves locally and filters them by attributes.',
        description: `
            <p><strong>Bag of Tricks</strong> is a fully client-side trick selector built with <strong>Vue 3</strong> and <strong>TypeScript</strong>, designed to let users create, categorize, and filter their own tricks without a backend. State is managed using <strong>Pinia</strong>, with data persisted in <strong>localStorage</strong> to support offline use.</p>
            <br />
            <p>The app features dynamic form handling with validation, success toasts, error states, and full CRUD functionality. Users can define specific properties for tricks like terrain or type, then selectively filter which are included in the random selection pool. The UI includes <strong>dark mode</strong> support and advanced filtering options built using the <strong>VueUse</strong> composables and <strong>Nuxt UI</strong> components.</p>
            <br />
            <p>This project highlights my ability to architect SPAs, write maintainable TypeScript with <strong>Composition API</strong>, and deliver clean, scalable UX using modern frontend best practices.</p>
        `,
        isFavorite: true,
        live_url: 'https://profound-stardust-16a045.netlify.app/',
        github_url: 'https://github.com/austinxewell/bag-of-tricks',
        tech_tags: [
            { tag_name: 'Vue 3', is_primary: true },
            { tag_name: 'Pinia', is_primary: true },
            { tag_name: 'TypeScript', is_primary: true },
            { tag_name: 'Vue Router', is_primary: false },
            { tag_name: 'Nuxt UI', is_primary: false },
            { tag_name: 'localStorage', is_primary: false },
            { tag_name: 'Composition API', is_primary: false },
            { tag_name: 'Dark Mode Support', is_primary: false },
            { tag_name: 'Responsive Design', is_primary: false },
        ],
        images: [
            { img_name: 'Bag Of Tricks - Landing', img_url: 'https://i.postimg.cc/HL7Lvkvb/bot-landing-light.png', is_thumbnail: true },
            { img_name: 'Bag Of Tricks - Landing - Dark Mode', img_url: 'https://i.postimg.cc/DwNZcX62/bot-landing-dark.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Terrain Filter', img_url: 'https://i.postimg.cc/X7QXphyB/bot-terrain-filter.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Trick Type Filter', img_url: 'https://i.postimg.cc/fRyyXKx2/bot-trick-type-filter.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Selected Trick', img_url: 'https://i.postimg.cc/dtqLQvDK/bot-trick-selection.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Modify Options', img_url: 'https://i.postimg.cc/ryGDLzVJ/bot-modify-bag.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Add Trick Form', img_url: 'https://i.postimg.cc/QCqCgY4P/bot-add-trick.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Add Trick Form: Errors', img_url: 'https://i.postimg.cc/ydckx8F7/bot-trick-error-state.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Success Toast', img_url: 'https://i.postimg.cc/R033rRh6/bot-success-toast.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - Edit Bag', img_url: 'https://i.postimg.cc/vmp4GVxP/bot-edit-bag.png', is_thumbnail: false },
            { img_name: 'Bag Of Tricks - View bag', img_url: 'https://i.postimg.cc/x8QqzVRM/bot-view-bag.png', is_thumbnail: false }
        ]
    },
    {
        id: 6,
        project_name: 'adoptABLE',
        slug: 'adoptable',
        overview: '(MVP) A platform for DV survivors with anonymous donors through Stripe-powered support.',
        description: `
            <p><strong>adoptABLE</strong> is a full-stack MERN application built to support domestic violence survivors by enabling anonymous connections between families in need and donors who want to help. The core goal was to create a secure, private, and compassionate space for vulnerable users, while maintaining a robust, modern web architecture.</p>
            <br />
            <p>The frontend is developed using <strong>React 18</strong> and styled with custom components. It includes dynamic routing, authenticated views, and conditional rendering based on user roles. Donors and families can both create accounts, but families are anonymized by default to protect their identities. The app allows users to browse a list of families in need and view details about what each family requires. Once a donor selects a family to help, they can initiate real-time conversations and send donations through a <strong>Stripe-powered</strong> payment system.</p>
            <br />
            <p>The backend is powered by <strong>Node.js</strong> with <strong>Express</strong>, and leverages <strong>GraphQL</strong> via <strong>Apollo Server</strong> for flexible API queries. Data is stored in <strong>MongoDB</strong> using <strong>Mongoose</strong> as an ODM layer. Authentication is handled via <strong>JWT</strong>, allowing for secure, stateless login sessions across the app. Protected routes and role-based logic are implemented on both the server and client sides.</p>
            <br />
            <p><strong>Key features:</strong></p>
            <ul>
            <li>- Anonymous family profiles, viewable by donors without exposing sensitive information</li>
            <li>- Donor accounts with the ability to "adopt" families and initiate financial support</li>
            <li>- Real-time, in-app messaging between families and donors using Apollo subscriptions (where supported)</li>
            <li>- Stripe integration for handling donations, tied directly to individual family profiles</li>
            <li>- Profile management for users, allowing them to update information or view adoption history</li>
            <li>- Modular, scalable component structure on the frontend with reusable UI patterns</li>
            </ul>
            <br />
            <p>This project highlights my ability to build secure, mission-driven applications using a modern full-stack JavaScript stack. It demonstrates technical proficiency across both frontend and backend development, effective use of GraphQL and RESTful patterns, and third-party service integrations like <strong>Stripe</strong> and <strong>JWT</strong>. adoptABLE was a team collaboration, but I led the architecture, data modeling, and end-to-end feature development, ensuring high-quality UX and maintainable code practices throughout.</p>
            <br />
            <strong><p>Contributors:</p></strong>
            <p>— <a href="https://github.com/jazzmbarry" target="_blank">Matthew Barry</a></p>
            <p>— <a href="https://github.com/Aphillip22" target="_blank">Amber Phillip</a></p>
            <p>— <a href="https://github.com/austinxewell" target="_blank">Austin Ewell</a></p>
            <p>— <a href="https://github.com/grsmith35" target="_blank">Riley Smith</a></p>
        `,
        isFavorite: false,
        live_url: '',
        github_url: 'https://github.com/austinxewell/adoptABLE',
        tech_tags: [
            { tag_name: 'MVP', is_primary: false },
            { tag_name: 'React', is_primary: true },
            { tag_name: 'Node.js', is_primary: true },
            { tag_name: 'GraphQL', is_primary: true },
            { tag_name: 'Express.js', is_primary: false },
            { tag_name: 'MongoDB', is_primary: false },
            { tag_name: 'Mongoose', is_primary: false },
            { tag_name: 'Apollo', is_primary: false },
            { tag_name: 'JWT', is_primary: false },
            { tag_name: 'Stripe', is_primary: false }
        ],
        images: [
            { img_name: 'Homepage', img_url: 'https://user-images.githubusercontent.com/86080954/148338421-6a894e08-4c57-4b61-8ab4-42c6057ba4ad.JPG', is_thumbnail: true },
            { img_name: 'Family Listings', img_url: 'https://user-images.githubusercontent.com/86080954/148338424-c575129f-378d-45d1-b810-406482a16225.JPG', is_thumbnail: false },
            { img_name: 'Adoption Page', img_url: 'https://user-images.githubusercontent.com/86080954/148338430-51664fba-c67e-42bc-8b6c-c1930cf10657.JPG', is_thumbnail: false },
            { img_name: 'Messaging Interface', img_url: 'https://user-images.githubusercontent.com/86080954/148338437-c2c9c488-a469-4301-a5b6-32f116f19a69.JPG', is_thumbnail: false },
            { img_name: 'Profile View', img_url: 'https://user-images.githubusercontent.com/86080954/148338441-9485fc56-95ef-4d61-8081-4746c6c75e71.JPG', is_thumbnail: false },
            { img_name: 'Donation Page', img_url: 'https://user-images.githubusercontent.com/86080954/148338450-94740a7b-dc27-45e2-99b2-4a82daab2f9d.JPG', is_thumbnail: false },
            { img_name: 'Product Management', img_url: 'https://user-images.githubusercontent.com/86080954/148338480-d65cb95e-19c1-4ca7-bc54-4c2de211b864.JPG', is_thumbnail: false },
            { img_name: 'Edit Account Info', img_url: 'https://user-images.githubusercontent.com/86080954/148338499-ce9c3550-b957-4519-ac9b-2c9cac544152.JPG', is_thumbnail: false },
            { img_name: 'Adopted Families Overview', img_url: 'https://user-images.githubusercontent.com/86080954/148338504-f18c34a2-8187-4e75-b92c-476081d0f37d.JPG', is_thumbnail: false }
        ]
    },
    {
        id: 6,
        project_name: 'README.md Generator',
        slug: 'readme-generator',
        overview: 'A command-line application that generates high-quality, professional README.md files based on user input.',
        description: `
            <p><strong>README.md Generator</strong> is a command-line application designed to quickly generate well-structured, professional README.md files for developers. By answering a series of prompts in the terminal, users can create consistent documentation for their projects, saving time and adhering to best practices. This tool is ideal for solo developers, bootcamp students, and teams looking to standardize their repository documentation.</p>
            <br />
            <p>The application guides users through a set of questions, such as project description, installation instructions, usage guidelines, contributors, tests, and license type. Once the responses are gathered, it dynamically generates a complete README.md file. The tool utilizes <strong>Node.js</strong>, <strong>Express</strong>, <strong>Inquirer</strong> for interactive prompts, and <strong>Clipboardy</strong> for copying the generated README to the clipboard.</p>
            <br />
            <strong><p>Key Features:</p></strong>
            <ul>
            <li>- Interactive command-line prompts for gathering project details</li>
            <li>- Dynamic generation of a README.md file</li>
            <li>- Clipboardy integration for easily copying the generated README</li>
            <li>- Configurable options for license selection and list creation</li>
            </ul>
            <br />
            <p>This project showcases proficiency in building command-line tools using <strong>Node.js</strong> and <strong>JavaScript</strong>. It demonstrates best practices for user interaction, modular coding, and efficient file handling.</p>
        `,
        isFavorite: false,
        live_url: '',
        github_url: 'https://github.com/austinxewell/readme-generator',
        tech_tags: [
            { tag_name: 'Node.js', is_primary: false },
            { tag_name: 'Express.js', is_primary: true },
            { tag_name: 'JavaScript', is_primary: true },
            { tag_name: 'TypeScript', is_primary: false },
            { tag_name: 'Inquirer', is_primary: true },
            { tag_name: 'Clipboardy', is_primary: false }
        ],
        images: [
            { img_name: 'Initial Prompt', img_url: 'https://i.postimg.cc/bYsKgJz3/readme-prompt-1.png', is_thumbnail: false },
            { img_name: 'Selecting License', img_url: 'https://i.postimg.cc/RFbLq4y0/readme-selecting-license.png', is_thumbnail: false },
            { img_name: 'Creating Lists', img_url: 'https://i.postimg.cc/6q2LvFxf/readme-creating-lists.png', is_thumbnail: false },
            { img_name: 'Final Confirmation Screen', img_url: 'https://i.postimg.cc/tJKdtDXQ/readme-final-screen.png', is_thumbnail: true },
            { img_name: 'Success Notification', img_url: 'https://i.postimg.cc/ydNTVkf5/readme-success-notification.png', is_thumbnail: false }
        ]
    },
    {
        id: 7,
        project_name: 'Simple Chat',
        slug: 'simple-chat',
        overview: 'A real-time messaging app using WebSockets for two-way communication.',
        description: `
            <p><strong>Simple Chat</strong> is a lightweight, real-time messaging application built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Socket.IO</strong>. It facilitates instant communication between multiple users connected to the same server instance via WebSockets. This project demonstrates how to build a performant, minimal chat server with live bidirectional messaging capability.</p>
            <br />
            <p>Upon connection, users are able to send and receive messages in real time without any page refreshes or polling. The architecture uses Socket.IO on both the client and server side to maintain persistent WebSocket connections for efficient data exchange. Express serves the static frontend, while all WebSocket handling is abstracted through event-based communication in <code>index.js</code>.</p>
            <br />
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>- Real-time two-way communication between users using WebSockets</li>
                <li>- Supports multiple simultaneous connections</li>
                <li>- Efficient Socket.IO-based architecture</li>
                <li>- Simple and clean UI for demonstration purposes</li>
                <li>- Nodemon integration for rapid development and live reload</li>
                <li>- Event-based message broadcasting on both send and receive</li>
                <li>- Minimal dependencies: Express and Socket.IO</li>
            </ul>
            <br />
            <p>This project is a strong demonstration of real-time systems fundamentals and WebSocket protocol implementation, ideal for devs learning about server-client communication beyond HTTP.</p>
        `,
        isFavorite: false,
        live_url: '',
        github_url: 'https://github.com/austinxewell/simpleChat',
        tech_tags: [
            { tag_name: 'Node', is_primary: true },
            { tag_name: 'Express', is_primary: false },
            { tag_name: 'Socket.IO', is_primary: false },
            { tag_name: 'WebSockets', is_primary: true },
            { tag_name: 'JavaScript', is_primary: true },
            { tag_name: 'Nodemon', is_primary: false },
            { tag_name: 'HTML', is_primary: false },
            { tag_name: 'CSS', is_primary: false },

        ],
        images: [
            { img_name: 'Empty Chat Screen', img_url: 'https://i.postimg.cc/SsTp9WSp/simple-Chat-empty.png', is_thumbnail: false },
            { img_name: 'Pre-send UI State', img_url: 'https://i.postimg.cc/W47V2Bxz/simple-Chat-pre-sent.png', is_thumbnail: false },
            { img_name: 'Message Sent UI', img_url: 'https://i.postimg.cc/wBzHYqfn/simple-Chat-sent-message.png', is_thumbnail: false },
            { img_name: '2-Way Communication', img_url: 'https://i.postimg.cc/Wzdcwhzq/simple-Chat-2-way-communication.png', is_thumbnail: true },
            { img_name: 'Multiple Messages', img_url: 'https://i.postimg.cc/RFVBqPzR/simple-Chat-multiple-messages.png', is_thumbnail: false },
            { img_name: 'Socket Connection Log', img_url: 'https://i.postimg.cc/3xm7q4Bg/simple-Chat-socket-connection.png', is_thumbnail: false }
        ]
    },
    {
        id: 8,
        project_name: "ESLint Auewellify Standards",
        slug: "eslint-auewellify-standards",
        overview: "A CLI tool that scaffolds a Nuxt 3 ESLint setup using my custom linting standards.",
        description: `
            <p><strong>ESLint Auewellify Standards</strong> is a fully automated CLI utility designed to streamline the ESLint setup process for Nuxt 3 projects using a customized configuration. It eliminates the repetitive setup work by installing dependencies, generating config files, and updating your project's IDE and framework configuration—all in a single command.</p>
            <br />
            <h3><strong>What It Does</strong></h3>
            <ul>
            <li>- Installs ESLint and <code>@nuxt/eslint</code></li>
            <li>- Creates a custom <code>eslint.config.mjs</code> with predefined rules</li>
            <li>- Updates or creates <code>.vscode/settings.json</code> for VS Code linting support</li>
            <li>- Modifies <code>nuxt.config.ts</code> to include <code>@nuxt/eslint</code> in the <code>modules</code> array</li>
            </ul>
            <br />
            <h3><strong>Project Structure:</strong></h3>
            <pre><code>
eslint-setup-auewellify-standards/
├── bin/
│   └── index.js
├── lib/
│   ├── install.js
│   ├── configFile.js
│   ├── vscodeSettings.js
│   └── updateNuxtConfig.js
├── utils/
│   └── eslintRules.js
├── package.json
└── README.md
            </code></pre>
            <br />
            <h3><strong>Installation & Usage</strong></h3>
            <ol>
            <li>- Clone the repo:<br><code>git clone git@github.com:austinxewell/eslint-setup-auewellify-standards.git</code></li>
            <li>- Make CLI executable:<br><code>chmod +x bin/index.js</code></li>
            <li>- Link the CLI globally:<br><code>npm link</code></li>
            <li>- Run inside a Nuxt 3 project:<br><code>eslint-setup-auewellify-standards</code></li>
            <li>- Be sure to run npm run dev to generate the correct ./nuxt files.</li>
            </ol>
            <br />
            <h3><strong>Test Locally Without Linking</strong></h3>
            <p>From your Nuxt 3 project root, run:</p>
            <code>node path/to/eslint-setup-auewellify-standards/bin/index.js</code>
            <br />
            <br />
            <h3><strong>Notes</strong></h3>
            <ul>
            <li>- If <code>.vscode/settings.json</code> doesn't exist, it gets created.</li>
            <li>- If <code>nuxt.config.ts</code> is missing, the CLI throws a fatal error.</li>
            <li>- Any existing <code>.eslint.config.mjs</code> will be overwritten.</li>
            </ul>
            <br />
            <h3><strong>Windows Users</strong></h3>
            <p>If <code>chmod</code> isn't recognized, use Git Bash or WSL. Do <strong>not</strong> use PowerShell or cmd.exe. Skip chmod and ensure <code>bin/index.js</code> starts with:</p>
            <code>#!/usr/bin/env node</code>
        `,
        isFavorite: false,
        live_url: "",
        github_url: "https://github.com/austinxewell/eslint-setup-auewellify-standards",
        tech_tags: [
            { tag_name: "JavaScript", is_primary: true },
            { tag_name: "Node.js", is_primary: true },
            { tag_name: "ESLint", is_primary: true },
            { tag_name: "CLI", is_primary: false },
            { tag_name: "Nuxt 3", is_primary: false },
            { tag_name: "VS Code", is_primary: false },
            { tag_name: "Automation", is_primary: false }
        ],
        images: [
            { img_name: "Project Structure", img_url: "https://i.postimg.cc/3JZR5qhw/eslint-project-structure.png", is_thumbnail: false },
            { img_name: "Creating Nuxt App", img_url: "https://i.postimg.cc/c1R1wzrc/eslint-creating-nuxtapp.png", is_thumbnail: false },
            { img_name: "Not Selecting Linters", img_url: "https://i.postimg.cc/VvWYwJ3h/eslint-not-selecting-linters.png", is_thumbnail: false },
            { img_name: "Nuxt App Confirmation", img_url: "https://i.postimg.cc/xCHfsxgn/eslint-nuxtapp-confirmation.png", is_thumbnail: false },
            { img_name: "Nuxt App Starter Files", img_url: "https://i.postimg.cc/k5LMv3QT/eslint-nuxtapp-starter-files.png", is_thumbnail: false },
            { img_name: "Installing Standards", img_url: "https://i.postimg.cc/N0KfXfHy/eslint-installing-standards.png", is_thumbnail: false },
            { img_name: "Standards Installed", img_url: "https://i.postimg.cc/13C34Nfh/eslint-standards-installed.png", is_thumbnail: false },
            { img_name: "Updated Nuxt App Files", img_url: "https://i.postimg.cc/9QFfWBXY/eslint-updated-nuxtapp-files.png", is_thumbnail: false },
            { img_name: "Verification of Rules", img_url: "https://i.postimg.cc/ZnSTX8D3/eslint-verification-of-rules.png", is_thumbnail: true },
            { img_name: "Verification of VSCode Settings", img_url: "https://i.postimg.cc/BQ36z0dy/eslint-verification-of-vscode-settings.png", is_thumbnail: false },
            { img_name: "Verification ESLint Added to Modules", img_url: "https://i.postimg.cc/dQr3n1Sr/eslint-verification-on-added-to-modules.png", is_thumbnail: false },
        ]
    }
]