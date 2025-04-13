import React from 'react';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';

interface ContactLinksProps {
  obfuscatedEmail: string;
  githubUrl: string;
  linkedinUrl: string;
  googleScholarUrl?: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({
  obfuscatedEmail,
  githubUrl,
  linkedinUrl,
  googleScholarUrl,
}) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 text-gray-600">
      <div className="flex items-center">
        <Mail size={20} className="mr-2 flex-shrink-0" />
        <span>{obfuscatedEmail}</span>
      </div>

      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-900 transition duration-300">
        <Github size={20} className="mr-2" />
        GitHub
      </a>

      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-700 transition duration-300">
        <Linkedin size={20} className="mr-2" />
        LinkedIn
      </a>

      {googleScholarUrl && (
        <a href={googleScholarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-600 transition duration-300">
          <GraduationCap size={20} className="mr-2" />
          Google Scholar
        </a>
      )}
    </div>
  );
};

export default ContactLinks;
