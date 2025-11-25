import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import amono from "../project-photos/amono.png";
import crsfcu from "../project-photos/crsfcu.png";
import niyama from "../project-photos/niyama.png";
import ebook from "../project-photos/ebook.png";
import blog from "../project-photos/blog.png";
import order from "../project-photos/order.png";

// Redesigned Single Project Card
const Project = ({ title, description, image, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-color text-color rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:-translate-y-1 inter w-full max-w-xl mx-auto">

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl mb-4"
      />

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center sm:text-left">{title}</h3>

      {/* Description */}
      <p className="leading-relaxed mb-6 min-h-24 sm:min-h-28 text-sm sm:text-base text-center sm:text-left">{description}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 inter">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 w-full sm:w-auto justify-center rounded-xl bg-color text-color font-semibold shadow hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>

        {liveDemoLink && (
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 w-full sm:w-auto text-center rounded-xl rev-bg-color rev-text-color font-semibold shadow hover:bg-gray-900 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

// Redesigned Projects List Section
const ProjectsList = () => {
  const projects = [
    {
      title: 'Niyama Online Exam Proctoring and Anomaly Detection System',
      description: 'Developed secure RESTful endpoints for exam management and proctoring data.Implemented client- side anomaly tracking(mouse clicks, Ctrl + C / V, tab changes) and a complex backend system for anomaly review and status updates(e.g., "Confirmed Cheating").',
      image: niyama,
      githubLink: 'https://github.com/akwhtun/ni-ya-ma-online-exam',
    },
    {
      title: 'Computer University Course Registration System',
      description: 'Built a custom solution to manage student course registration and grades throughout the semester.',
      image: crsfcu,
      githubLink: 'https://github.com/akwhtun/course_registration_system',
    },
    {
      title: 'Amono Online Shop',
      description: ' Developed a fully functional e-commerce platform with distinct user roles (Admin, Business Owner, Customer, Guest). Implemented a complex approval workflow for product posts and managed order history/account suspensions.',
      image: amono,
      githubLink: 'https://github.com/akwhtun/Online-Shop',
    },
    {
      title: 'Ebook Web App',
      description: 'Built a responsive platform to explore, download, and manage eBooks with admin controls for users, content, and interactions.',
      image: ebook,
      githubLink: 'https://github.com/akwhtun/Ebook',
    },
    {
      title: 'Order System',
      description: 'Built a simple and user-friendly food ordering app for university students to quickly order meals, making events like university welcome day stress-free and enjoyable',
      image: order,
      githubLink: 'https://github.com/akwhtun/practical_order_system',
      liveDemoLink: 'https://foodify2.vercel.app/',
    },
    {
      title: 'Blog Web App',
      description: 'Built a responsive, mobile-optimized blog platform to share heartfelt stories, emotions, and experiences through a series of articles.',
      image: blog,
      githubLink: 'https://github.com/akwhtun/my_blog',
      liveDemoLink: 'https://akwh-blog.vercel.app/',
    },
  ];

  return (
    <div id="projects" className="px-4 sm:px-10 xl:px-28 py-16 sm:py-20 bg-color text-color">
      <h2 className="text-3xl sm:text-4xl poppins-regular font-bold text-color mb-10 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
