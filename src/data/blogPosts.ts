export interface BlogPost {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
  }

  export const blogPostsData: BlogPost[] = [
    {
      title: "Post Title One: Tech Sharing",
      date: "2025-04-09",
      excerpt: "A quick share about the latest XYZ technology...",
      slug: "tech-sharing-xyz"
    },
    {
      title: "Post Title Two: Research Thoughts",
      date: "2025-03-15",
      excerpt: "Some thoughts and insights from recent research on ABC...",
      slug: "research-thoughts-abc"
    },
    {
      title: "Post Title Three: Learning Notes",
      date: "2025-02-20",
      excerpt: "Compiled some learning notes regarding the DEF framework...",
      slug: "learning-notes-def"
    },
  ];
