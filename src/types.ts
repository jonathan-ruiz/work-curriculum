// Describes a single skill with an optional grouping (e.g., "frontend", "backend")
export interface SkillType {
    readonly label: string;
    readonly value: number;
    readonly group?: string;
}

// Industry classification used to categorize experiences
export type IndustryType =
    | 'gaming'
    | 'building'
    | 'health'
    | 'public infrastructure'
    | 'ecommerce'
    | 'telecommunications'
    | 'robotics'
    | 'learning'
    | 'aeronautics'
    | 'finance';

// Describes a professional experience, project, or role
export interface ExperienceType {
    readonly title: string;
    readonly role?: string[]; // multiple roles possible
    readonly project?: string;
    readonly startDate: Date;
    readonly endDate?: Date;
    readonly company: string;
    readonly finalClient?: string;
    readonly highlight?: boolean;
    readonly skills: SkillType[];
    readonly tasks: string[];
    readonly achievements?: string[];
    readonly image?: string;
    readonly breakPageAfter?: boolean;
    readonly industry: IndustryType;
    readonly grouped?: boolean;
}
