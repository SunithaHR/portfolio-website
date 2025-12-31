// src/components/SkillBadge.jsx
import React from 'react';

const SkillBadge = ({ name, level, icon, color }) => {
  return (
    <div className="group relative">
      <div className={`bg-gradient-to-r ${color} rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-white">{name}</h4>
              <span className="text-white/90 text-sm font-medium">{level}%</span>
            </div>
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;