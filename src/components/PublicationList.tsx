import React from 'react';
import { publicationsData } from '@/data/publications';
import PublicationItem from './PublicationItem';

interface PublicationListProps {
  filter?: 'all' | 'featured';
  limit?: number;
  searchTerm?: string;
}

const PublicationList: React.FC<PublicationListProps> = ({
  filter = 'all',
  limit,
  searchTerm = '',
}) => {

  const filteredData = publicationsData
    .filter(pub => {
      if (filter === 'featured' && !pub.featured) {
        return false;
      }
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const searchableText = `${pub.title} ${pub.authors} ${pub.venue} ${pub.venueAcronym || ''} ${pub.year}`.toLowerCase();
        if (!searchableText.includes(lowerSearchTerm)) {
          return false;
        }
      }
      return true;
    })
    .slice(0, limit);

  if (filteredData.length === 0) {
    return <p className="text-center text-gray-500 py-4">
      {searchTerm ? `No publications found matching "${searchTerm}".` : 'No publications available.'}
      </p>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {filteredData.map((pub, index) => (
        <PublicationItem key={pub.doiLink || pub.title || index} {...pub} />
      ))}
    </div>
  );
};

export default PublicationList;
