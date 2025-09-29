import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiVuedotjs,
    SiNuxtdotjs,
    SiJest,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiWordpress,
    SiPhp,
    SiSass,
    SiGit,
    SiPostman,
    SiVite,
    SiTailwindcss,
    SiBootstrap,
    SiRedux,
    SiExpress,
    SiAntdesign,
    SiFigma,
    SiGitlab,
    SiDocker,
    SiHeroku,
    SiSvelte,
    SiStripe,
    SiGo,
    SiPostgresql,
    SiAdobephotoshop,
    SiGithub,
    SiSvelte as SiSveltekit,
    SiReact as SiReactNativeIcon,
    SiIos,
    SiAdobexd,
    SiSketch,
    SiGoogleanalytics,
    SiCloudflare,
    SiVercel,
    SiElementor,
    SiCypress,
} from 'react-icons/si';
import {
    FaCode,
    FaFileCode,
    FaSearch,
    FaLock,
} from 'react-icons/fa';
import {
    BsCloudCheck
} from 'react-icons/bs';

const technologyIcons: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
    // --- Front-End ---
    'TypeScript': (props) => <SiTypescript {...props} color="#007ACC" />,
    'Vanilla JS': (props) => <SiJavascript {...props} color="#F7DF1E" />,
    'React.js': (props) => <SiReact {...props} color="#61DAFB" />,
    'Vue.js': (props) => <SiVuedotjs {...props} color="#4FC08D" />,
    'Angular.js': (props) => <SiNuxtdotjs {...props} color="#00DC82" />,
    'React Native': (props) => <SiReactNativeIcon {...props} color="#61DAFB" />,
    'Expo': (props) => <SiIos {...props} color="#000000" />,
    'Next.js': (props) => <SiNextdotjs {...props} color="#000000" />,
    'Redux.js': (props) => <SiRedux {...props} color="#764ABC" />,
    'Svelte': (props) => <SiSvelte {...props} color="#FF3E00" />,
    'SvelteKit': (props) => <SiSveltekit {...props} color="#FF3E00" />,
    'Responsive Web Design': (props) => <FaFileCode {...props} color="#3F51B5" />,
    'HTML5': (props) => <SiHtml5 {...props} color="#E34F26" />,
    'CSS3': (props) => <SiCss3 {...props} color="#1572B6" />,
    'SASS': (props) => <SiSass {...props} color="#CC6699" />,
    'Bootstrap': (props) => <SiBootstrap {...props} color="#7952B3" />,
    'Tailwind CSS': (props) => <SiTailwindcss {...props} color="#06B6D4" />,

    // --- Back-End ---
    'Node.js': (props) => <SiNodedotjs {...props} color="#339933" />,
    'Express.js': (props) => <SiExpress {...props} color="#000000" />,
    'Vite': (props) => <SiVite {...props} color="#646CFF" />,
    'Cypress (E2E Testing)': (props) => <SiCypress {...props} color="#17202C" />,
    'Jest': (props) => <SiJest {...props} color="#C21325" />,
    'Postman': (props) => <SiPostman {...props} color="#FF6C37" />,
    'PHP': (props) => <SiPhp {...props} color="#777BB4" />,
    'Golang': (props) => <SiGo {...props} color="#00ADD8" />,

    // --- Databases ---
    'MongoDB': (props) => <SiMongodb {...props} color="#47A248" />,
    'MongoAtlas': (props) => <SiMongodb {...props} color="#47A248" />,
    'Firebase': (props) => <SiFirebase {...props} color="#FFCA28" />,
    'MYSQL': (props) => <SiMysql {...props} color="#4479A1" />,
    'Postgres DB': (props) => <SiPostgresql {...props} color="#336791" />,

    // --- AI Tools ---
    'Google Al Studio': (props) => <SiGoogleanalytics {...props} color="#4285F4" />,
    'ChatGPT': (props) => <FaSearch {...props} color="#10a37f" />,
    'Gemini': (props) => <FaSearch {...props} color="#F4B400" />,
    'Specialized Al Coding Platforms': (props) => <FaCode {...props} color="#4285F4" />,
    'Google Generate Al': (props) => <SiGoogleanalytics {...props} color="#4285F4" />,
    'Al Image Generators': (props) => <FaFileCode {...props} color="#3F51B5" />,
    'Al-driven Content Generation': (props) => <FaFileCode {...props} color="#3F51B5" />,
    'Workflow Automation': (props) => <FaCode {...props} color="#4285F4" />,

    // --- Platforms & Services ---
    'Git': (props) => <SiGit {...props} color="#F05032" />,
    'VS Code': (props) => <FaFileCode {...props} color="#007ACC" />,
    'Trello': (props) => <SiGo {...props} color="#0079BF" />,
    'Slack': (props) => <SiAdobexd {...props} color="#E01563" />,
    'Docker': (props) => <SiDocker {...props} color="#2496ED" />,
    'Heroku': (props) => <SiHeroku {...props} color="#430098" />,
    'GitLab': (props) => <SiGitlab {...props} color="#FCA121" />,
    'Stripe': (props) => <SiStripe {...props} color="#635BFF" />,
    'BunnyNet': (props) => <BsCloudCheck {...props} color="#F38020" />,
    'EmailJS': (props) => <SiJavascript {...props} color="#F7DF1E" />,
    'DNS': (props) => <BsCloudCheck {...props} color="#34A853" />,
    'SSL': (props) => <FaLock {...props} color="#4CAF50" />,
    'SEO': (props) => <FaSearch {...props} color="#34A853" />,
    'Google Analytics': (props) => <SiGoogleanalytics {...props} color="#E37400" />,
    'GitHub': (props) => <SiGithub {...props} color="#181717" />,
    'Cloudflare': (props) => <SiCloudflare {...props} color="#F38020" />,
    'Vercel': (props) => <SiVercel {...props} color="#000000" />,

    // --- Design & UI ---
    'Adobe Photoshop': (props) => <SiAdobephotoshop {...props} color="#31A8FF" />,
    'Figma': (props) => <SiFigma {...props} color="#F24E1E" />,
    'Ant Design': (props) => <SiAntdesign {...props} color="#0170FE" />,
    'Corel Painter': (props) => <SiSketch {...props} color="#F7B500" />,

    // --- CMS ---
    'WordPress': (props) => <SiWordpress {...props} color="#21759B" />,
    'Elementor': (props) => <SiElementor {...props} color="#D30C5C" />,
    'WordPress Plugins': (props) => <SiWordpress {...props} color="#21759B" />,
    'Divi': (props) => <SiElementor {...props} color="#21759B" />,
    'SMUI': (props) => <SiSvelte {...props} color="#FF3E00" />,
};

