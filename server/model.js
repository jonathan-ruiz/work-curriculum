// Work experience data for Jonathan Ruiz
const workExperiences = [
    {
        title: 'Cloud Solutions Architect/DevOps (contractor)',
        role: ['Lead', 'DevOps', 'Cloud', 'AI'],
        company: 'Parser Digital',
        project: 'British Airways',
        startDate: new Date('2025-06-09'),
        achievements: [],
        tasks: [
            "Improve existing operational decision support tools",
            "Datadog integration",
            "Review and solve security issues",
            "Cost management reduction"
        ],
        skills: [
            {label: 'Terraform', value: 100},
            {label: 'SpaceLift', value: 100},
            {label: 'AWS', value: 100},
            {label: 'Retool', value: 100},
            {label: 'Git', value: 100},
            {label: 'IT Strategy', value: 100},
            {label: 'Team Lead', value: 100},
        ],
        industry: 'aviation'
    },
    {
        title: 'DevOps/SecOps (contractor)',
        role: ['Lead', 'DevOps', 'SecOps'],
        company: 'Parser Digital',
        project: 'Checkout.com',
        startDate: new Date('2024-09-13'),
        endDate: new Date('2025-06-09'),
        achievements: [],
        tasks: [
            "Enforced and improved least privilege principal",
            "Supported third party security auditory",
            "Developed mechanisms to monitor and alert in case of privilege policy violations",
            "Improved IaC managing and sensitive data storage"
        ],
        skills: [
            {label: 'Terraform', value: 100},
            {label: 'SpaceLift', value: 100},
            {label: 'AWS', value: 100},
            {label: 'Retool', value: 100},
            {label: 'Git', value: 100},
            {label: 'IT Strategy', value: 100},
            {label: 'Team Lead', value: 100},
        ],
        industry: 'finance'
    },
    {
        title: 'DevOps Tech Lead',
        role: ['Lead', 'DevOps'],
        company: 'Nexxyo Labs',
        project: 'Blink Galaxy',
        startDate: new Date('2024-03-13'),
        endDate: new Date('2024-07-13'),
        achievements: [
            "Redesigned infrastructure using IaC with Jenkins, Kubernetes, Terraform, Packer, and Azure."
        ],
        tasks: [
            "Created CI/CD pipelines for infrastructure deployment.",
            "Supported other teams with advice on Azure/Cloud infrastructure."
        ],
        skills: [
            {label: 'Kubernetes', value: 100},
            {label: 'Terraform', value: 100},
            {label: 'Jenkins', value: 100},
            {label: 'Azure', value: 100},
            {label: 'OVH', value: 100},
            {label: 'Git', value: 100},
            {label: 'IT Strategy', value: 100},
            {label: 'Team Lead', value: 100},
            {label: 'Unity', value: 100},
            {label: 'Unreal', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Technical Lead',
        role: ['Lead', 'Developer'],
        company: "Bitheater Ltd (Contracts)",
        finalClient: 'BouncyBrain',
        project: 'FullSteam: Fluffy X Machina',
        startDate: new Date('2023-12-13'),
        endDate: new Date('2024-03-13'),
        achievements: [
            "Led technical development of BouncyBrain game MVP, securing initial investment."
        ],
        tasks: [
            "Defined technical strategy and coding workflows for BouncyBrain.",
            "Designed and programmed game MVP using Unity and C#.",
            "Managed code reviews and ensured high-quality standards.",
            "Provided strategic leadership in business development and IT strategy."
        ],
        skills: [
            {label: 'Unity', value: 90},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Business Development', value: 1},
            {label: 'IT Strategy', value: 100},
            {label: 'Team Lead', value: 100},
            {label: 'Blender', value: 1},
            {label: 'Kubernetes', value: 90},
            {label: 'Jenkins', value: 90},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior DevOps Engineer',
        role: ['DevOps', 'Cloud'],
        company: 'Digit',
        project: 'Star Trek Fleet Command',
        startDate: new Date('2022-07-01'),
        endDate: new Date('2023-12-12'),
        achievements: [
            "Achieved 30% infrastructure cost reduction and 20% Redislabs cost reduction.",
            "Enhanced Dev environments with Twingate & Okta SSO integration.",
            "Successfully migrated Jenkins from 1.0 to 2.0."
        ],
        tasks: [
            "Designed and implemented AWS infrastructure using Terraform (ECS, Lambda, DynamoDB).",
            "Optimized infrastructure for performance, scalability, and cost-efficiency with DataDog, Cloudwatch, & Kibana metrics.",
            "Provided AWS expertise and best practices guidance to teams.",
            "Managed Docker image creation, CI/CD pipelines (Jenkins, GitLab CI), and developed Python scripts for AWS Lambda.",
            "Established effective monitoring with DataDog and Kibana for early issue detection."
        ],
        skills: [
            {label: 'AWS', value: 100},
            {label: 'Terraform', value: 100},
            {label: 'Jenkins', value: 100},
            {label: 'Python', value: 100},
            {label: 'DataDog', value: 100},
            {label: 'Docker', value: 100},
            {label: 'Linux', value: 100},
            {label: 'Gitlab CI', value: 100},
            {label: 'Unity', value: 100},
            {label: 'Git', value: 100},
            {label: 'Redis', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Train Sim World 4',
        startDate: new Date('2021-05-01'),
        endDate: new Date('2022-07-01'),
        tasks: [
            "Designed REST API for game and Creators Club website.",
            "Led application development and refactoring using Gitlab CI, Cucumber, Nest, and Next.js.",
            "Performed ongoing maintenance to ensure optimal application functionality and user experience.",
            "Implemented CI/CD workflows with Gitlab CI and Docker.",
            "Optimized Linux and Nginx infrastructure for improved performance and cost-efficiency.",
            "Managed Google Cloud Services (GCP) focusing on App Engine, Docker, and Kubernetes."
        ],
        skills: [
            {label: 'Kubernetes', value: 100},
            {label: 'TDD', value: 100},
            {label: 'GCP', value: 100},
            {label: 'PostgreSQL', value: 100},
            {label: 'Docker', value: 90},
            {label: 'Gitlab CI', value: 100},
            {label: 'Nest.js', value: 100},
            {label: 'TypeScript', value: 100},
            {label: 'Next.js', value: 100},
            {label: 'Node.js', value: 100},
            {label: 'Git', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Train Sim World 3',
        startDate: new Date('2020-05-01'),
        endDate: new Date('2021-05-01'),
        tasks: [
            "Developed game features and systems for Train Sim World 3.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Train Sim World 2',
        startDate: new Date('2019-05-01'),
        endDate: new Date('2020-05-01'),
        tasks: [
            "Developed game features and systems for Train Sim World 2.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Train Sim World',
        startDate: new Date('2018-05-01'),
        endDate: new Date('2019-05-01'),
        tasks: [
            "Developed game features and systems for Train Sim World.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Train Simulator',
        startDate: new Date('2017-05-01'),
        endDate: new Date('2018-05-01'),
        tasks: [
            "Developed game features and systems for Train Simulator.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Various Train Simulator Projects',
        startDate: new Date('2016-05-01'),
        endDate: new Date('2017-05-01'),
        tasks: [
            "Developed game features and systems for various Train Simulator projects.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Various Projects',
        startDate: new Date('2015-05-01'),
        endDate: new Date('2016-05-01'),
        tasks: [
            "Developed game features and systems for various projects.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Various Projects',
        startDate: new Date('2014-05-01'),
        endDate: new Date('2015-05-01'),
        tasks: [
            "Developed game features and systems for various projects.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Various Projects',
        startDate: new Date('2013-05-01'),
        endDate: new Date('2014-05-01'),
        tasks: [
            "Developed game features and systems for various projects.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Senior Software Engineer',
        company: 'Bitheater Ltd (Contracts)',
        finalClient: 'Dovetailgames',
        project: 'Various Projects',
        startDate: new Date('2012-05-01'),
        endDate: new Date('2013-05-01'),
        tasks: [
            "Developed game features and systems for various projects.",
            "Collaborated with cross-functional teams on game development.",
            "Implemented CI/CD workflows and infrastructure improvements."
        ],
        skills: [
            {label: 'Unity', value: 100},
            {label: 'C#', value: 100},
            {label: 'Git', value: 100},
            {label: 'Game Development', value: 100},
        ],
        industry: 'gaming'
    },
    {
        title: 'Software Engineer',
        company: 'Telefonica/Movistar',
        project: 'Various Projects',
        startDate: new Date('2011-01-01'),
        endDate: new Date('2012-05-01'),
        tasks: [
            "Developed software applications and systems for Telefonica/Movistar.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'Java', value: 100},
            {label: 'JavaScript', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'telecommunications'
    },
    {
        title: 'Software Engineer',
        company: 'Telefonica/Movistar',
        project: 'Various Projects',
        startDate: new Date('2010-01-01'),
        endDate: new Date('2011-01-01'),
        tasks: [
            "Developed software applications and systems for Telefonica/Movistar.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'Java', value: 100},
            {label: 'JavaScript', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'telecommunications'
    },
    {
        title: 'Software Engineer',
        company: 'Universitat Jaume I',
        project: 'Research Projects',
        startDate: new Date('2009-01-01'),
        endDate: new Date('2010-01-01'),
        tasks: [
            "Developed software applications and systems for research projects.",
            "Collaborated with academic teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'Java', value: 100},
            {label: 'Python', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'education'
    },
    {
        title: 'Software Engineer',
        company: 'Universitat Jaume I',
        project: 'Research Projects',
        startDate: new Date('2008-01-01'),
        endDate: new Date('2009-01-01'),
        tasks: [
            "Developed software applications and systems for research projects.",
            "Collaborated with academic teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'Java', value: 100},
            {label: 'Python', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'education'
    },
    {
        title: 'Software Engineer',
        company: 'Inovacion Dental',
        project: 'Dental Software Systems',
        startDate: new Date('2007-01-01'),
        endDate: new Date('2008-01-01'),
        tasks: [
            "Developed software applications and systems for dental practice management.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'healthcare'
    },
    {
        title: 'Software Engineer',
        company: 'Overon',
        project: 'Various Projects',
        startDate: new Date('2006-01-01'),
        endDate: new Date('2007-01-01'),
        tasks: [
            "Developed software applications and systems for various projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'technology'
    },
    {
        title: 'Software Engineer',
        company: 'Thyssen-Bornemisza',
        project: 'Various Projects',
        startDate: new Date('2005-01-01'),
        endDate: new Date('2006-01-01'),
        tasks: [
            "Developed software applications and systems for various projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'technology'
    },
    {
        title: 'Software Engineer',
        company: 'Hughes Media Internet Ltd',
        project: 'Various Projects',
        startDate: new Date('2004-01-01'),
        endDate: new Date('2005-01-01'),
        tasks: [
            "Developed software applications and systems for various projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'technology'
    },
    {
        title: 'Software Engineer',
        company: 'EADS CASA Espacio',
        project: 'Aerospace Software Systems',
        startDate: new Date('2003-01-01'),
        endDate: new Date('2004-01-01'),
        tasks: [
            "Developed software applications and systems for aerospace projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'aerospace'
    },
    {
        title: 'Software Engineer',
        company: 'EADS CASA Espacio',
        project: 'Aerospace Software Systems',
        startDate: new Date('2002-01-01'),
        endDate: new Date('2003-01-01'),
        tasks: [
            "Developed software applications and systems for aerospace projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'aerospace'
    },
    {
        title: 'Software Engineer',
        company: 'Informática 64 SL.',
        project: 'Various Projects',
        startDate: new Date('1999-01-01'),
        endDate: new Date('2002-01-01'),
        tasks: [
            "Developed software applications and systems for various projects.",
            "Collaborated with cross-functional teams on software development.",
            "Maintained and improved existing codebases."
        ],
        skills: [
            {label: 'C#', value: 100},
            {label: 'Java', value: 100},
            {label: 'Git', value: 100},
            {label: 'Software Development', value: 100},
        ],
        industry: 'technology'
    }
];

module.exports = { workExperiences };
