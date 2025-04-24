'use client';

import React, { useState } from 'react';
import PublicationList from '@/components/PublicationList';
import { Search } from 'lucide-react';

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Publications
        </h1>

        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search publications (title, author, venue...)"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow text-blue-800"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </div>
          </div>
        </div>

        <PublicationList filter="all" searchTerm={searchTerm} />
      </div>
    </section>
  );
}
