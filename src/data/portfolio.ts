import type { ExperienceType } from '@/types'

export const workExperiences: ExperienceType[] = [
  {
    id: 'british-airways-2025',
    title: 'Cloud Solutions Architect/DevOps (contractor)',
    role: ['Lead', 'DevOps', 'Cloud', 'AI'],
    company: 'Parser Digital',
    project: '<a class="text-inherit" href="https://www.britishairways.com">British Airways</a>',
    startDate: new Date('2025-06-09'),
    achievements: [],
    tasks: [
      'Improve existing operational decision support tools',
      'Datadog integration',
      'Review and solve security issues',
      'Cost management reduction'
    ],
    skills: [
      { label: 'Terraform', value: 100 },
      { label: 'SpaceLift', value: 100 },
      { label: 'AWS', value: 100 },
      { label: 'Retool', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'IT Strategy', value: 100 },
      { label: 'Team Lead', value: 100 }
    ],
    industry: 'aviation'
  },
  {
    id: 'checkout-com-2024-2025',
    title: 'DevOps/SecOps (contractor)',
    role: ['Lead', 'DevOps', 'SecOps'],
    company: 'Parser Digital',
    project: '<a class="text-inherit" href="https://checkout.com">Checkout.com</a>',
    startDate: new Date('2024-09-13'),
    endDate: new Date('2025-06-09'),
    achievements: [],
    tasks: [
      'Enforced and improved least privilege principal',
      'Supported third party security auditory',
      'Developed mechanisms to monitor and alert in case of privilege policy violations',
      'Improved IaC managing and sensitive data storage'
    ],
    skills: [
      { label: 'Terraform', value: 100 },
      { label: 'SpaceLift', value: 100 },
      { label: 'AWS', value: 100 },
      { label: 'Retool', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'IT Strategy', value: 100 },
      { label: 'Team Lead', value: 100 }
    ],
    industry: 'finance'
  },
  {
    id: 'blink-galaxy-2024',
    title: 'DevOps Tech Lead',
    role: ['Lead', 'DevOps'],
    company: 'Nexxyo Labs',
    project: '<a class="text-inherit" href="https://blinkgalaxy.com">Blink Galaxy</a>',
    startDate: new Date('2024-03-13'),
    endDate: new Date('2024-07-13'),
    achievements: [
      'Redesigned infrastructure using IaC with Jenkins, Kubernetes, Terraform, Packer, and Azure.'
    ],
    tasks: [
      'Created CI/CD pipelines for infrastructure deployment.',
      'Supported other teams with advice on Azure/Cloud infrastructure.'
    ],
    skills: [
      { label: 'Kubernetes', value: 100 },
      { label: 'Terraform', value: 100 },
      { label: 'Jenkins', value: 100 },
      { label: 'Azure', value: 100 },
      { label: 'OVH', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'IT Strategy', value: 100 },
      { label: 'Team Lead', value: 100 },
      { label: 'Unity', value: 100 },
      { label: 'Unreal', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'bouncybrain-2023-2024',
    title: 'Technical Lead',
    role: ['Lead', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'BouncyBrain',
    project: '<a class="text-inherit" href="https://www.bouncybraingames.com/projects/">FullSteam: Fluffy X Machina</a>',
    startDate: new Date('2023-12-13'),
    endDate: new Date('2024-03-13'),
    achievements: [
      'Led technical development of BouncyBrain game MVP, securing initial investment.'
    ],
    tasks: [
      'Defined technical strategy and coding workflows for BouncyBrain.',
      'Designed and programmed game MVP using Unity and C#.',
      'Managed code reviews and ensured high-quality standards.',
      'Provided strategic leadership in business development and IT strategy.'
    ],
    skills: [
      { label: 'Unity', value: 90 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Business Development', value: 1 },
      { label: 'IT Strategy', value: 100 },
      { label: 'Team Lead', value: 100 },
      { label: 'Blender', value: 1 },
      { label: 'Kubernetes', value: 90 },
      { label: 'Jenkins', value: 90 }
    ],
    industry: 'gaming'
  },
  {
    id: 'digit-star-trek-2022-2023',
    title: 'Senior DevOps Engineer',
    role: ['DevOps', 'Cloud'],
    company: 'Digit',
    project: 'Star Trek Fleet Command',
    startDate: new Date('2022-07-01'),
    endDate: new Date('2023-12-12'),
    achievements: [
      'Achieved 30% infrastructure cost reduction and 20% Redislabs cost reduction.',
      'Enhanced Dev environments with Twingate & Okta SSO integration.',
      'Successfully migrated Jenkins from 1.0 to 2.0.'
    ],
    tasks: [
      'Designed and implemented AWS infrastructure using Terraform (ECS, Lambda, DynamoDB).',
      'Optimized infrastructure for performance, scalability, and cost-efficiency with DataDog, Cloudwatch, & Kibana metrics.',
      'Provided AWS expertise and best practices guidance to teams.',
      'Managed Docker image creation, CI/CD pipelines (Jenkins, GitLab CI), and developed Python scripts for AWS Lambda.',
      'Established effective monitoring with DataDog and Kibana for early issue detection.'
    ],
    skills: [
      { label: 'AWS', value: 100 },
      { label: 'Terraform', value: 100 },
      { label: 'Jenkins', value: 100 },
      { label: 'Python', value: 100 },
      { label: 'DataDog', value: 100 },
      { label: 'Docker', value: 100 },
      { label: 'Linux', value: 100 },
      { label: 'Gitlab CI', value: 100 },
      { label: 'Unity', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Redis', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-train-sim-4-2021-2022',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Train Sim World 4',
    startDate: new Date('2021-05-01'),
    endDate: new Date('2022-07-01'),
    achievements: [],
    tasks: [
      'Designed REST API for game and Creators Club website.',
      'Led application development and refactoring using Gitlab CI, Cucumber, Nest, and Next.js.',
      'Performed ongoing maintenance to ensure optimal application functionality and user experience.',
      'Implemented CI/CD workflows with Gitlab CI and Docker.',
      'Optimized Linux and Nginx infrastructure for improved performance and cost-efficiency.',
      'Managed Google Cloud Services (GCP) focusing on App Engine, Docker, and Kubernetes.'
    ],
    skills: [
      { label: 'Kubernetes', value: 100 },
      { label: 'TDD', value: 100 },
      { label: 'GCP', value: 100 },
      { label: 'PostgreSQL', value: 100 },
      { label: 'Docker', value: 90 },
      { label: 'Gitlab CI', value: 100 },
      { label: 'Nest.js', value: 100 },
      { label: 'TypeScript', value: 100 },
      { label: 'Next.js', value: 100 },
      { label: 'Node.js', value: 100 },
      { label: 'Git', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-train-sim-3-2020-2021',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Train Sim World 3',
    startDate: new Date('2020-05-01'),
    endDate: new Date('2021-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for Train Sim World 3.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-train-sim-2-2019-2020',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Train Sim World 2',
    startDate: new Date('2019-05-01'),
    endDate: new Date('2020-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for Train Sim World 2.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-train-sim-1-2018-2019',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Train Sim World',
    startDate: new Date('2018-05-01'),
    endDate: new Date('2019-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for Train Sim World.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-train-simulator-2017-2018',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Train Simulator',
    startDate: new Date('2017-05-01'),
    endDate: new Date('2018-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for Train Simulator.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-various-2016-2017',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Various Train Simulator Projects',
    startDate: new Date('2016-05-01'),
    endDate: new Date('2017-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for various Train Simulator projects.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-various-2015-2016',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Various Projects',
    startDate: new Date('2015-05-01'),
    endDate: new Date('2016-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for various projects.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-various-2014-2015',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Various Projects',
    startDate: new Date('2014-05-01'),
    endDate: new Date('2015-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for various projects.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-various-2013-2014',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Various Projects',
    startDate: new Date('2013-05-01'),
    endDate: new Date('2014-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for various projects.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'dovetail-various-2012-2013',
    title: 'Senior Software Engineer',
    role: ['Senior', 'Developer'],
    company: 'Bitheater Ltd (Contracts)',
    finalClient: 'Dovetailgames',
    project: 'Various Projects',
    startDate: new Date('2012-05-01'),
    endDate: new Date('2013-05-01'),
    achievements: [],
    tasks: [
      'Developed game features and systems for various projects.',
      'Collaborated with cross-functional teams on game development.',
      'Implemented CI/CD workflows and infrastructure improvements.'
    ],
    skills: [
      { label: 'Unity', value: 100 },
      { label: 'C#', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Game Development', value: 100 }
    ],
    industry: 'gaming'
  },
  {
    id: 'telefonica-2011-2012',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Telefonica/Movistar',
    project: 'Various Projects',
    startDate: new Date('2011-01-01'),
    endDate: new Date('2012-05-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for Telefonica/Movistar.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'Java', value: 100 },
      { label: 'JavaScript', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'telecommunications'
  },
  {
    id: 'telefonica-2010-2011',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Telefonica/Movistar',
    project: 'Various Projects',
    startDate: new Date('2010-01-01'),
    endDate: new Date('2011-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for Telefonica/Movistar.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'Java', value: 100 },
      { label: 'JavaScript', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'telecommunications'
  },
  {
    id: 'uji-research-2009-2010',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Universitat Jaume I',
    project: 'Research Projects',
    startDate: new Date('2009-01-01'),
    endDate: new Date('2010-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for research projects.',
      'Collaborated with academic teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'Java', value: 100 },
      { label: 'Python', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'education'
  },
  {
    id: 'uji-research-2008-2009',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Universitat Jaume I',
    project: 'Research Projects',
    startDate: new Date('2008-01-01'),
    endDate: new Date('2009-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for research projects.',
      'Collaborated with academic teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'Java', value: 100 },
      { label: 'Python', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'education'
  },
  {
    id: 'inovacion-dental-2007-2008',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Inovacion Dental',
    project: 'Dental Software Systems',
    startDate: new Date('2007-01-01'),
    endDate: new Date('2008-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for dental practice management.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'healthcare'
  },
  {
    id: 'overon-2006-2007',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Overon',
    project: 'Various Projects',
    startDate: new Date('2006-01-01'),
    endDate: new Date('2007-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for various projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'technology'
  },
  {
    id: 'thyssen-2005-2006',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Thyssen-Bornemisza',
    project: 'Various Projects',
    startDate: new Date('2005-01-01'),
    endDate: new Date('2006-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for various projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'technology'
  },
  {
    id: 'hughes-media-2004-2005',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Hughes Media Internet Ltd',
    project: 'Various Projects',
    startDate: new Date('2004-01-01'),
    endDate: new Date('2005-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for various projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'technology'
  },
  {
    id: 'eads-casa-2003-2004',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'EADS CASA Espacio',
    project: 'Aerospace Software Systems',
    startDate: new Date('2003-01-01'),
    endDate: new Date('2004-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for aerospace projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'aerospace'
  },
  {
    id: 'eads-casa-2002-2003',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'EADS CASA Espacio',
    project: 'Aerospace Software Systems',
    startDate: new Date('2002-01-01'),
    endDate: new Date('2003-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for aerospace projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'aerospace'
  },
  {
    id: 'informatica-64-1999-2002',
    title: 'Software Engineer',
    role: ['Developer'],
    company: 'Informática 64 SL.',
    project: 'Various Projects',
    startDate: new Date('1999-01-01'),
    endDate: new Date('2002-01-01'),
    achievements: [],
    tasks: [
      'Developed software applications and systems for various projects.',
      'Collaborated with cross-functional teams on software development.',
      'Maintained and improved existing codebases.'
    ],
    skills: [
      { label: 'C#', value: 100 },
      { label: 'Java', value: 100 },
      { label: 'Git', value: 100 },
      { label: 'Software Development', value: 100 }
    ],
    industry: 'technology'
  }
]

export const personalInfo = {
  name: 'Jonathan Ruiz',
  title: 'Senior DevOps Engineer & Technical Lead',
  email: 'contact@jonathanruiz.co.uk',
  location: 'United Kingdom',
  summary: 'Experienced DevOps engineer and technical lead with over 25 years in software development, specializing in cloud infrastructure, automation, and team leadership.',
  skills: {
    primary: ['DevOps', 'Cloud Architecture', 'Team Leadership', 'Infrastructure as Code'],
    technologies: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Git'],
    languages: ['Python', 'JavaScript', 'C#', 'Bash', 'PowerShell']
  }
}

// Additional comprehensive skills list
export const additionalSkills = [
  'CSS', 'HTML', 'MaterialUI', 'Lens', 'Cucumber', 'Bitbucket', 'Inertia', 'Vite', 'MySQL', 'Tailwind', 
  'JBoss', 'Qt', 'CMake', 'VirtualBox', 'Boost', 'Team Management', 'Firmware', 'SoC', 'Flask', 'NFC', 'GSM',
  '6LowPan', 'IoT', 'Express.js', 'BLE', 'iOS', 'PWA', 'Webbluetooth', 'Bamboo', 'PHPUnit', 'PHING', 
  'Nagios', 'Newrelic', 'Siege', 'Wordpress', 'Apache', 'MySQL Galera', 'Magento', 'Pen Testing',
  'Puppet', 'Bootstrap', 'JQuery', 'Vagrant', 'Android', 'SAML', 'SourceSafe', 'SDK Development', 
  'Drupal', 'OpenCV', 'ROS', 'ML', 'Neural Networks', 'VTK/ITK', 'DICOM', 'Swift', 'CodeIgniter', 
  'Typo3', 'Subversion', 'ORACLE', 'ANSI C', 'AWK', 'Visual Basic 5.0', 'SAP', 'AIX', 'CATIA',
  'Kibana', 'Nginx', 'Ansible', 'Vue.js', 'Node.js'
]

export const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    id: 'CKA-2023-001'
  }
]

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    year: '1999',
    location: 'United Kingdom'
  }
]
