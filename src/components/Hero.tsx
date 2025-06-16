import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="https://picsum.photos/seed/your_seed/150"
          alt="[Your Name]'s Photo"
          width={144}
          height={144}
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Sheng-Lun (Kevin) Wei</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Science PhD Candidate @ National Taiwan University</p>

        <div className="max-w-3xl mx-auto text-gray-700 space-y-4 mb-8 text-lg leading-relaxed" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          <p>
            I am a Computer Science PhD candidate at National Taiwan University, focusing on Natural Language Processing. My research interests lie in Large Language Models. With a strong background in both academia and industry, I have 6+ year experience as a Machine Learning Engineer at ShopBack, Junyi Academy, and KKStream. I am passionate about bridging the gap between theoretical research and practical applications. Beyond my academic and professional pursuits, I am a dedicated baseball enthusiast with over 20 years of experience following MLB, NPB, and CPBL. I am also the founder of <Link href="https://www.ccclub.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ccClub</Link>, a non-profit organization dedicated to teaching programming and fostering a collaborative learning environment. Over the past 8 years, more than 3,000 people have learned with ccClub. Through ccClub, I aim to share my knowledge and experience with the next generation of developers.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
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
