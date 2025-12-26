import {IconType} from "react-icons";
import {ComponentType} from "react";

interface SkillsCardProps {
    Icon: ComponentType<{ className?: string }>;
    iconColor?: string;
    skillTitle: string;
    subSkills: string[];
    skillDescription: string;
}

export default function SkillsCard({Icon, iconColor, skillTitle, subSkills, skillDescription}: SkillsCardProps) {
    return (
        <div className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
                <Icon className={"w-8 h-8 " + (iconColor ?? "text-primary")}/>
                <h3 className="text-xl font-semibold text-foreground">{skillTitle}</h3>
            </div>
            <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                    {subSkills.map(skill =>
                        (<span key={skill}
                               className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>))}
                </div>
                <p className="text-muted-foreground text-sm">
                    {skillDescription}
                </p>
            </div>
        </div>
    )
}


