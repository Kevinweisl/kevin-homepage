import React from 'react';
import { experienceData } from '@/data/experience';
import ExperienceItem from './ExperienceItem';

const ExperienceList: React.FC = () => {
  if (!experienceData || experienceData.length === 0) {
    return <p className="text-center text-gray-500">No experience data available yet.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {experienceData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className={`text-2xl font-semibold mb-4 ${category.iconColorClass || 'text-gray-700'}`}>
            {category.categoryTitle}
          </h3>
          <div className="space-y-4">
            {category.items.map((item, itemIndex) => (
              <ExperienceItem
                key={itemIndex}
                {...item}
                isFirst={itemIndex === 0}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
