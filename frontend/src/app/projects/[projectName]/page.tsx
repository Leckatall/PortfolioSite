import { notFound } from 'next/navigation';

import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

interface ProjectDetailProps {
    params:
        Promise<{projectName: string}>;
}

// This would eventually come from a database/CMS
async function getProject(projectName: string) {
    const projects = {
        'chess-repo': {
            title: "chessRepo",
            description: "Advanced C++ chess engine implementing minimax algorithm with alpha-beta pruning.",
            longDescription: `
        chessRepo is a sophisticated chess engine written in C++ that implements several advanced algorithms and techniques: 
        
        ## Features
        - **Minimax Algorithm**: Core decision-making algorithm with alpha-beta pruning for optimal performance
        - **Position Evaluation**:  Advanced board evaluation considering piece values, positioning, and strategic elements
        - **Opening Book**:  Database of common opening moves for stronger early game play
        - **Difficulty Scaling**: Adjustable engine strength for different skill levels
        - **Move Validation**: Comprehensive legal move checking including special moves (castling, en passant)
        - **Performance Optimization**:  Efficient data structures and algorithms for fast calculation
        
        ## Technical Implementation
        The engine uses bitboard representation for efficient board state management and implements iterative deepening with transposition tables for enhanced performance.
        
        ## Challenges Solved
        - Optimizing search depth vs. calculation time
        - Implementing complex chess rules accurately
        - Creating an intuitive difficulty progression
      `,
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

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
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
                <FaArrowLeft className="w-4 h-4" />
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
                        <FaGithub className="w-5 h-5" />
                        View Source
                    </a>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-secondary hover:bg-secondary-600 text-secondary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
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
                        <div
                            className="text-foreground"
                            dangerouslySetInnerHTML={{ __html: project. longDescription. replace(/\n/g, '<br/>') }}
                        />
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
export async function generateMetadata({ params }: ProjectDetailProps) {
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
