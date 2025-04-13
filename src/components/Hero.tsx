// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center py-16 md:py-20 lg:py-24"> {/* Increased padding slightly */}
      <div className="container mx-auto px-4 text-center">
        {/* Profile Image */}
        <Image
          src="https://picsum.photos/seed/your_seed/150" // Use a consistent seed or your actual photo
          alt="[Your Name]'s Photo"
          width={144}
          height={144}
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Sheng-Lun (Kevin) Wei</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Science PhD Candidate @ National Taiwan University</p>

        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 mb-8 text-lg leading-relaxed"> {/* Use max-w-3xl and text-lg for readability */}
          <p>
            Briefly introduce your research interests and expertise here. e.g., Focusing on Machine Learning, Natural Language Processing, Computer Vision, etc.
          </p>
          <p>
            Provide a more detailed introduction about yourself here, including your academic background, research passion, goals, etc. You can mention why you chose this research field and your long-term career plans.
          </p>
          <p>
            You can also add some personal interests or extracurricular activities to make your profile more engaging.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 mt-8"> {/* Group buttons */}
          <Link href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 scroll-smooth">
            Contact Me
          </Link>
          <Link href="/cv/your_cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-2 px-4 rounded-lg transition duration-300">
            <Download size={18} className="mr-2" />
            My Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
