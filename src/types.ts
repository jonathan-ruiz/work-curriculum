
export interface SkillType {
    label: string;
    value: number;
    group?: string;
}
export type IndustryType = 'gaming' | 'building' | 'health' | 'public infrastructure' | 'ecommerce' | 'telecommunications' | 'robotics' | 'learning' | 'aeronautics' | 'finance';

export interface ExperienceType {
    title: string;
    role?: string[];
    project?: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    finalClient?: string;
    highlight?: boolean;
    skills: Array<SkillType>;
    tasks: Array<string>;
    achievements?: Array<string>;
    image?: string;
    breakPageAfter?: boolean;
    industry: IndustryType
    grouped?: boolean;
};