// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, role, features }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-white group-hover:gradient-text">{title}</h4>
        <div className="flex space-x-2">
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Github className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
          {role}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, idx) => (
          <span key={idx} className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition-colors">
            {tech}
          </span>
        ))}
      </div>
      
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-300 hover:text-white transition-colors">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;