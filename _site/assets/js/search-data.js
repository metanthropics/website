// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-main",
    title: "MAIN",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "BLOG",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "PUBLICATIONS",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "PROJECTS",
          description: "A curated collection of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "REPOSITORIES",
          description: "Our open-source projects, research code, and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-people",
          title: "PEOPLE",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-our-research-agenda-the-path-to-agi",
        
          title: "Our Research Agenda: The Path to AGI",
        
        description: "An overview of the core research pillars guiding our work at Metanthropic on the path to building safe and beneficial AGI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/our-research-agenda/";
          
        },
      },{id: "news-announcing-metanthropic",
          title: 'Announcing METANTHROPIC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-10-announcing-metanhropic-labs/";
            },},{id: "projects-revisiting-alexnet-with-modern-optimization",
          title: 'Revisiting AlexNet with Modern Optimization',
          description: "Achieving 95.7% accuracy on CIF-AR-10 by updating a classic CNN architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/revisiting-alexnet/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%74%61%6E%74%68%72%6F%70%69%63%6C%61%62%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/metanthropics", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=x63qMxQAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/company/metanthropicresearch", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
