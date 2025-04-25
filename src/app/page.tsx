import Link from 'next/link';
import type { Metadata } from 'next';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ExperienceItem from '@/components/ExperienceItem';
import ContactLinks from '@/components/ContactLinks';

import PublicationList from '@/components/PublicationList';

import { currentPhd, latestWork } from '@/data/experience';
import { Download, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kevin Wei - Personal Website',
  description: 'Welcome to the personal website of Kevin Wei.',
};

export default function HomePage() {
  const myObfuscatedEmail = "weisl AT nlg.csie DOT ntu.edu.tw";
  const myGithubUrl = "https://github.com/Kevinweisl";
  const myLinkedinUrl = "https://linkedin.com/in/kevin-wei-02001b91";
  const myGoogleScholarUrl = "https://scholar.google.com/citations?user=200UnXEAAAAJ";

  return (
    <>
      <Hero />

      <Section id="publications" title="Selected Publications" bgColor="bg-white">
        <PublicationList filter='featured' />
        <div className="mt-6 text-center">
          <Link
            href="/publications"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group">
            View Full Publications
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      <Section id="experience" title="Experience Highlights" bgColor="bg-gray-50">
         <div className="max-w-3xl mx-auto space-y-6">
            {currentPhd && (
              <div>
                 <ExperienceItem {...currentPhd} isFirst={true} />
              </div>
            )}
            {latestWork && (
              <div>
                 <ExperienceItem {...latestWork} isFirst={!currentPhd} />
              </div>
            )}
            {!currentPhd && !latestWork && (
                <p className="text-center text-gray-500">Experience highlights will be shown here.</p>
            )}
         </div>
         <div className="text-center mt-12">
          <Link href="/experience" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group">
            View Full Experience
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* <Section id="blog" title="Blog / Notes" bgColor="bg-white"> */}
        {/* <BlogPostList /> */}
      {/* </Section> */}

      <Section id="contact" title="Contact Me" bgColor="bg-gray-100">
         <div className="text-center">
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Feel free to reach out if you are interested in my research, have collaboration opportunities, or any questions.
          </p>
          <ContactLinks
            obfuscatedEmail={myObfuscatedEmail}
            githubUrl={myGithubUrl}
            linkedinUrl={myLinkedinUrl}
            googleScholarUrl={myGoogleScholarUrl}
          />
        </div>
      </Section>
    </>
  );
}
