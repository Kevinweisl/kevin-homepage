import React from 'react';

interface ExperienceItemProps {
  title: string;
  institution: string;
  period: string;
  description?: string | string[];
  isFirst?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  institution,
  period,
  description,
  isFirst = false,
}) => {
  return (
    <div className={`relative pl-8 ${!isFirst ? 'pt-4' : ''}`}>
      <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-indigo-200" aria-hidden="true"></div>
      <div className="absolute left-0 top-1 w-5 h-5 bg-indigo-500 rounded-full border-2 border-white" aria-hidden="true"></div>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">{institution} | {period}</p>
      {description && (
        typeof description === 'string'
          ? <p className="mt-1 text-gray-700 text-sm">{description}</p>
          : <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">{description.map((item, index) => <li key={index}>{item}</li>)}</ul>
      )}
    </div>
  );
};

export default ExperienceItem;
