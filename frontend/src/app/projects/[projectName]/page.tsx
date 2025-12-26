import {notFound} from 'next/navigation';

import Link from 'next/link';
import {FaGithub, FaExternalLinkAlt, FaArrowLeft} from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface ProjectDetailProps {
    params:
        Promise<{ projectName: string }>;
}

// This would eventually come from a database/CMS
async function getProject(projectName: string) {
    const projects = {
        'chess-repo': {
            title: "chessRepo",
            description: "Desktop application for discovering, saving and training chess openings",
            longDescription: `# Description

ChessRepo is a fully featured Qt6 desktop application written in C++ that provides people looking to improve at chess a way to discover, save and then practice powerful openings. 

I started this project for my personal use as I found the current available tools clunky and unintegrated while there were great ways of exploring opening data this couldn't be done while providing custom engine analysis. Further these tools for discovering openings were not implemented with easy ways to save and practice the openings you decide to commit to learn.

## Features
- **Opening Discovery** - Integrated tools to allow you to view the win rates and custom evaluations together to allow you to make an educated choice about your opener
- **Opening Saving** - These openings that you discover can then be seamlessly saved
- **Opening Trainer** - After saving your opening(s) of choice you can them with analytics on your learning progression which can then be used to automatically focus on your weaker areas

## Technical Implementation
- **Optimised C++ Data structures** - Lightweight and efficient data structures are used throughout the program keep the application efficient and responsive even on lower end machines
- **In Depth Testing** - Tests are integrated throughout my application allowing me to scale and add features while ensuring that previous development remains functional and highlight the precise nature and location of any runtime/logic/compile errors.
- **Comprehensive Version Control** - While this was a solo project and thus version control wasn't necessary for collaboration. I practiced and developed good version control conventions which enabled me to see when and where errors were introduced and enforce a modular and scalable development pattern that meant my application remained easy to parse and further develop after taking long breaks even as it grew.`,
            technologies: ["C++", "CMake", "Chess Algorithms", "Game Theory", "Bitboards"],
            githubUrl: "https://github.com/Leckatall/chessRepo",
            liveUrl: null,
            images: [
                "/images/chess-gameplay.png",
                "/images/chess-architecture.png"
            ],
            category: "cpp",
            developmentTime: "3 months",
            keyLearnings: ["Algorithm optimization", "Game theory", "C++ advanced features"]
        },
        'portfolio-site': {
            title: "Portfolio Site",
            description: "Modern, responsive portfolio website built with Next.js and TypeScript.",
            longDescription: `
        This portfolio site demonstrates modern web development practices using Next.js 14 with the App Router. 
        
        ## Features
        - **Server-Side Rendering**:  Optimized performance with SSR and static generation
        - **Responsive Design**: Mobile-first design using Tailwind CSS
        - **Type Safety**: Full TypeScript implementation for robust development
        - **Semantic Colors**: Comprehensive design system with dark mode support
        - **Component Architecture**: Reusable, well-structured React components
        
        ## Technical Stack
        Built using the latest web technologies with a focus on performance, accessibility, and maintainability.
      `,
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
            githubUrl: "https://github.com/Leckatall/PortfolioSite",
            liveUrl: "https://your-portfolio. vercel.app",
            images: ["/images/portfolio-home.png"],
            category: "web",
            developmentTime: "2 months",
            keyLearnings: ["Next.js App Router", "Design systems", "TypeScript patterns"]
        }
    };

    return projects[projectName as keyof typeof projects] || null;
}

export default async function ProjectDetailPage({params}: ProjectDetailProps) {
    const project = await getProject((await params).projectName);
    console.log(project);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Back Button */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <FaArrowLeft className="w-4 h-4"/>
                Back to Projects
            </Link>

            {/* Project Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <FaGithub className="w-5 h-5"/>
                        View Source
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-secondary hover:bg-secondary-600 text-secondary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <FaExternalLinkAlt className="w-4 h-4"/>
                            Live Demo
                        </a>
                    )}
                </div>
            </header>

            {/* Project Images */}
            {project.images && project.images.length > 0 && (
                <section className="mb-8">
                    <div className="grid gap-4">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">

                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown children={project.longDescription}/>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(tech => (
                                <span
                                    key={tech}
                                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                            Project Info
                        </h3>
                        <dl className="space-y-2">
                            <div>
                                <dt className="text-sm text-muted-foreground">Category</dt>
                                <dd className="text-foreground capitalize">{project.category}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-muted-foreground">Development Time</dt>
                                <dd className="text-foreground">{project.developmentTime}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Key Learnings */}
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                            Key Learnings
                        </h3>
                        <ul className="space-y-1">
                            {project.keyLearnings.map(learning => (
                                <li key={learning} className="text-muted-foreground text-sm">
                                    • {learning}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate metadata for SEO
export async function generateMetadata({params}: ProjectDetailProps) {
    const project = await getProject((await params).projectName);

    if (!project) {
        return {
            title: 'Project Not Found'
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    };
}
