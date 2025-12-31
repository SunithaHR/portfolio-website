// src/components/ExperienceCounter.jsx
import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const ExperienceCounter = () => {
  const [months, setMonths] = useState(0);
  const startDate = new Date('2022-04-01');
  const currentDate = new Date();

  useEffect(() => {
    const calculateMonths = () => {
      const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                        (currentDate.getMonth() - startDate.getMonth());
      setMonths(diffMonths);
    };

    calculateMonths();
    const interval = setInterval(calculateMonths, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-5 h-5 text-white" />
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
          </div>
          <p className="text-blue-100">Automatically calculated based on start date</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold text-white animate-pulse">
            {years}<span className="text-3xl">y</span> {remainingMonths}<span className="text-3xl">m</span>
          </div>
          <p className="text-blue-100 mt-1">Total Experience</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/20">
        <p className="text-white/80 text-sm">
          Started: April 2022 • Updated in real-time
        </p>
      </div>
    </div>
  );
};

export default ExperienceCounter;