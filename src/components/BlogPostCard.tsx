import Link from 'next/link';
import React from 'react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

type BlogPostCardProps = BlogPost;

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, date, excerpt, slug }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">Published on: {date}</p>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-auto">
        Read Full Article &rarr;
      </Link>
    </div>
  );
};

export default BlogPostCard;
