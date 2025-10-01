import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 

import CvSkills from './CvSkills'; 
import './cv.scss';

// Sidebar Icons
import { SiGithub, SiGitlab } from 'react-icons/si'; 
import { FaGlobe, FaEnvelope, FaLink, FaFolderOpen } from 'react-icons/fa';
import { IoLocationSharp, IoLanguageSharp } from "react-icons/io5";

// Main Section Title Icons
import { FaUser, FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';

// Placeholder URL
const PROFILE_IMAGE_URL = "https://i.ibb.co/0tfzD7K/received-341071728732981.png";

// Helper component for the external project links
const ProjectLink: React.FC<{ href: string, text: string }> = ({ href, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <FaLink size={12} />
        {text}
    </a>
);

// Interface to help TypeScript understand the project data structure
interface ProjectData {
    company: string;
    title: string;
    date: string;
    bullets: string[];
    links: {
        live?: string;
        code?: string;
        note?: string;
    };
}

// Interface for Education data
interface EducationData {
    title: string;
    date: string;
    degree: string;
    url?: string;
}


export default function Cv(): JSX.Element {
    const { t } = useTranslation();

    // DYNAMIC PRIVACY CONTROL: Blocks search indexing ONLY when this component is mounted
    useEffect(() => {
        // 1. Create the meta tag element
        const metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        metaTag.content = 'noindex, nofollow';

        // 2. Add a unique attribute so we can find it later
        metaTag.setAttribute('data-cv-noindex', 'true'); 

        // 3. Append the tag to the <head>
        document.head.appendChild(metaTag);

        // 4. Cleanup function: remove the tag when the CV page unmounts (navigating away)
        return () => {
            const existingTag = document.querySelector('[data-cv-noindex="true"]');
            if (existingTag) {
                document.head.removeChild(existingTag);
            }
        };
    }, []); 


    // Helper function to safely render list items from the translation file
    const renderProjectBullets = (bullets: string[]): JSX.Element[] => {
        return bullets.map((text: string, index: number) => (
            <li key={index}>{text}</li>
        ));
    };

    // Helper to render Project blocks by key
    const renderProjectBlock = (project: ProjectData, key: string, separator = true) => (
        <React.Fragment key={key}>
            <div className="jobBlock">
                <div className='blockHeader'>
                    <span className='title'>
                        {project.company} - {project.title}
                    </span>
                    <span className='date'>
                        {project.date} | {t('cvPage.location').split(',')[0]}
                    </span>
                </div>
                <ul className='highlights'>
                    {renderProjectBullets(project.bullets)}
                </ul>
                <div className='project-links'>
                    {/* Project links use external <a> tags */}
                    {project.links.live && <ProjectLink href={project.links.live} text="Live Project" />}
                    {project.links.code && <ProjectLink href={project.links.code} text="Code Repository" />}
                    {project.links.note && <p className='degree'>{project.links.note}</p>}
                </div>
            </div>
            {separator && <div className='separator'></div>}
        </React.Fragment>
    );

    // Helper to render Education blocks
    const renderEducationBlock = (keyPrefix: string, separator = true) => {
        const education: EducationData = t(keyPrefix, { returnObjects: true }) as EducationData;

        // Determine the content for the title, making it an external link if a URL is present
        const titleContent = education.url ? (
            <a href={education.url} target="_blank" rel="noopener noreferrer">
                {education.title}
            </a>
        ) : (
            education.title
        );

        return (
            <React.Fragment key={keyPrefix}>
                <div className='educationBlock'>
                    <div className='blockHeader'>
                        <span className='title'>
                            {titleContent}
                        </span>
                        <span className='date'> 
                            {education.date}
                        </span>
                    </div> 
                    <div className='degree'>
                        {education.degree}
                    </div>
                </div>
                {separator && <div className='separator'></div>}
            </React.Fragment>
        );
    }

    // Helper to render Languages list for the sidebar
    const renderSidebarLanguages = (): JSX.Element => {
        const languages = ['english', 'russian', 'german'];
        
        const languageSpans = languages.map((langKey, index) => {
            const name = t(`cvPage.languages.${langKey}.name`);
            return (
                <React.Fragment key={langKey}>
                    <span>{name}</span>
                    {index < languages.length - 1 && <span className="language-separator">|</span>}
                </React.Fragment>
            );
        });
        return <div className="language-list-horizontal">{languageSpans}</div>;
    }

    // Retrieve projects data
    const projectsData: Record<string, ProjectData> = t('cvPage.projects', { returnObjects: true }) as Record<string, ProjectData>;


    return (
        <div className="cv-container image-layout">
            
            {/* LEFT COLUMN: SIDEBAR */}
            <div className="cv-sidebar">
                
                {/* Profile Picture (Image with Link) */}
                <div className="profile-image-container">
                    <a href="https://hieroglyphcode.ch" target="_blank" rel="noopener noreferrer">
                        <img
                            src={PROFILE_IMAGE_URL}
                            alt={t('cvPage.titleSuffix')}
                            className="profile-image"
                        />
                    </a>
                </div>

                {/* Name Block */}
                <div id='nameBlock'>
                    <span className='name largeFont'>{t('cvPage.titleSuffix')}</span>
                    <span className='label smallFont'>{t('cvPage.titlePrefix')}</span>
                </div>
                
                {/* Contact Information Block */}
                <div className='sidebar-section contact-info-block'>
                    {/* Email */}
                    <div className='sidebar-contact-item'>
                        <FaEnvelope size={16} className="icon" /> 
                        <a href={`mailto:${t('cvPage.email')}`}>{t('cvPage.email')}</a>
                    </div>
                    {/* Location */}
                    <div className='sidebar-contact-item'>
                        <IoLocationSharp size={16} className="icon" />
                        <span>{t('cvPage.location')}</span>
                    </div>
                    {/* Website */}
                    <div className='sidebar-contact-item'>
                        <FaGlobe size={16} className="icon" />
                        <a href="https://hieroglyphcode.ch" target="_blank" rel="noopener noreferrer">hieroglyphcode.ch</a>
                    </div>
                    
                    {/* Portfolio Link - NOW USING react-router-dom's <Link> component */}
                    <div className='sidebar-contact-item'>
                        <FaFolderOpen size={16} className="icon" />
                        <Link to="/projects"> {/* Directs to the internal route defined in your router.tsx */}
                            View Portfolio
                        </Link>
                    </div>
                </div>

                {/* Languages Block */}
                <div className='sidebar-section external-links-block'>
                        <div className='sidebar-contact-item language-item-override'>
                        <IoLanguageSharp size={16} className="icon" />
                        {renderSidebarLanguages()}
                    </div>
                </div>

                {/* Social/Profiles */}
                <div className='sidebar-section profile-links'>
                    <a href="https://github.com/mementomori16" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <SiGithub size={22} />
                    </a>
                    <a href="https://gitlab.com/mementomori1571" target="_blank" rel="noopener noreferrer" aria-label="GitLab Profile">
                        <SiGitlab size={22} />
                    </a>
                </div>

            </div>
            {/* END OF SIDEBAR */}
            
            <div className="cv-flex-wrapper">
                
                {/* RIGHT COLUMN: MAIN CONTENT - SCROLLABLE CONTENT */}
                <div className="cv-main-content">
                    
                    {/* 1. ABOUT */}
                    <div id='summaryBlock' className="main-content-section">
                        <h2 className="section-title">
                            <FaUser size={20} />
                            {t('cvPage.aboutTitle')}
                        </h2>
                        
                        {/* CRITICAL CHANGE: Rendering four separate paragraphs (intro1-intro4) 
                            to avoid one massive block of text and maximize readability.
                        */}
                        <p className='summary-text'>
                            {t('cvPage.intro1')}
                        </p>
                        <p className='summary-text'>
                            {t('cvPage.intro2')}
                        </p>
                        <p className='summary-text'>
                            {t('cvPage.intro3')}
                        </p>
                        <p className='summary-text'>
                            {t('cvPage.intro4')}
                        </p>
                        {/* END CRITICAL CHANGE */}
                    </div>
                    
                    {/* 2. PROJECTS */}
                    <div id='workBlock' className="main-content-section">
                        <h2 className="section-title">
                            <FaBriefcase size={20} />
                            {t('cvPage.projectsTitle')}
                        </h2>
                        <div className='sectionContent'>
                            {projectsData.p1_hieroglyph && renderProjectBlock(projectsData.p1_hieroglyph, 'p1', true)}
                            {projectsData.p2_loctoc && renderProjectBlock(projectsData.p2_loctoc, 'p2', true)}
                            {projectsData.p3_mindconnect && renderProjectBlock(projectsData.p3_mindconnect, 'p3', true)}
                            {projectsData.p4_freedi && renderProjectBlock(projectsData.p4_freedi, 'p4', true)}
                            {projectsData.p5_danielahagmann && renderProjectBlock(projectsData.p5_danielahagmann, 'p5', false)} 
                        </div>
                    </div>

                    {/* 3. SKILLS */}
                    <div id='skills' className="main-content-section">
                        <h2 className="section-title">
                            <FaCode size={20} />
                            {t('cvPage.skillsTitle')}
                        </h2>
                        <div className='sectionContent'>
                            <CvSkills /> 
                        </div>
                    </div>
                    
                    {/* 4. EDUCATION */}
                    <div id='education' className="main-content-section">
                        <h2 className="section-title">
                            <FaGraduationCap size={20} />
                            {t('cvPage.educationTitle')}
                        </h2>
                        <div className='sectionContent'>
                                {renderEducationBlock('cvPage.education.fullStack', true)}
                                {renderEducationBlock('cvPage.education.bachelor', true)}
                                {renderEducationBlock('cvPage.education.highSchool', false)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
