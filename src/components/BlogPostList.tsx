import React from 'react';
import { blogPostsData } from '@/data/blogPosts';
import BlogPostCard from './BlogPostCard';
import Link from 'next/link';

const BlogPostList: React.FC = () => {
  if (!blogPostsData || blogPostsData.length === 0) {
    return <p className="text-center text-gray-500">No blog posts available yet.</p>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPostsData.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </div>
      {blogPostsData.length > 0 && (
          <div className="text-center mt-12">
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              View All Posts &rarr;
            </Link>
          </div>
      )}
    </>
  );
};

export default BlogPostList;
