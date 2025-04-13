import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  bgColor?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, bgColor = 'bg-white', children }) => {
  return (
    <section id={id} className={`${bgColor} py-16 md:py-20`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
