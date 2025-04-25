export interface ExperienceDetail {
    title: string;
    institution: string;
    period: string;
    description?: string | string[];
  }

  export interface ExperienceCategory {
    categoryTitle: string;
    iconColorClass?: string;
    items: ExperienceDetail[];
  }

  export const experienceData: ExperienceCategory[] = [
    {
      categoryTitle: "Education",
      iconColorClass: "text-indigo-700",
      items: [
        {
          title: "PhD, Computer Science",
          institution: "National Taiwan University",
          period: "Ongoing (Expected Graduation: 2026)",
          description: "Main Research Area: Large Language Model"
        },
        {
          title: "MS, Computer Science",
          institution: "National Taiwan University",
          period: "2016",
          description: "Main Research Area: Information Extraction"
        },
        {
          title: "BS, Computer Science",
          institution: "National Taiwan University",
          period: "2014"
        }
      ]
    },
    {
      categoryTitle: "Teaching",
      iconColorClass: "text-purple-700",
      items: [
        {
          title: "Adjunct Instructor",
          institution: "Center of General Education, National Taiwan University",
          period: "2021 Spring - 2024 Spring, 2025 Spring - Current",
          description: "Course: Programming and Web Scraping (GenEdu5010)"
        },
        {
          title: "Adjunct Instructor",
          institution: "Department of Economics, National Taiwan University",
          period: "2022 Spring, 2023 Spring, 2024 Spring, 2025 Spring",
          description: "Course: Programming (ECON1024)"
        }
      ]
    },
    {
      categoryTitle: "Work",
      iconColorClass: "text-green-700",
      items: [
        {
          title: "Machine Learning Engineer",
          institution: "ShopBack | Taipei, Taiwan",
          period: "May 2022 - Jun. 2023",
          description: []
        },
        {
          title: "Data Engineer",
          institution: "Junyi Academy | Taipei, Taiwan",
          period: "Feb. 2020 - Feb. 2021",
          description: []
        },
        {
          title: "Software Engineer, Applied Data Science Team",
          institution: "KKStream Limited, KKBOX Group | Taipei, Taiwan",
          period: "Dec. 2016 - Jan. 2020",
          description: []
        },
        {
          title: "Software Engineer, College Intern",
          institution: "Hewlett Packard Enterprise | Taipei, Taiwan",
          period: "Aug. 2015 - Jun. 2016",
          description: []
        }
      ]
    },
    {
      categoryTitle: "Awards & Honors",
      iconColorClass: "text-yellow-700",
      items: [
        {
          title: "[Award Name]",
          institution: "[Awarding Institution]",
          period: "[Year Received]",
        },
      ]
    }
  ];


  export const currentPhd = experienceData
    .find(cat => cat.categoryTitle === "Education")?.items
    .find(item => item.title.includes("PhD"));

  export const latestWork = experienceData
    .find(cat => cat.categoryTitle === "Work")?.items[0];
