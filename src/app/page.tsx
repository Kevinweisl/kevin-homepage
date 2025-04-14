import type { Metadata } from 'next';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ExperienceItem from '@/components/ExperienceItem';
import ContactLinks from '@/components/ContactLinks';

import PublicationList from '@/components/PublicationList';


export const metadata: Metadata = {
  title: 'Kevin Wei - Personal Website',
  description: 'Welcome to the personal website of [Your Name].',
};

// --- Homepage Component ---
export default function HomePage() {
  const myObfuscatedEmail = "weisl AT nlg.csie DOT ntu.edu.tw";
  const myGithubUrl = "https://github.com/Kevinweisl";
  const myLinkedinUrl = "https://linkedin.com/in/kevin-wei-02001b91";
  const myGoogleScholarUrl = "https://scholar.google.com/citations?user=200UnXEAAAAJ";

  return (
    <>
      <Hero />

      <Section id="publications" title="Publications" bgColor="bg-white">
        <PublicationList />
      </Section>

      <Section id="experience" title="Experience" bgColor="bg-gray-50">
         <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Education</h3>
            <div className="space-y-4">
               <ExperienceItem
                title="PhD, Computer Science"
                institution="National Taiwan University"
                period="Ongoing (Expected Graduation: 2026)"
                description="Main Research Area: Large Language Model"
                isFirst={true}
              />
               <ExperienceItem
                title="MS, Computer Science"
                institution="National Taiwan University"
                description="Main Research Area: Information Extraction"
                period="2016"
              />
               <ExperienceItem
                title="BS, Computer Science"
                institution="National Taiwan University"
                period="2014"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Teaching</h3>
            <div className="space-y-4">
               <ExperienceItem
                title="Adjunct Instructor"
                institution="Center of General Education, National Taiwan University"
                period="2021 Spring - 2024 Spring, 2025 Spring - Current"
                description="Course: Programming and Web Scraping (GenEdu5010)"
                isFirst={true}
              />
               <ExperienceItem
                title="Adjunct Instructor"
                institution="Department of Economics, National Taiwan University"
                period="2022 Spring, 2023 Spring, 2024 Spring, 2025 Spring"
                description="Course: Programming (ECON1024)"
              />
            </div>
          </div>
          <div>
             <h3 className="text-2xl font-semibold mb-4 text-green-700">Work</h3>
             <div className="space-y-4">
               <ExperienceItem
                title="Machine Learning Engineer"
                institution="ShopBack | Taipei, Taiwan"
                period="May 2022 - Jun. 2023"
                description={[
                ]}
                isFirst={true}
              />
               <ExperienceItem
                title="Data Engineer"
                institution="Junyi Academy | Taipei, Taiwan"
                period="Feb. 2020 - Feb. 2021"
                description={[
                ]}
              />
               <ExperienceItem
                title="Software Engineer, Applied Data Science Team"
                institution="KKStream Limited, KKBOX Group | Taipei, Taiwan"
                period="Dec. 2016 - Jan. 2020"
                description={[
                ]}
              />
               <ExperienceItem
                title="Software Engineer, College Intern"
                institution="Hewlett Packard Enterprise | Taipei, Taiwan"
                period="Aug. 2015 - Jun. 2016"
                description={[
                ]}
              />
             </div>
          </div>
           <div>
             <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Awards & Honors</h3>
              <div className="space-y-4">
                 <ExperienceItem
                  title="[Award Name]"
                  institution="[Awarding Institution]"
                  period="[Year Received]"
                  isFirst={true}
                />
              </div>
           </div>
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
