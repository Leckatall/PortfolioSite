import Link from 'next/link';
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
    title:  string;
    description: string;
    projectName: string;
    imageUrl?: string;      // Optional project screenshot
    isHighlighted?: boolean;
}

export default function ProjectCard({
                                        title,
                                        description,
                                        projectName,
                                        imageUrl,
                                        isHighlighted = false
                                    }:  ProjectCardProps) {
    return (
        <div className={`
      bg-card rounded-xl shadow-md hover:shadow-xl hover:bg-primary-600
      transition-all duration-300 overflow-hidden border m-5
      ${isHighlighted ? 'ring-2 ring-blue-500 border-blue-200' : 'border-gray-200'}
    `}>
            {/* Optional Image */}
            {imageUrl && (
                <div className="h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={`${title} screenshot`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Card Content */}
            <div className="p-6">
                {/* Title and Highlight Badge */}
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                    {isHighlighted && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {/* Read More - Internal Link */}
                    <Link
                        href={`/projects/${projectName}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                    >
                        Read More
                    </Link>

                    {/* GitHub Link - External */}
                    <a
                        href={"https://github.com/Leckatall/" + projectName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium flex items-center gap-2"
                    >
                        <FaGithub className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