const skillCategories = [
    {
        title: 'cvPage.skillCategory.frontEnd.title',
        skills: ['TypeScript', 'Vanilla JS', 'React.js', 'Vue.js', 'Angular.js', 'React Native', 'Expo', 'Next.js', 'Redux.js', 'Svelte', 'SvelteKit', 'Responsive Web Design', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
        title: 'cvPage.skillCategory.backEnd.title',
        skills: ['Node.js', 'Express.js', 'Vite', 'Cypress (E2E Testing)', 'Jest', 'Postman', 'PHP', 'Golang'], 
    },
    {
        title: 'cvPage.skillCategory.databases.title',
        skills: ['MongoDB', 'MongoAtlas', 'Firebase', 'MYSQL', 'Postgres DB'],
    },
    {
        title: 'cvPage.skillCategory.ai.title',
        skills: ['Google Al Studio', 'ChatGPT', 'Gemini', 'Specialized Al Coding Platforms', 'Google Generate Al', 'Al Image Generators', 'Al-driven Content Generation', 'Workflow Automation'],
    },
    {
        title: 'cvPage.skillCategory.platforms.title',
        skills: ['Git', 'VS Code', 'Trello', 'Slack', 'Docker', 'Heroku', 'GitLab', 'Stripe', 'BunnyNet', 'EmailJS', 'DNS', 'SSL', 'SEO', 'Google Analytics', 'GitHub', 'Cloudflare', 'Vercel'],
    },
    {
        title: 'cvPage.skillCategory.design.title',
        skills: ['Adobe Photoshop', 'Figma', 'Ant Design', 'Corel Painter'],
    },
    {
        title: 'cvPage.skillCategory.cms.title',
        skills: ['WordPress', 'Elementor', 'WordPress Plugins', 'Divi', 'SMUI'], 
    },
];

export default function CvSkills() {
    const { t } = useTranslation();

    return (
        <div className="skills-grid">
            {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                    <h3>{t(category.title)}</h3>
                    <ul className="iconsList">
                        {category.skills.map((skill, skillIndex) => {
                            const IconComponent = technologyIcons[skill];
                            return (
                                <li key={skillIndex} className="iconItem">
                                    {IconComponent ? (
                                        <IconComponent size={20} />
                                    ) : (
                                        <span className="icon-placeholder" title={`Icon not found for ${skill}`}>?</span>
                                    )}
                                    <span>{skill}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}