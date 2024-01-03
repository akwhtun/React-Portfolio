import React from 'react';
import JQuery from "../logoes/JQuery.png";
import Tailwind from "../logoes/Tailwind.png";
import Nodejs from "../logoes/Nodejs.png";
import MySQL from "../logoes/MySQL.png";
import Mongodb from "../logoes/Mongodb.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJava, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';
const Skill = ({ name, level, icon, color }) => {
  const getLevelColor = () => {
    switch (level.toLowerCase()) {
      case 'basic':
        return 'bg-blue-400 text-white';
      case 'intermediate':
        return 'bg-yellow-400 text-gray-800';
      case 'advanced':
        return 'bg-green-400 text-white';
      default:
        return 'bg-gray-400 text-gray-800';
    }
  };

  const getBorderColor = () => {
    switch (level.toLowerCase()) {
      case 'basic':
        return 'border-blue-500';
      case 'intermediate':
        return 'border-yellow-500';
      case 'advanced':
        return 'border-green-500';
      default:
        return 'border-gray-500';
    }
  };

  let logoName = "";
  switch (name) {
    case "JQuery":
      logoName = JQuery;
      break;
    case "Tailwind CSS":
      logoName = Tailwind;
      break;
    case "Node Js":
      logoName = Nodejs;
      break;
    case "MySQL":
      logoName = MySQL;
      break;
    case "MongoDB":
      logoName = Mongodb;
      break;
    default:
      break;
  }
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden border ${getBorderColor()}`}>
      <div className={`flex items-center justify-center ${getLevelColor()} text-xl font-semibold py-1`}>
        {level}
      </div>
      <div className="p-6">
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-20 bg-light-gray rounded-full flex items-center justify-center">
          {
            icon !== '' ? 
            <FontAwesomeIcon icon={icon} className={` ${color}`} />
            : 
            <img src={logoName} alt={logoName}  />
          }
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2 text-light-gray text-opacity-90">{name}</h3>
      </div>
    </div>
  );
};

const SkillsList = () => {
  const frontendSkills = [
    {
      name : 'HTML',
      level: 'Advanced',
      icon : faHtml5,
      color : 'text-orange-500 text-6xl',
    },
    {
      name : 'CSS',
      level: 'Advanced',
      icon : faCss3Alt,
      color : 'text-blue-500 text-6xl',
    },
    {
      name : 'Bootstrap',
      level: 'Intermediate',
      icon : faBootstrap,
      color : 'text-purple-600 text-6xl',
    },
    {
      name : 'Tailwind CSS',
      level: 'Intermediate',
      icon :'',
      color : '',
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: faJsSquare,
      color : 'text-yellow-500 text-6xl',
    },
    {
      name: 'JQuery',
      level: 'Intermediate',
      icon: '',
      color : '',
    },
    {
      name: 'React',
      level: 'Advanced',
      icon: faReact,
      color : 'text-blue-300 text-6xl',
    },
  ];
  const backendSkills = [
    {
      name : 'Java',
      level: 'Intermediate',
      icon : faJava,
      color : 'text-red-600 text-6xl',
    },
    {
      name : 'PHP',
      level: 'Advanced',
      icon : faPhp,
      color : 'text-blue-500 text-6xl',
    },
    {
      name : 'Laravel',
      level: 'Advanced',
      icon : faLaravel,
      color : 'text-red-500 text-6xl',
    },
    {
      name : 'Node Js',
      level: 'Basic',
      icon :'',
      color : '',
    },
    {
      name: 'MySQL',
      level: 'Advanced',
      icon: '',
      color : '',
    },
    {
      name: 'MongoDB',
      level: 'Basic',
      icon: '',
      color : '',
    },
  ];
  

  return (
    <div id="skills">
    <p className="line text-3xl text-light-gray text-opacity-90 font-ubuntu">My Skills</p>
    <div className="grid grid-cols-1 gap-y-4 xl:px-28 sm:px-10 px-4 py-10">
    <div>
    <p className="text-2xl text-light-gray text-center font-ubuntu pt-3 skill relative">Front End Skills </p>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
      {frontendSkills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
    </div>
    <div>
    <p className="text-2xl text-light-gray text-center font-ubuntu pt-3 skill relative">Back End Skills </p>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
      {backendSkills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
    </div>
    </div>
    </div>
  );
};

export default SkillsList;
