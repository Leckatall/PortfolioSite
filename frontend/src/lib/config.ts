export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
}

export const siteConfig: SiteConfig = {
    name: "Portfolio Site",
    description: "My personal portfolio built with Next.js",
    url: "https://your-site.com",
    ogImage: "https://your-site.com/og.jpg",
    links: {
        twitter: "https://twitter.com/yourusername",
        github: "https://github.com/yourusername",
    },
};
