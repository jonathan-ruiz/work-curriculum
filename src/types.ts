
export interface SkillType {
    label: string;
    value: number;
    group?: string;
}
export interface ExperienceType {
    title: string;
    project?: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    finalClient?: string;
    highlight?: boolean;
    skills: Array<SkillType>;
    tasks: Array<string>;
    achievements: Array<string>;
    image?: string;
    breakPageAfter?: boolean;
    industry?: 'gaming' | 'building' | 'health' | 'public infrastructure' | 'ecommerce' | 'telecommunications' | 'robotics' | 'learning' | 'aeronautics'
    grouped?: boolean;
};