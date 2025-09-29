// src/data/products.ts
import { Product, Testimonial } from '../types/Product';

export const services: Product[] = [
  {
    id: 200,
    title: 'Web Application & E-commerce Development',
    description:
      `Development of robust web applications and high-converting e-commerce platforms. By utilizing cutting-edge technologies like React, Next.js, and Node.js, solutions are architected to be genuinely engaging and powerfully optimized.
      
      <h5>Key Features & Technologies</h5>
      <ul>
        <li><strong>Front-End Components:</strong> Solutions are architected to be genuinely engaging and powerfully optimized using technologies like React and Next.js.</li>
        <li><strong>Back-End Systems:</strong> We utilize Node.js to create a scalable and secure foundation.</li>
        <li><strong>Seamless User Journeys:</strong> Every line of code is dedicated to delivering a polished, intuitive experience.</li>
        <li><strong>Rock-Solid Security:</strong> We ensure secure transactions and a rock-solid foundation for growth.</li>
      </ul>`,
    image: 'https://i.ibb.co/nq4rT0rJ/Ecommerce-web-page-amico-1.png',
    thumbnails: [],
    tags: [],
    icons: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Vue.js',
      'Nuxt.js',
      'Json',
      'Jest',
      'Redux',
      'Firebase',
      'MySQL',
      'MongoDB',
      'npm',
      'Express.js',
      'Tailwind CSS',
      'SASS',
      'Lazy Loading',
      'GitLab',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
  {
    id: 201,
    title: 'UI/UX Design & Prototyping',
    description:
      `An exceptional digital product begins with an outstanding user experience. Specialization in creating intuitive, engaging, and visually stunning user interfaces (UI) and user experiences (UX) that captivate audiences.
      
      <h5>Our Design Process</h5>
      <ul>
        <li><strong>Initial User Research:</strong> We start with comprehensive user research to understand your audience.</li>
        <li><strong>Detailed Wireframing:</strong> This is followed by detailed wireframing to map out the user flow.</li>
        <li><strong>Interactive Prototypes:</strong> We create interactive prototypes for testing and refinement.</li>
        <li><strong>Polished Final Designs:</strong> The process culminates in polished final designs that are not just functional but a joy to use.</li>
      </ul>`,
    image: 'https://i.ibb.co/8ZQyYk9/UI-UX-design-amico.png',
    thumbnails: [],
    tags: [],
    icons: [
      'Figma',
      'Sketch',
      'Adobe XD',
      'Wireframing',
      'Prototyping',
      'User Research',
      'Front-end Maintenance',
      'Photoshop'
    ],
  },
  {
    id: 202,
    title: 'Mobile App Development',
    description:
      `Bringing innovative ideas to the fingertips of millions through the development of high-performance, responsive mobile applications with React Native. This ensures a fluid and consistent user experience across both iOS and Android.
      
      <h5>Development Highlights</h5>
      <ul>
        <li><strong>Cross-Platform Consistency:</strong> We use React Native to ensure a fluid experience on iOS and Android.</li>
        <li><strong>Intuitive UI/UX:</strong> We craft intuitive designs with pixel-perfect visuals.</li>
        <li><strong>State Management:</strong> Redux is used for seamless state management.</li>
        <li><strong>Robust Back-End Integration:</strong> Apps are built to truly stand out with unshakeable functionality.</li>
      </ul>`,
    image: 'https://i.ibb.co/mC9jh9DQ/Mobile-development-amico.png',
    thumbnails: [],
    tags: [],
    icons: [
      'TypeScript',
      'React Native',
      'Redux',
      'React Context',
      'NativeBase',
      'React Native Components',
      'React Navigation',
      'Lazy Loading',
      'Firebase',
      'Expo',
      'SASS',
      'iOS',
      'Android',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
  {
    id: 203,
    title: 'Performance Optimization & SEO Audits',
    description:
      `Significantly boosting a website's visibility and enhancing user experience with specialized performance and SEO audits.
      
      <h5>Audit and Optimization Process</h5>
      <ul>
        <li><strong>In-Depth Analysis:</strong> We conduct a thorough analysis to identify speed bottlenecks and evaluate Core Web Vitals.</li>
        <li><strong>Actionable Reports:</strong> You receive detailed, actionable reports and strategic recommendations.</li>
        <li><strong>Improved Visibility:</strong> We work to dramatically improve loading times, responsiveness, and organic search rankings.</li>
        <li><strong>Attract a Larger Audience:</strong> The goal is to ensure a website achieves its full potential and attracts a significantly larger audience.</li>
      </ul>`,
    image: 'https://i.ibb.co/v6WqhKmZ/SEO-analytics-team-bro.png',
    thumbnails: [],
    tags: [],
    icons: [
      'Google Analytics',
      'Google Search Console',
      'Lighthouse',
      'WebPageTest',
      'SEO',
      'Performance',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
  {
    id: 204,
    title: 'Custom API Development & Integration',
    description:
      `Enabling different systems to communicate effortlessly and providing a powerful backend for cutting-edge applications. Specialization in designing and building secure, scalable, and highly efficient APIs.
      
      <h5>API Services</h5>
      <ul>
        <li><strong>Custom API Development:</strong> We design and build secure, scalable, and highly efficient RESTful APIs from scratch.</li>
        <li><strong>Third-Party Integration:</strong> We seamlessly integrate your platform with essential third-party services like payment gateways or CRM systems.</li>
        <li><strong>Data Flow and Connectivity:</strong> Our focus is always on ensuring smooth data flow and flawless connectivity that empowers your operations.</li>
      </ul>`,
    image: 'https://i.ibb.co/cX7PkR5V/Application-programming-interface-rafiki.png',
    thumbnails: [],
    tags: [],
    icons: [
      'Node.js',
      'Express.js',
      'GraphQL',
      'RESTful API',
      'Postman',
      'MongoDB',
      'MySQL',
      'Firebase',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
  {
    id: 205,
    title: 'Website Maintenance & Content Management',
    description:
      `A website is a living asset, and our services ensure it remains sharp, secure, and always up-to-date.
      
      <h5>Our Maintenance Approach</h5>
      <ul>
        <li><strong>Comprehensive Coverage:</strong> We cover both front-end polish and critical back-end stability.</li>
        <li><strong>Regular Updates:</strong> This includes regular updates and crucial performance optimizations.</li>
        <li><strong>Meticulous Management:</strong> We handle meticulous content management, from cleaning up files to integrating new features.</li>
        <li><strong>Peace of Mind:</strong> Our proactive management lets you focus on your core business, knowing your online platform is at its peak.</li>
      </ul>`,
    image: 'https://i.ibb.co/V0RTw47Y/Content-structure-amico.png',
    thumbnails: [],
    tags: [],
    icons: ['Front-end Maintenance', 'Back-end Maintenance', 'Content Updates', 'Git', 'Service Worker', 'DNS', 'SSL', 'Heroku', 'GitLab'],
  },
  {
    id: 206,
    title: 'WordPress Development',
    description:
      `Unlocking the full power of an online presence with custom WordPress solutions tailored precisely to specific needs.
      
      <h5>Custom WordPress Solutions</h5>
      <ul>
        <li><strong>E-commerce Stores:</strong> We establish powerful e-commerce stores using WooCommerce.</li>
        <li><strong>Multilingual Support:</strong> We create seamless multilingual experiences with tools like Polylang.</li>
        <li><strong>Comprehensive Development:</strong> We handle all aspects, from core installation to bespoke plugin development.</li>
        <li><strong>User-Friendly Design:</strong> Your WordPress site will be robust, user-friendly, and perfectly aligned with your business objectives.</li>
      </ul>`,
    image: 'https://i.ibb.co/RkjLH7R0/Programming-pana-1.png',
    thumbnails: [],
    tags: [],
    icons: ['WordPress', 'WooCommerce', 'Divi', 'Elementor', 'Polylang', 'PHP', 'Front-end Maintenance', 'Back-end Maintenance'],
  },
  {
    id: 207,
    title: 'Static Website Development',
    description:
      `Crafting websites that load in an instant and provide a razor-sharp user experience. Specialization in building lightning-fast static websites.
      
      <h5>Static Website Benefits</h5>
      <ul>
        <li><strong>High Performance:</strong> These sites are highly optimized for speed and load in an instant.</li>
        <li><strong>Inherent Security:</strong> Static sites are inherently secure and built for maximum efficiency.</li>
        <li><strong>Visually Appealing:</strong> We use pure Vanilla JavaScript, HTML5, and SCSS to ensure a visually appealing design.</li>
        <li><strong>Instant Engagement:</strong> Perfect for portfolios, marketing pages, or any project where a message needs to captivate instantly.</li>
      </ul>`,
    image: 'https://i.ibb.co/xSCRphb6/Static-website-amico.png',
    thumbnails: [],
    tags: [],
    icons: [
      'Vanilla JavaScript',
      'HTML5',
      'SASS',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Ant Design',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
  {
    id: 208,
    title: 'Progressive Web App (PWA) Development',
    description:
      `Seamlessly bridging the gap between traditional web and native mobile applications with a Progressive Web App (PWA). An existing web presence can be transformed into an installable, app-like experience that truly excels.
      
      <h5>PWA Features & Advantages</h5>
      <ul>
        <li><strong>Offline Functionality:</strong> The app works offline and loads instantly.</li>
        <li><strong>Push Notifications:</strong> Capable of sending rich push notifications directly to users.</li>
        <li><strong>Enhanced Engagement:</strong> Delivers unparalleled user engagement and accessibility without the need for complex app store downloads.</li>
        <li><strong>Smooth User Experience:</strong> Provides a remarkably smooth and fast experience across all devices and networks.</li>
      </ul>`,
    image: 'https://i.ibb.co/dwYHvtnL/Progresive-app-amico.png',
    thumbnails: [],
    tags: [],
    icons: [
      'Service Worker',
      'Web App Manifest',
      'Push Notifications',
      'Offline First',
      'HTTPS',
      'React',
      'Next.js',
      'JavaScript',
      'Front-end Maintenance',
      'Back-end Maintenance'
    ],
  },
];

export const portfolio: Product[] = [
  {
    id: 100,
    title: 'Application for Democratic Vouting: delib-5.web.app',
    description:
      `Contribution to the development of custom popup components for the delib-5.web.app platform. The project leveraged Figma for design and Next.js with TypeScript for implementation.
      
      <h5>Project Highlights</h5>
      <ul>
        <li><strong>Interactive Components:</strong> A double-paged popup component was developed with fully interactive elements.</li>
        <li><strong>Improved Performance:</strong> Bug fixes and CSS corrections led to a noticeable improvement in site functionality and performance by 15%.</li>
        <li><strong>Team Collaboration:</strong> This was a collaborative effort with a team of eight members, coordinated via Slack for seamless communication.</li>
      </ul>`,
    image: 'https://i.ibb.co/r28ggH1j/Screenshot-2025-08-30-223821.png',
    thumbnails: ["https://i.ibb.co/sdFMhrv3/Screenshot-2024-04-15-122715.png", 'https://i.ibb.co/LXqBC0xy/f6be4a5c-608b-4972-95e7-c92d95a425ff-processed.png'],
    tags: ['Next.js', 'Figma', 'TypeScript', 'MySQL', 'Firebase', 'Bug Fixing', 'Performance Optimization'],
    icons: ['Vite', 'Figma', 'Next.js', 'TypeScript', 'Json', 'Jest', 'Firebase', 'MySQL', 'Node.js', 'SASS', 'Front-end Maintenance'],
    link: 'https://delib-5.web.app/',
  },
  {
    id: 101,
    title: 'Music Study Application: loctoc.ch',
    description:
      `Maintenance and active development of frontend components for a Swiss-based music application that provides online and in-person lessons for students.
      
      <h5>Development & Features</h5>
      <ul>
        <li><strong>New Front-Page Components:</strong> Two new front-page components were added and translated into four languages, improving the site's homepage explanation by 30%.</li>
        <li><strong>Technology Stack:</strong> The platform uses Svelte and SvelteKit, with payment services integrated via Stripe and content delivery optimized with BunnyNet CDN.</li>
        <li><strong>Comprehensive Ecosystem:</strong> The project operates with a Golang backend, Postgres DB, Docker, Heroku, and GitLab for seamless collaboration and deployment.</li>
      </ul>`,
    image: 'https://i.ibb.co/vCJgfqLB/Screenshot-2025-08-30-204116.png',
    thumbnails: ["https://i.ibb.co/7x86B7xK/Screenshot-2025-08-30-222214.png", "https://i.ibb.co/XZRCy2KL/e17196a3-7752-4ea8-b7af-c05095f6fb7c-processed.png"],
    tags: ['Svelte', 'SvelteKit', 'SMUI', 'Stripe', 'BunnyNet CDN', 'Postgres DB', 'Docker', 'Heroku', 'GitLab'],
    icons: ['Svelte', 'Stripe', 'SvelteKit', 'PostgreSQL', 'Docker', 'Heroku', 'Golang', 'Json', 'SASS', "GitLab", 'Front-end Maintenance', 'Back-end Maintenance'],
    link: 'https://loctoc.ch/',
    gitlabLink:'https://gitlab.com/loctoc'
  },
  {
    id: 102,
    title: "Orchestra Concerts Platform: klangweltfinder-lartedelsuono.ch",
    description:
      `A comprehensive, multilingual WordPress website was developed for a Swiss-based philharmonic orchestra.
      
      <h5>Project Scope</h5>
      <ul>
        <li><strong>Custom Event Management:</strong> The platform features a custom event management system with core functionality extended through deep customization of PHP files.</li>
        <li><strong>Multilingual Support:</strong> The site is fully translatable via the Polylang plugin.</li>
        <li><strong>Comprehensive Management:</strong> The project included domain implementation, SSL certificate management, secure hosting deployment, and ongoing maintenance of the MySQL database and PHP backend.</li>
      </ul>`,
    image: "https://i.ibb.co/0wt6jBT/Screenshot-2025-09-01-214529.png",
    thumbnails: ['https://i.ibb.co/wFQxJ2Hw/Screenshot-2025-09-01-214726.png', 'https://i.ibb.co/Rk75q1Mk/8502cb9f-206d-4e48-b2b8-edb7b184a1ad-processed.png'],
    tags: ["WordPress", "WooCommerce", "Web Development", 'Full-Stack'],
    icons: ["WordPress", "WooCommerce", "Divi", "Elementor", "Polylang", "PHP", 'Front-end Maintenance', 'Back-end Maintenance', 'Service Worker', 'DNS', 'SSL'],
    link: "https://klangweltfinder-lartedelsuono.ch/"
  },
  {
    id: 103,
    title: 'Psychological Support Website: lebend-ich.ch',
    description:
      `A bespoke, high-performance website was developed for a psychological support practice. Built from scratch using Vanilla JavaScript, styled with SASS and CSS, and powered by a Node.js backend.
      
      <h5>Key Features</h5>
      <ul>
        <li><strong>Lightweight and Fast:</strong> The site is exceptionally lightweight and fast, perfect for a professional practice.</li>
        <li><strong>Custom Components:</strong> Features a custom read-more/read-less button, a dynamic testimonials component, and a picture gallery.</li>
        <li><strong>Swiss Health Standards:</strong> The privacy policy was meticulously crafted to meet official Swiss medical health standards.</li>
        <li><strong>Continuous Improvement:</strong> Google Analytics was deployed to track user activity and provide data for continuous improvement of the user experience.</li>
      </ul>`,
    image: 'https://i.ibb.co/twnrkmNt/Screenshot-2025-05-23-230038.png',
    thumbnails: [
      'https://i.ibb.co/PX5zpXZ/Screenshot-2025-05-23-230121.png',
      'https://i.ibb.co/s9nsdyZ7/180c0a36-cb79-4f6a-9afc-e7d9b0ae53ba-processed.png',
    ],
    tags: ['React', 'SEO', 'Marketing Website'],
    icons: ['Vanilla JavaScript', 'Node.js', 'HTML5', 'SASS', 'CSS3', 'Firebase', 'Front-end Maintenance', 'Back-end Maintenance', 'Service Worker', 'DNS', 'SSL'],
    link: 'https://lebend-ich.ch/',
    githubLink: "https://github.com/mementomori16/Daniela-Hagmann-"

  },
  {
    id: 104,
    title: 'Custom E-commerce Platform Online Store',
    description: `Development of a high-converting online store with secure payments and inventory management, engineered to significantly boost client sales. The platform's architecture is built with a focus on performance, scalability, and seamless user experience, utilizing a robust RESTful API for efficient data handling.
    
    <h5>Front-End Components and User Experience</h5>
    <ul>
      <li><strong>Product Card & Detail Page:</strong> A custom card component provides a clean display of products. Clicking a card opens a dedicated product page with a custom-developed image gallery featuring a thumbnail-based navigation system and a smooth zoom component for detailed viewing. Each product page includes a likes counter, view counter, and product sharing options via social media or direct link.</li>
      <li><strong>Navigation & Discovery:</strong> The site employs multiple product carousel components to enhance user discovery. These include a homepage carousel for featured products, a carousel for similar items based on a user's current view, and another for additional related products. A search bar is also available, providing users with a fast and efficient way to find products.</li>
      <li><strong>Interactive Features:</strong> Core components were developed to improve site usability and performance. This includes a lazy-load component to optimize loading times, a "push up" button for easy navigation, and a notification popup for age-gated content, limiting adult product viewing for users under 18.</li>
    </ul>
    
    <h5>Backend and Core Functionality</h5>
    <ul>
      <li><strong>Secure Transactions:</strong> The Stripe payment component and shopping basket component were implemented to handle secure transactions and inventory management. This integration ensures a smooth and reliable checkout process for customers.</li>
      <li><strong>User Authentication:</strong> A Login component was integrated, offering users the convenience of a Google account for quick and easy sign-in.</li>
    </ul>
    
    <h5>Unique Features</h5>
    <ul>
      <li><strong>Audio Player:</strong> A custom audio player component was developed and placed in the footer, providing a unique user experience. It allows users to start music upon entering the site, with controls for volume and mute.</li>
    </ul>`,
    image: 'https://i.ibb.co/bRzTZ614/Screenshot-2025-09-02-214807.png',
    thumbnails: ["https://i.ibb.co/60JCFs6P/Screenshot-2025-09-02-214847.png", "https://i.ibb.co/CsHp1v9T/Screenshot-2025-09-02-214932.png"],
    tags: ['Next.js', 'React', 'Stripe', 'E-commerce'],
    icons: ['TypeScript', 'React Context', 'Redux', 'Next.js', 'Jest', 'Node.js', 'Vite', 'Stripe', 'React', 'RESTful API', 'Json', 'Lazy Loading', 'Express.js', 'SASS', 'MongoDB', 'Google Analytics', 'GitLab', 'Git', 'Front-end Maintenance', 'Back-end Maintenance'],
  },
  {
    id: 105,
    title: 'Messenger component for Mobile App',
    description:
      `A front-end messenger component was developed for a mobile application, built using React Native.
      
      <h5>Component Features</h5>
      <ul>
        <li><strong>User Interface:</strong> The component features a user's name and photo, text fields, and message timestamps.</li>
        <li><strong>Notifications & Status:</strong> Includes a message notification icon with an unread count, and read/unread status arrows.</li>
        <li><strong>Search and Navigation:</strong> A search bar allows users to find specific users or messages. An additional popup component was created to include a 'write a message' button, as well as buttons for location, notifications, and announcements.</li>
      </ul>`,
    image: 'https://i.ibb.co/cXJ3dvm3/343af37f-f4b9-4590-904b-131f1b1fe716-processed.png',
    thumbnails: ['https://i.ibb.co/QypzWwt/41167611-ccb3-4a2a-be1a-4920b597d922-processed.png'],
    tags: ['React Native', 'Firebase', 'Mobile App', 'iOS', 'Android'],
    icons: ['React Native', 'React Native Components', 'React Navigation', 'NativeBase', 'Expo Router', 'Expo', 'Babel', 'TypeScript', 'npm', 'Json', 'SASS', 'iOS', 'Android', 'Firebase'],
  },
  {
  "id": 106,
  "title": "Hieroglyph Code: Custom Software Solutions",
  "description": "A dynamic web application and portfolio site that demonstrates the creation of robust digital products from concept to completion. This project showcases my expertise as a full-stack developer, combining elegant design with a modern, scalable architecture.\n\n##### Key Features\n<ul>\n<li><strong>Responsive Design:</strong> The application is fully responsive, providing a seamless user experience across all devices, including mobile, tablet, and desktop.</li>\n<li><strong>Dynamic Content:</strong> Custom-built components, such as a fully interactive photo gallery with zoom functionality and dynamic carousels, handle products and testimonials.</li>\n<li><strong>Intuitive UX/UI:</strong> Every element, from the navigation menu to the contact form, was meticulously designed for user-friendliness and visual appeal, ensuring effortless engagement.</li>\n</ul>\n\n##### Technology & Architecture\n<ul>\n<li><strong>Front-End:</strong> Built with React and TypeScript, ensuring a robust and maintainable codebase.</li>\n<li><strong>Back-End:</strong> Powered by Node.js, with a hybrid architecture that leverages API calls for dynamic image assets while using a local JSON data source for content.</li>\n<li><strong>Workflow:</strong> An automated CI/CD pipeline was configured with GitHub Actions and Firebase Hosting, ensuring reliable, hands-off deployment.</li>\n</ul>",
  "image": "https://i.ibb.co/DDgTTR3h/Screenshot-2025-09-29-161049.png",
  "thumbnails": [
    "https://i.ibb.co/zVkKDcBY/4c7d777b-b51d-4e24-81cb-ad078c82f3a2-processed.png",
    "https://i.ibb.co/nqtBgsTB/Screenshot-2025-09-17-155400.png"
  ],
  "tags": [
    "React",
    "TypeScript",
    "Node.js",
    "Full-Stack",
    "Web Application",
    "Portfolio"
  ],
  "icons": [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "SASS",
    "GitHub",
    "Service Worker",
    "CI/CD"
  ],
  "link": "https://hieroglyphcode.ch/",
  "githubLink": "https://github.com/mementomori16/hieroglyph-code"
}
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I can recommend Ilya's work, and him personally, with full conviction. I don't even know where to begin in highlighting his qualities. His personality is exceptional, and this shines through in his work. He's not your typical programmer. I have a feeling he started that field of study simply to satisfy his brilliant mind. But Ilya's work is more than just coding. His range of experience seems endless, which makes his input incredibly valuable. He's knowledgeable in art as well as current technological developments. His creativity overflows. He genuinely invests himself in his work rather than just fulfilling a task. What's truly valuable is that he contributes for the benefit of the client. He's always thinking, \"What else could be helpful? What could make this new homepage even more up-to-date?\" Things I couldn't even imagine existed are commonplace for him, and he incorporates them. He also possesses a patience and kindness that made our collaboration incredibly pleasant. My objections, ideas, wishes... everything! He always took everything to heart and implemented it. Even when my work required something a bit old-fashioned, he made an absolute effort to find the best solution for me. It's a gift to have Ilya by my side, both for the design and the maintenance of my homepage.",
    clientName: "Daniela Hagmann",
    clientTitle: "Co",
    clientCompany: "Lebend-Ich",
    clientImage: "https://i.ibb.co/xKGQtdbJ/Portrait-7-photoshoped.jpg",
  },
  {
    id: 2,
    quote: "We were incredibly pleased with Ilya's contributions to our team. He played a key role in developing several components of our main PWA, consistently maintaining a positive attitude and fostering a great atmosphere in the workplace. Ilya is a true asset!",
    clientName: "Tal Yaron",
    clientTitle: "CEO",
    clientCompany: "FreeDi",
    clientImage: "https://i.ibb.co/1Jt1c6kC/1670996333512.jpg",
  }
];

export const products = {
  services: services,
  portfolio: portfolio,
  testimonials: testimonials, // Your corrected line
};