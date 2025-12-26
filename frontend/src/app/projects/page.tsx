import ProjectCard from "@/components/ProjectCard";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    projectName: string;
    imageUrl?:  string;
    isHighlighted?: boolean;
    category:  'web' | 'cpp' | 'python';
}

const projects: Project[] = [
    {
        title: "ChessRepo",
        description: "Advanced C++ chess engine implementing minimax algorithm with alpha-beta pruning, position evaluation, and opening book integration.  Features difficulty scaling, move validation, and performance optimization.",
        technologies: ["C++", "CMake", "Chess Algorithms", "Game Theory"],
        projectName: "chess-repo",
        imageUrl: "/images/chess-preview.png",
        isHighlighted:  true,
        category: "cpp"
    },
    {
        title: "Portfolio Site",
        description: "Modern, responsive portfolio website built with Next.js and TypeScript. Features project showcases, skills demonstration, and optimized performance with server-side rendering.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
        projectName: "portfolio-site",
        isHighlighted: false,
        category: "web"
    },
    // Add more projects...
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-foreground mb-4">
                    My Projects
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A collection of projects showcasing my skills in C++, Python, and full-stack web development.
                </p>
            </div>

            {/* Featured Projects */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects
                        .filter(project => project.isHighlighted)
                        .map(project => (
                            <ProjectCard key={project.projectName} {...project} />
                        ))}
                </div>
            </section>

            {/* All Projects by Category */}
            <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">All Projects</h2>

                {/* Category Filter Buttons */}
                <div className="flex gap-4 mb-6">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                        All
                    </button>
                    <button className="bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80">
                        Web Development
                    </button>
                    <button className="bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80">
                        C++
                    </button>
                    <button className="bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80">
                        Python
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.projectName} {...project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
