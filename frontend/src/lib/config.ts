export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        linkedin: string;
        github: string;
        email: string;
    };
}

export const siteConfig: SiteConfig = {
    name: "P. Campbell Portfolio",
    description: "My personal portfolio built with Next.js",
    url: "https://your-site.com",
    ogImage: "https://your-site.com/og.jpg",
    links: {
        linkedin: "https://www.linkedin.com/in/patrick-campbell-898015247/",
        github: "https://github.com/Leckatall",
        email: "PCampbellOfficial@gmail.com"
    },
};
