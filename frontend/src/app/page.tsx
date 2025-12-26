// frontend/src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from "@/lib/config";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import {
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiQt
} from 'react-icons/si';
import SkillsCard from "@/components/Landing/SkillsCard";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl lg:text-5xl font-bold text-foreground mb-4">
                                Patrick Campbell - Software Developer
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-6">
                                Specializing in C++, Python & Modern Web Technologies
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Passionate about building efficient algorithms, engaging user experiences,
                                and scalable software solutions. From chess engines to modern web applications,
                                I bring theoretical knowledge and practical implementation together.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                            >
                                View Projects
                                <FaExternalLinkAlt className="w-4 h-4" />
                            </Link>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                            >
                                <FaDownload className="w-4 h-4" />
                                Download Resume
                            </a>

                            <div className="flex gap-4">
                                <a
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-border hover:bg-muted rounded-lg transition-colors"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href={siteConfig.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-border hover:bg-muted rounded-lg transition-colors"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href={"mailto:" + siteConfig.links.email}
                                    className="p-3 border border-border hover:bg-muted rounded-lg transition-colors"
                                >
                                    <FaEnvelope className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                                {/* Replace with your actual photo */}
                                <div className="w-64 h-64 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                                    Your Photo Here
                                </div>
                            </div>
                            {/* Floating decoration */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Overview */}
            <section className="bg-muted py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
                        <p className="text-muted-foreground text-lg">
                            Technologies I use to build robust and scalable solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Systems Programming */}
                        <SkillsCard Icon={SiCplusplus} iconColor={"text-blue-600"}
                                    skillTitle={"Systems Programming"}
                                    subSkills={["C++", "Algorithms", "Data Structures", "Game Development"]}
                                    skillDescription={"Building efficient algorithms and Desktop applications with both modern gui frameworks and graphics rendering"}/>

                        {/* Data & Automation */}
                        <SkillsCard Icon={SiPython} iconColor={"text-yellow-500"}
                                    skillTitle={"Data & Automation"}
                                    subSkills={["Python", "Web Scraping", "Data Analysis", "Automation"]}
                                    skillDescription={"Data manipulation, web scraping, and process automation scripts."}/>

                        {/* Web Development */}
                        <SkillsCard Icon={SiReact} iconColor={"text-cyan-500"}
                                    skillTitle={"Web Development"}
                                    subSkills={["React", "Next.js", "TypeScript", "PHP"]}
                                    skillDescription={"Modern full-stack applications with responsive design and optimal performance."}/>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground text-lg">
                            Showcasing technical expertise across different domains
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Featured Project 1 */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center gap-5">
                                <SiCplusplus className="w-16 h-16 text-blue-600" />
                                <SiQt className="w-16 h-16 " />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-foreground">ChessRepository</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    Desktop application for saving/discovering chess openings and practicing them. Built with Qt6 and C++ utilising data structures to represent opening trees and providing a modern, interactive gui to manage these intuitively
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">C++</span>
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">Algorithms</span>
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">Qt6</span>
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href="/projects/chess-repo"
                                        className="bg-primary hover:bg-primary-600 text-primary-foreground px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                    <a
                                        href="https://github.com/Leckatall/ChessBible"
                                        target="_blank"
                                        className="border border-border hover:bg-muted text-foreground px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2"
                                    >
                                        <FaGithub className={"w-5 h-5"}/> Github
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Featured Project 2 */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                                <SiNextdotjs className="w-16 h-16 text-foreground" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">Portfolio Site</h3>
                                <p className="text-muted-foreground mb-4">
                                    Modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">Next. js</span>
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">TypeScript</span>
                                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">Tailwind</span>
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href="/projects/portfolio-site"
                                        className="bg-primary hover:bg-primary-600 text-primary-foreground px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                    <a
                                        href="https://github.com/Leckatall/PortfolioSite"
                                        target="_blank"
                                        className="border border-border hover: bg-muted text-foreground px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/projects"
                            className="bg-secondary hover:bg-secondary-600 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* What I Bring */}
            <section className="bg-muted py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">What I Bring</h2>
                        <p className="text-muted-foreground text-lg">
                            Combining theoretical knowledge with practical implementation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Algorithm Design & Optimization</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Strong foundation in data structures, algorithms, and performance optimization
                                        demonstrated through chess engine development.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Modern Web Development</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Experience with current frameworks and best practices for building
                                        scalable, maintainable web applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Testing & Quality Assurance</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Implementing comprehensive testing frameworks to ensure code reliability
                                        and maintainability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Self-directed learning approach with deep theoretical understanding
                                        despite non-traditional educational background.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Ready to work together?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Let's discuss how I can contribute to your team's success.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="mailto:your.email@example. com"
                            className="bg-primary hover:bg-primary-600 text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                        >
                            <FaEnvelope className="w-4 h-4" />
                            Get In Touch
                        </a>
                        <Link
                            href="/projects"
                            className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}