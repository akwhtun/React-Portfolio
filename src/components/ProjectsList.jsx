import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({title, description, languages, githubLink, liveDemoLink}) => {
  return (
    <div className="bg-background-color rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl">
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-4 text-light-gray text-opacity-90">{title}</h3>
        
        {/* Project Description */}
        <p className="text-light-gray text-opacity-95 leading-relaxed lg:h-32 md:h-24 h-32 mb-4">{description}</p>
        
        {/* Languages Used */}
        <div className="flex flex-wrap mb-4">
          {languages.map((language, index) => (
            <span
              key={index}
              className="bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-90 text-xs font-semibold mr-2 mb-2 py-2 px-3 rounded"
            >
              {language}
            </span>
          ))}
        </div>
        

        {/* Project Links */}
        <div className="flex justify-between items-center">
          {/* GitHub Link */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-md transition duration-300 ease-in-out bg-gradient-to-r from-gray-900 to-purple-800 text-white font-semibold hover:from-purple-700 hover:to-purple-600 hover:bg-purple-700"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
          
          {/* Live Demo Link */}
          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-md transition duration-300 ease-in-out bg-purple-900 text-white font-semibold hover:bg-purple-700"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
  
  
}

const ProjectsList = () => {
  const projects = [
    {
      title: 'ECommerce Web Design',
      description: 'This E-Commerce Website shows how a pretty design and useful features come together. It proves that when a website looks great and works great, shopping online becomes easy and fun for everyone!',
      languages: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/project1',
      liveDemoLink: 'https://www.yourproject1demo.com',
    },
    {
      title: 'University Website',
      description: 'This project presents a visually compelling website design.The design showcases information and details about a computer university, offering an engaging and user-friendly interface.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'Simple Game',
      description: 'This game is a simple crescent moon game that children often play.It is just a testing game that mainly uses javascript dom and does not include any special features.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'React Note App',
      description: 'This React Note App is a simple powerful tool for creating, managing, and customizing notes. With its intuitive interface and customizable features, managing your notes has never been easier.',
      languages: ['React', 'CSS'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'Authentication & Authorization',
      description: 'This project showcases secure user login and access control using PHP. It demonstrates how users can safely log in, verifying their identity, and how access to specific features or content can be restricted based on user roles or permissions.',
      languages: ['Bootstrap', 'JQuery', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'Order Lists Note',
      description: 'This project enables efficient order organization through note-taking for customer names, ordered product names, order quantities, and address of customer. With search capabilities and the ability to highlight important orders, it simplifies order management tasks effectively.',
      languages: ['HTML', 'CSS', 'JQuery', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'POS Web App',
      description: 'This web application is a responsive POS (Point of Sale) online website. The system is designed to support both admin and user functionalities.',
      languages: ['Bootstrap', 'JQuery', 'Laravel', 'PHP'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'EBook Web App',
      description: 'This Online EBook Store provides a responsive interface for exploring and downloading books.The system is designed to support both admin and user functionalities.',
      languages: ['Bootstrap', 'JQuery', 'Laravel', 'PHP'],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
    {
      title: 'Amono Online Shop',
      description: 'Amono Online Shop is a fully-functional e-commerce web application. This platform offers a secure and robust solution for online shopping..The system is designed to support for admin, business owner and user functionalities.',
      languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'Java(JSP, Servlets)', 'MySQL' ],
      githubLink: 'https://github.com/yourusername/project2',
      liveDemoLink: 'https://www.yourproject2demo.com',
    },
  ];

  return (
    <div className="" id="projects">
    <p className="line text-3xl text-light-gray text-opacity-90 font-ubuntu">My Projects</p>
    <div className="grid grid-cols-1 gap-y-4 xl:px-28 sm:px-10 px-4 py-10">
      <div className="grid gap-6 lg:grid-cols-2 grid-col-1">
        {projects.map((project, index) => (
         <Project key={index} {...project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectsList;
