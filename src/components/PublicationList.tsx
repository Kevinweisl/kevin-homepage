import React from 'react';
import { publicationsData } from '@/data/publications';
import PublicationItem from './PublicationItem';

const PublicationList: React.FC = () => {
  if (!publicationsData || publicationsData.length === 0) {
    return <p className="text-center text-gray-500">No publications available yet.</p>;
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {publicationsData.map((pub, index) => (
        <PublicationItem key={pub.doiLink || pub.title || index} {...pub} />
      ))}
    </div>
  );
};

export default PublicationList;
