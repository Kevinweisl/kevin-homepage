import React from 'react';
import type { Metadata } from 'next';
import ExperienceList from '@/components/ExperienceList';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Full Experience',
  description: 'Detailed academic, teaching, work experience, and honors of [Your Name].',
};

export default function ExperiencePage() {
  return (
    <Section id="full-experience" title="My Experience" bgColor="bg-gray-50">
        <ExperienceList />
    </Section>
  );
}
