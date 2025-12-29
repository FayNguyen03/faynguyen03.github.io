import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Project.css';

const verticalProject: any[] = [
    {
        image: '/Projects/AND101P10Screens.gif',
        name: 'MORNING MOSAIC',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain'],
        description: 'A morning app that allows users to check for their horoscope prediction of the day, and read some news while they are starting their daily day',
        github: 'https://github.com/AND101-THE-GIRLS/MORNING_MOSAIC'
    },
    {
        image: '/Projects/wordle.gif',
        name: 'ANDROID WORDLE',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain'],
        description: 'It\'s Wordle Time!!!!',
        github: 'https://github.com/FayNguyen03/WORDLE'
    },
    {
        image: '/Projects/KitchenStory.png',
        name: 'KITCHEN STORY',
        icons: ['devicon-android-plain', 'devicon-kotlin-plain', 'devicon-androidstudio-plain', 'devicon-sqlite-plain'],
        description: 'An Android app that allows users to generate the list of recipes for homecooked meals based on the available ingredients that users have at home. After clicking on recipe, users will see step by step instructions to make the homecooked meals. The app will also show the information about the nutritions and calories for each meal.',
        github: 'https://github.com/Android-102-Project/capstone-project.git',
        link: 'https://youtu.be/p_rFoG0tTxI',
        linkIcon: 'fa-brands fa-youtube'
    },
]
const horizontalProject: any[] = [
    
    {
        image: '/Projects/Minneseum.gif',
        name: 'MINNESEUM',
        icons: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-postgresql-plain'],
        description: 'A website displays all Minnesotan museums',
        github: 'https://github.com/FayNguyen03/MINNESEUM.git'
    },
    {
        image: '/Projects/Serena.gif',
        name: 'SERENA\'S AURELINE',
        icons: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-postgresql-plain', 'devicon-react-original'],
        description: 'Serena\'s Auréline is a creative web app that lets users design their own unique jewelry sets with jewelry pieces (bracelet, necklace, ring, and earrings). Users can choose materials, colors, charms, stones, and personalized engravings to create one-of-a-kind designs that match their style.',
        github: 'https://github.com/FayNguyen03/diy_delight.git'
    },
    {
        image: '/Projects/First Page.png',
        name: 'STUDEE',
        icons: ['devicon-cplusplus-plain', 'devicon-react-original', 'devicon-git-plain', 'fa-solid fa-terminal'],
        description: 'A networking platform for students who need academic support and who want to become tutors',
        github: 'https://github.com/FayNguyen03/STUDEE'
    },
    {
        image: '/Projects/RendezVue.gif',
        name: 'RendezVue',
        icons: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-postgresql-plain', 'devicon-react-original'],
        description: 'This application is designed to connect people who share the same hobbies and live nearby to foster meaningful friendships and community connections. The app functions similarly to a dating platform but focuses on hobby-based matching.',
        github: 'https://github.com/FayNguyen03/RendezVue.git'
    },
    {
        image: '/Projects/Asian130.gif',
        name: 'Collective Warriors From The East',
        icons: ['devicon-typescript-plain', 'devicon-html5-plain', 'devicon-css3-plain','devicon-react-original'],
        description: 'A website that defines Asian superheroes as a distinct sci-fi subgenre and introduces some prominent examples.',
        github: 'https://github.com/FayNguyen03/asian130.git',
        link: 'https://asian130.onrender.com/',
        linkIcon: 'bi bi-globe'
    },
    {
        image: '/Projects/DS.png',
        name: 'DATA SCIENCE PORTFOLIO WEBSITE',
        icons: ['devicon-r-plain'],
        description: 'Website built with Quarto and RMarkdown and hosted by GitHub and RStudio, where I displayed my Data Science-related projects, ranging from analyzing data based on geopgraphical factors to a website to summarize and introduce museums in Minnesota.',
        link: 'https://faynguyen03.github.io/faynguyen.github.io/',
        linkIcon: 'bi bi-globe'
    },
    
    {
        image: '/Projects/SecureCloudStorage.png',
        name: 'SECURE CLOUD STORAGE',
        icons: ['devicon-csharp-plain', 'devicon-html5-plain', 'devicon-css3-plain', 'devicon-mysql-plain colored'],
        description: 'A simple version of secure cloud storage using C\# and ASP.NET. The application will secure all files that are uploaded to the cloud such that only people that gain access or are a part of the accessible group will be able to decrypt uploaded files. Any member of the group should be able to upload encrypted files to the cloud service. To all other users the files will be encrypted.',
        github: 'https://github.com/FayNguyen03/secure-cloud-storage-application.git',
        link: 'https://drive.google.com/file/d/1bmrjb4dlXsaOzBZtGSYwwjh_yBWzhsb-/view?usp=sharing',
        linkIcon: 'fa-solid fa-video'
    },
    {
        image: '/Projects/WebProxy.png',
        name: 'CLI WEB PROXY SERVER',
        icons: ['devicon-csharp-plain', 'devicon-dotnetcore-plain', 'fa-solid fa-server'],
        description: 'A multi-threaded web proxy server that handles HTTP and HTTPS requests, dynamically blocks and unblocks URLs, and efficienly caches HTTP requests locally to save bandwidth.',
        github: 'https://github.com/FayNguyen03/Web-Server-Proxy.git',
        link: 'https://drive.google.com/file/d/13w7haV3JCmmz3Adg7BI5TpUmqR_ywPT-/view?usp=sharing',
        linkIcon: 'fa-solid fa-video'
    },
    {
        image: '/Projects/ER Model.png',
        name: 'St.Olaf College MSCS Department Information Management',
        icons: ['devicon-mysql-plain colored', 'fa-solid fa-database'],
        description: 'A holistic database designed to store and manage student, faculty, course, degree path, major, grade, and course registration information related to the MSCS department (report and graph included on GitHub repo).',
        github: 'https://github.com/FayNguyen03/MSCS-Information-Management.git',
    }
];

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className='project'> 
    <h2>Projects</h2>
        <div className='horizontal-project'>
            {
                horizontalProject.map((project, index) =>{
                    return <ProjectCard 
                                        key={index}
                                        image = {project.image}
                                        name= {project.name}
                                        icons= {project.icons}
                                        description= {project.description}
                                        isVertical={false}
                                        onCardClick={() => handleCardClick(project)}
                                        {...(project.github && {github:project.github})}
                                        {...(project.link && {link:project.link})} 
                                        {...(project.linkIcon && {linkIcon:project.linkIcon})}
                                        />
                })
            }
        </div>
        <h2>Android Projects</h2>
        <div className='vertical-project'>
            {
                verticalProject.map((project, index) =>{
                    return <ProjectCard 
                                        key={index}
                                        image = {project.image}
                                        name= {project.name}
                                        icons= {project.icons}
                                        description= {project.description}
                                        isVertical={true}
                                        onCardClick={() => handleCardClick(project)}
                                        {...(project.github && {github:project.github})}
                                        {...(project.link && {link:project.link})} 
                                        {...(project.linkIcon && {linkIcon:project.linkIcon})}
                                        />
                })
            }
        </div>
        {selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            image={selectedProject.image}
            name={selectedProject.name}
            icons={selectedProject.icons}
            description={selectedProject.description}
            {...(selectedProject.github && {github:selectedProject.github})}
            {...(selectedProject.link && {link:selectedProject.link})}
            {...(selectedProject.linkIcon && {linkIcon:selectedProject.linkIcon})}
          />
        )}
    </div>
    
  )
}

export default Project
