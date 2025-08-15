import tailwindConfig from "../tailwind.config.js";
import {ExperienceType, SkillType} from "./types.ts";
import {computed} from "vue";
import {skillsState} from "./useSkillsState.ts";

export var workExperiences : ExperienceType[] =
    [
        {
            title: 'Cloud Solutions Architect/DevOps (contractor)',
            role: ['Lead', 'DevOps', 'Cloud', 'AI'],
            company: 'Parser Digital',
            project: '<a class=\'text-inherit\' href=\'https://www.britishairways.com\'>British Airways</a>',
            startDate: new Date('9/Jun/25'),
            "achievements": [
            ],
            "tasks": [
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
            project: '<a class=\'text-inherit\' href=\'https://checkout.com\'>Checkout.com</a>',
            startDate: new Date('13/September/24'),
            endDate: new Date('9/Jun/25'),
            "achievements": [
            ],
            "tasks": [
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
            project: '<a class=\'text-inherit\' href=\'https://blinkgalaxy.com\'>Blink Galaxy</a>',
            startDate: new Date('13/March/24'),
            endDate: new Date('13/July/24'),
            "achievements": [
                "Redesigned infrastructure using IaC with Jenkins, Kubernetes, Terraform, Packer, and Azure."
            ],
            "tasks": [
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
            project: '<a class=\'text-inherit\' href=\'https://www.bouncybraingames.com/projects/\'>FullSteam: Fluffy X Machina</a>',
            startDate: new Date('13/Dec/23'),
            endDate: new Date('13/March/24'),
            "achievements": [
                "Led technical development of BouncyBrain game MVP, securing initial investment."
            ],
            "tasks": [
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
            industry: 'gaming',
            breakPageAfter: false

        },
        {
            title: 'Senior DevOps Engineer',
            role: ['DevOps', 'Cloud'],
            company: 'Digit',
            project: '<a class=\'text-inherit\' href=\'https://startrekfleetcommand.com/\'>Star Trek Fleet Command</a>',
            startDate: new Date('01/Jul/22'),
            endDate: new Date('12/Dec/23'),
            "achievements": [
                "Achieved 30% infrastructure cost reduction and 20% Redislabs cost reduction.",
                "Enhanced Dev environments with Twingate & Okta SSO integration.",
                "Successfully migrated Jenkins from 1.0 to 2.0."
            ],
            "tasks": [
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
                {label: 'Kibana', value: 0},
                {label: 'Docker', value: 100},
                {label: 'Linux', value: 100},
                {label: 'Gitlab CI', value: 100},
                {label: 'Unity', value: 100},
                {label: 'Bash', value: 0},
                {label: 'Git', value: 100},
                {label: 'Nginx', value: 0},
                {label: 'Redis', value: 100},

            ],
            // image: 'st.webp',
            industry: 'gaming',
            breakPageAfter: true
        },
        {
            title: 'Senior Software Engineer',
            company: 'Bitheater Ltd (Contracts)',
            finalClient: 'Dovetailgames',
            project: '<a class=\'text-inherit\' href=\'https://www.trainsimworld.com/?_ga=2.258825162.1532421791.17010054840-69028514.17010054840\'>Train Sim World 4</a>',
            startDate: new Date('01/May/2021'),
            endDate: new Date('01/Jul/2022'),
            "tasks": [
                "Designed REST API for game and Creators Club website.",
                "Led application development and refactoring using Gitlab CI, Cucumber, Nest, and Next.js.",
                "Performed ongoing maintenance to ensure optimal application functionality and user experience.",
                "Implemented CI/CD workflows with Gitlab CI and Docker.",
                "Optimized Linux and Nginx infrastructure for improved performance and cost-efficiency.",
                "Managed Google Cloud Services (GCP) focusing on App Engine, Docker, and Kubernetes."
            ],
            skills: [
                {label: 'Kubernetes', value: 90},
                {label: 'TDD', value: 100},
                {label: 'GCP', value: 100},
                {label: 'PostgreSQL', value: 100},
                {label: 'Docker', value: 90},
                {label: 'Nginx', value: 0},
                {label: 'Linux', value: 0},
                {label: 'Gitlab CI', value: 100},
                {label: 'Kubernetes', value: 100},
                {label: 'Nest.js', value: 100},
                {label: 'TypeScript', value: 100},
                {label: 'CSS', value: 0},
                {label: 'MaterialUI', value: 0},
                {label: 'Next.js', value: 100},
                {label: 'Node.js', value: 100},
                {label: 'Unreal', value: 0},
                {label: 'Lens', value: 0},
                {label: 'Cucumber', value: 0},
                {label: 'Git', value: 100},
            ],
            // image: 'ts4.webp',
            industry: 'gaming',
        },
        {
            title: 'Lead Full Stack Developer',
            company: 'Bitheater Ltd (Contracts)',
            finalClient: 'Blue Ocean Sustainability',
            project: '<a class=\'text-inherit\' href=\'https://truecarbonscore.com\'>Truecarbon Score</a>',
            startDate: new Date('Fri Aug 01 2020 00:00:00 GMT+0000'),
            endDate: new Date('Fri May 01 2021 00:00:00 GMT+0000'),
            "tasks": [
                "Created and implemented API for application migration and M2M connections.",
                "Led design and development of Truecarbon Score app with Laravel, Vue.js, and Inertia.",
                "Provided project owner reporting for transparent project communication.",
                "Managed team tasks and progress to meet project timelines.",
                "Managed AWS services, focusing on Beanstalk for deployment and scalability."
            ],
            skills: [
                {label: 'Bitbucket', value: 20},
                {label: 'Laravel', value: 100},
                {label: 'Vue.js', value: 100},
                {label: 'TypeScript', value: 100},
                {label: 'Bash', value: 100},
                {label: 'Inertia', value: 100},
                {label: 'Vite', value: 100},
                {label: 'MySQL', value: 40},
                {label: 'Docker', value: 100},
                {label: 'AWS', value: 100},
                {label: 'Terraform', value: 30},
                {label: 'Team Lead', value: 100},
                {label: 'Bash', value: 10},
                {label: 'Tailwind', value: 100},
                {label: 'Git', value: 100},
            ],
            industry: 'building',
            breakPageAfter: false
        },
        {
            title: 'Full Stack Developer',
            company: 'Bitheater Ltd (Contracts)',
            finalClient: 'Alfatec',
            project: '<a class=\'text-inherit\' href=\'https://www.sinasuite.com.com\'>SINA HIS (Hospital Information System)</a>',
            startDate: new Date('Sat Feb 01 2020 00:00:00 GMT+0000'),
            endDate: new Date('Sun Aug 01 2020 00:00:00 GMT+0000'),
            "tasks": [
                "Developed REST API and applications using JAVA, Spring, and Angular for high-quality software delivery.",
                "Refactored MySQL codebase to enhance maintainability and readability.",
                "Implemented key features with JBoss (Firefly) to expand the company's customer base."
            ],
            skills: [
                {label: 'Spring', value: 100},
                {label: 'Java', value: 100},
                {label: 'Angular', value: 20},
                {label: 'MySQL', value: 100},
                {label: 'JBoss', value: 100},
                {label: 'TDD', value: 100},
                {label: 'Git', value: 100},
                {label: 'TypeScript', value: 100},
            ],
            industry: 'health',

        },
        {
            title: 'Lead Software Engineer',
            finalClient: 'Indra',
            company: 'Bitheater Ltd (Contracts)',
            startDate: new Date('Mon Jan 01 2018 00:00:00 GMT+0000'),
            endDate: new Date('Sat Feb 01 2020 00:00:00 GMT+0000'),
            "tasks": [
                "Led migration from Microsoft libs to cross-platform (Linux + Windows) for Intelligent Traffic System (ITS).",
                "Refactored and optimized C/C++ codebase for better maintainability and performance.",
                "Utilized C++, Qt, and CMake for successful migration across Linux and Windows.",
                "Implemented Boost libraries to enhance ITS functionality.",
                "Collaborated on platform-specific challenges for seamless integration.",
                "Achieved Linux compatibility for tenders requiring Linux support.",
                "Managed press articles:\n  - Article 1: https://bit.ly/2Z11mgC\n  - Article 2: https://bit.ly/30AVGva"
            ],
            skills: [
                {label: 'C/C++', value: 100},
                {label: 'Qt', value: 100},
                {label: 'CMake', value: 100},
                {label: 'Bash', value: 100},
                {label: 'VirtualBox', value: 100},
                {label: 'Linux', value: 100},
                {label: 'Boost', value: 100},
                {label: 'Team Management', value: 100},
                {label: 'Team Lead', value: 100},
                {label: 'Git', value: 100},
                {label: '.NET', value: 100},
            ],
            industry: 'public infrastructure',

        },
        {
            title: 'Lead Software Engineer',
            company: 'Bitheater Ltd (Contracts)',
            startDate: new Date('Thu Jun 01 2017 00:00:00 GMT+0000'),
            endDate: new Date('Sun Jan 01 2018 00:00:00 GMT+0000'),
            "tasks": [
                "Led IoT device prototyping using Python on Raspberry Pi and C on nRF51 SoC.",
                "Performed nRF51 firmware maintenance and upgrades.",
                "Implemented IoT business logic on Raspberry Pi using Python for rapid testing and feature additions.",
                "Conducted extensive testing of NFC, 6LowPan, GSM, and TCP/IP for internet access, informing patent requests.",
                "Filed patent requests to protect developed mechanisms for data exchange (see Certifications section for links)."
            ],
            skills: [
                {label: 'firmware', value: 100},
                {label: 'SoC', value: 100},
                {label: 'C/C++', value: 100},
                {label: 'Python', value: 100},
                {label: 'Flask', value: 100},
                {label: 'NFC', value: 100},
                {label: 'GSM', value: 100},
                {label: '6LowPan', value: 100},
                {label: 'IoT', value: 100},
                {label: 'Node.js', value: 100},
                {label: 'Express.js', value: 100},
                {label: 'BLE', value: 100},
                {label: 'Team Lead', value: 100},
                {label: 'Git', value: 100},
                {label: 'iOS', value: 100},
                {label: 'PWA', value: 100},
                {label: 'Webbluetooth', value: 100},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Lead DevOps Engineer',
            company: 'Bitheater Ltd (Contracts)',
            startDate: new Date('Wed Feb 01 2015 00:00:00 GMT+0000'),
            endDate: new Date('Sat Jun 01 2017 00:00:00 GMT+0000'),
            "tasks": [
                "Automated and maintained E-Commerce platform infrastructure for optimal performance and reliability.",
                "Developed CI/CD processes for Progressive Web App development, enabling rapid releases to staging and production.",
                "Implemented backup and disaster recovery processes to meet ISO standards certifications.",
                "Managed and configured Atlassian platform tools: GIT/Bitbucket, Bamboo, and Jira."
            ],
            skills: [
                {label: 'Ansible', value: 100},
                {label: 'Docker', value: 100},
                {label: 'Bitbucket', value: 40},
                {label: 'Bamboo', value: 100},
                {label: 'PHPUnit', value: 40},
                {label: 'PHING', value: 40},
                {label: 'Azure', value: 100},
                {label: 'Linux', value: 100},
                {label: 'Nagios', value: 100},
                {label: 'Newrelic', value: 100},
                {label: 'Siege', value: 0},
                {label: 'Team Lead', value: 100},
                {label: 'Bash', value: 100},
                {label: 'Wordpress', value: 100},
                {label: 'Git', value: 100},
                {label: 'Apache', value: 100},
                {label: 'Powershell', value: 0},

            ],
            industry: 'ecommerce',
            breakPageAfter: false
        },
        {
            title: 'Cloud Engineer',
            company: 'Bitheater Ltd (Contracts)',
            startDate: new Date('Wed Aug 01 2014 00:00:00 GMT+0000'),
            endDate: new Date('Sat Feb 01 2015 00:00:00 GMT+0000'),
            "tasks": [
                "Led design and implementation of international e-commerce platform's scalable and reliable infrastructure.",
                "Orchestrated successful migration from on-premise to cloud-based architecture with meticulous planning and testing.",
                "Resolved networking issues and enhanced stability using advanced troubleshooting techniques.",
                "Implemented proactive measures to continuously enhance system infrastructure for evolving business and technological needs."
            ],
            skills: [
                {label: 'Docker', value: 20},
                {label: 'Azure', value: 100},
                {label: 'Linux', value: 100},
                {label: 'Apache', value: 100},
                {label: 'MySQL Galera', value: 100},
                {label: 'Magento', value: 100},
                {label: 'Nagios', value: 100},
                {label: 'Newrelic', value: 100},
                {label: 'Bash', value: 100},
                {label: 'Pen Testing', value: 100},
                {label: 'Git', value: 100},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Full Stack Developer',
            company: 'Bitheater Ltd (Contracts)',
            finalClient: 'Rocket Internet GMbH',
            project: '<a class=\'text-inherit\' href=\'https://es.wikipedia.org/wiki/Lendico\'>Lendico</a>',
            startDate: new Date('Sun Dec 01 2013 00:00:00 GMT+0000'),
            endDate: new Date('Thu May 01 2014 00:00:00 GMT+0000'),
            "tasks": [
                "Developed P2B lending platform emphasizing functionality, security, and scalability.",
                "Refactored application to maintain compatibility with P2P lending platform, using a unified codebase."
            ],
            skills: [
                {label: 'Puppet', value: 0},
                {label: 'AWS', value: 10},
                {label: 'Linux', value: 100},
                {label: 'Symfony', value: 100},
                {label: 'MySQL', value: 1},
                {label: 'Bootstrap', value: 100},
                {label: 'JQuery', value: 100},
                {label: 'Vagrant', value: 0},
                {label: 'Git', value: 100},
            ],
            industry: 'finance',
        },
        {
            title: 'Lead Android Developer',
            company: 'Telefonica/Movistar',
            project: 'Por Ser Movistar',
            startDate: new Date('Fri May 01 2013 00:00:00 GMT+0000'),
            endDate: new Date('Tue Dec 01 2013 00:00:00 GMT+0000'),
            "tasks": [
                "Led development of native Android app with SSO (SAML) for 20M Movistar clients.",
                "Published Android app for seamless access to exclusive offers.",
                "Developed deployment tools and statistics compilation for streamlined processes.",
                "Configured Apache servers for performance and security.",
                "Implemented high-availability systems for continuous service availability."
            ],
            skills: [
                {label: 'Android', value: 100},
                {label: 'Java', value: 100},
                {label: 'SAML', value: 100},
                {label: 'Team Lead', value: 100},
                {label: 'SourceSafe', value: 100},
            ],
            industry: 'telecommunications'
        },
        {
            title: 'Lead Full Stack Developer',
            company: 'Telefonica/Movistar',
            project: 'Por Ser Movistar',
            startDate: new Date('Sun Dec 01 2012 00:00:00 GMT+0000'),
            endDate: new Date('Fri May 01 2013 00:00:00 GMT+0000'),
            "tasks": [
                "Led development of promotional site and REST API for exclusive offers and coupons for Movistar clients.",
                "Created web platform for Movistar customers to access exclusive offers and coupons.",
                "Developed REST service as foundation for future mobile app development.",
                "Led Android app development for seamless user access to offers.",
                "Contributed to web development using PHP/Symfony, REST services, and SSO (SAML) integration.",
                "Developed SSO SDK for integration with Movistar's SAML identity provider.",
                "Implemented high-availability systems for continuous service availability."
            ],
            skills: [
                {label: 'SDK Development', value: 100},
                {label: 'Symfony', value: 100},
                {label: 'JQuery', value: 100},
                {label: 'JavaScript', value: 100},
                {label: 'Linux', value: 100},
                {label: 'Apache', value: 100},
                {label: 'MySQL', value: 90},
                {label: 'SAML', value: 100},
                {label: 'Nginx', value: 100},
                {label: 'AWS', value: 1},
                {label: 'Team Lead', value: 100},
                {label: 'Git', value: 100},

            ],
            industry: 'telecommunications',
            breakPageAfter: false
        },
        {
            title: 'Full Stack Developer',
            company: 'Universitat Jaume I',
            startDate: new Date('Wed Jun 01 2011 00:00:00 GMT+0000'),
            endDate: new Date('Mon Dec 01 2012 00:00:00 GMT+0000'),
            tasks: [
                'Developed a web application for the management of the university\'s research projects using Drupal',
            ],
            skills: [
                {label: 'Drupal', value: 100},
                {label: 'Git', value: 100},
            ],
            industry: 'learning',

        },
        {
            title: 'Senior Software Engineer',
            company: 'Universitat Jaume I',
            startDate: new Date('Sat Dec 01 2010 00:00:00 GMT+0000'),
            endDate: new Date('Tue Jun 01 2011 00:00:00 GMT+0000'),
            "tasks": [
                "Developed applications for humanoid robotics, contributing to field advancements.",
                "Implemented neural network training systems for humanoid robotics.",
                "Developed computer vision applications with OpenCV.",
                "Contributed to projects documented at IEEE and Robinlab.",
                "Worked on the humanoid torso robot project at Robinlab."
            ],
            skills: [
                {label: 'C/C++', value: 100},
                {label: 'OpenCV', value: 100},
                {label: 'QT', value: 100},
                {label: 'ROS', value: 100},
                {label: 'CMake', value: 100},
                {label: 'Git', value: 100},
                {label: 'ML', value: 100},
                {label: 'Neural Networks', value: 100},
            ],
            industry: 'robotics',
        },
        {
            title: 'Senior Software Engineer',
            company: 'Inovacion Dental',
            startDate: new Date('Thu May 01 2010 00:00:00 GMT+0000'),
            endDate: new Date('Tue Dec 01 2010 00:00:00 GMT+0000'),
            "tasks": [
                "Managed and visualized DICOM images with VTK/ITK libraries for medical image processing.",
                "Developed Dental DICOM Images Analysis application for specialized medical imaging.",
                "Created Mitsubishi Robotic Arm application for dental procedure automation."
            ],
            skills: [
                {label: 'VTK/ITK', value: 100},
                {label: 'DICOM', value: 100},
                {label: 'Swift', value: 100},
                {label: 'OpenCV', value: 100},
                {label: 'Java', value: 100},
                {label: 'Git', value: 100},
                {label: 'C/C++', value: 100},

            ],
            industry: 'health',
        },
        {
            title: 'Full Stack Developer',
            company: 'Overon',
            startDate: new Date('Wed Jun 01 2009 00:00:00 GMT+0000'),
            endDate: new Date('Thu Feb 01 2010 00:00:00 GMT+0000'),
            "tasks": [
                "Designed and maintained internal applications for enterprise management.",
                "Managed databases and email servers for seamless operation of internal applications using Linux, Apache, and MySQL.",
                "Developed Client/Server Applications to meet business requirements, utilizing PHP."
            ],
            skills: [
                {label: 'Linux', value: 100},
                {label: 'Apache', value: 100},
                {label: 'MySQL', value: 100},
                {label: 'PHP', value: 100},
                {label: 'Bash', value: 100},
                {label: 'HTML', value: 0},
                {label: 'CSS', value: 100},
            ],
            industry: 'telecommunications',
            breakPageAfter: true
        },
        {
            title: 'Full Stack Developer',
            company: 'Thyssen-Bornemisza',
            startDate: new Date('Sun Mar 01 2009 00:00:00 GMT+0000'),
            endDate: new Date('Tue Jun 01 2009 00:00:00 GMT+0000'),
            "tasks": [
                "Developed PHP SDK for building CMS managed web applications.",
                "Contributed to services at an interactive communication agency.",
                "Designed and developed websites for seamless user experience.",
                "Created multimedia content for engaging online experiences.",
                "Provided internet consulting services for strategic online presence.",
                "Contributed to branding, positioning, and corporate identity online.",
                "Resolved issues in enterprise web portals to maintain functionality.",
                "Developed enterprise web portals using PHP and CodeIgniter, demonstrating expertise in Linux, Apache, MySQL, and PHP."
            ],
            skills: [
                {label: 'SDK development', value: 100},
                {label: 'Linux', value: 90},
                {label: 'Apache', value: 90},
                {label: 'MySQL', value: 90},
                {label: 'PHP', value: 100},
                {label: 'CodeIgniter', value: 100},
                {label: 'Typo3', value: 100},
                {label: 'CSS', value: 90},
                {label: 'JavaScript', value: 90},
                {label: 'Jquery', value: 90},
                {label: 'Git', value: 100},
            ],
            industry: 'learning',
            

        },
        {
            title: 'Full Stack Developer',
            company: 'Hughes Media Internet Ltd',
            startDate: new Date('Tue Mar 01 2008 00:00:00 GMT+0000'),
            endDate: new Date('Fri Feb 01 2009 00:00:00 GMT+0000'),
            "tasks": [
                "Improved and maintained company's CMS SDK.",
                "Conducted PHP web development for dynamic and interactive websites.",
                "Developed CMS solutions using MySQL, Linux, and PHP5, focusing on eCommerce and MVC architecture.",
                "Utilized Object-Oriented Programming (OOP) principles for efficient code development.",
                "Monitored and troubleshooted web and mail servers for performance and reliability.",
                "Contributed to development, maintenance, and integration of various websites.",
                "Developed and deployed SOAP web services to enhance functionality.",
                "Administered CentOS Linux servers for seamless operation."
            ],
            skills: [
                {label: 'SDK development', value: 100},
                {label: 'Linux', value: 70},
                {label: 'Apache', value: 70},
                {label: 'MySQL', value: 100},
                {label: 'PHP', value: 100},
                {label: 'Pen Testing', value: 20},
                {label: 'Jquery', value: 90},
                {label: 'JavaScript', value: 100},
                {label: 'Subversion', value: 100},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Full Stack Developer',
            company: 'EADS CASA Espacio',
            startDate: new Date('Sat Jun 01 2004 00:00:00 GMT+0000'),
            endDate: new Date('Mon Nov 01 2007 00:00:00 GMT+0000'),
            "tasks": [
                "Developed warehouse and providers management application with PHP and MySQL.",
                "Created non-conformance reports (NCR) management application using PHP, HTML, CSS, and MySQL.",
                "Contributed to development of enterprise internal network services, including intranet and partner data transfer.",
                "Resolved technical issues, conducted troubleshooting, and developed tools for efficiency.",
                "Designed graphic user interfaces for data consultation, modification, and insertion.",
                "Developed data exchange interface between Oracle and MySQL.",
                "Created autoclave management application with Visual Basic 5.0.",
                "Facilitated information exchange between partners and company, including SAP interfaces."
            ],
            skills: [
                {label: 'Java', value: 10},
                {label: 'Linux', value: 90},
                {label: 'PHP', value: 100},
                {label: 'ORACLE', value: 20},
                {label: 'HTML', value: 0},
                {label: 'CSS', value: 90},
                {label: 'JavaScript', value: 90},
                {label: 'Jquery', value: 90},
                {label: 'ANSI C', value: 20},
                {label: 'AWK', value: 30},
                {label: 'Visual Basic 5.0', value: 40},
                {label: 'MySQL', value: 100},
                {label: 'Apache', value: 90},
                {label: 'SAP', value: 1},
                {label: 'Subversion', value: 100},
            ],
            industry: 'aeronautics',


        },
        {
            title: 'Systems Administrator',
            company: 'EADS CASA Espacio',
            startDate: new Date('Mon Jun 01 2001 00:00:00 GMT+0000'),
            endDate: new Date('Sat Jun 01 2004 00:00:00 GMT+0000'),
            "tasks": [
                "Administered AIX/UNIX/Linux servers, overseeing various services for optimal performance.",
                "Configured and tuned Apache2, including mod_proxy, mod_php, and virtual domains, for efficient web services.",
                "Performed troubleshooting, upgrades, and configuration of services/systems on AIX/UNIX/Linux/Solaris servers.",
                "Managed databases to ensure integrity and availability for critical operations.",
                "Implemented and maintained MySQL backup system for data integrity.",
                "Provided technical support for CATIA users."
            ],
            skills: [
                {label: 'AIX', value: 70},
                {label: 'Linux', value: 90},
                {label: 'MySQL', value: 80},
                {label: 'Apache', value: 70},
                {label: 'CATIA', value: 30},
                {label: 'C/C++', value: 30},
                {label: 'AWK', value: 30},
                {label: 'Bash', value: 30},
            ],
            industry: 'aeronautics',
            breakPageAfter: false
        },
        {
            title: 'Freelance Teacher',
            company: 'Informática 64 SL.',
            startDate: new Date('Sat Jun 01 1999 00:00:00 GMT+0000'),
            endDate: new Date('Mon Nov 01 2002 00:00:00 GMT+0000'),
            "tasks": [
                "Conducted training sessions for UNIX shell scripting.",
                "Delivered comprehensive Master classes on C/C++ and Linux sponsored by the Madrid Council.",
                "Taught application development course with Java, sponsored by the Madrid Council."
            ],
            skills: [
                {label: 'Linux', value: 100},
                {label: 'Bash', value: 100},
                {label: 'C/C++', value: 100},
                {label: 'Java', value: 100},
            ],
            industry: 'learning',

        }
    ];

let colors = Object.entries(tailwindConfig.theme.extend.colors)
export var skills = {
    coding: [
        {label: 'Python', value: 20, color: colors[5]},
        {label: 'PHP', value: 25, color: colors[0]},
        {label: 'JavaScript', value: 25, color: colors[1]},
        {label: 'TypeScript', value: 25, color: colors[1]},
        {label: 'JAVA', value: 3, color: colors[3]},
        {label: 'C/C++', value: 13, color: colors[4]},
        {label: 'C#', value: 5, color: colors[5]},

    ],
    cloud: [
        {label: 'AWS', value: 100, color: colors[0]},
        {label: 'Linux', value: 100, color: colors[0]},
        {label: 'Jenkins', value: 25, color: colors[1]},
        {label: 'Gitlab CI', value: 25, color: colors[1]},
        {label: 'Azure', value: 10, color: colors[2]},
        {label: 'Terraform', value: 10, color: colors[2]},
        {label: 'Kubernetes', value: 100, color: colors[0]},
        {label: 'Ansible', value: 100, color: colors[0]},
    ],
    frameworks: [
        {label: 'Angular', value: 100, color: colors[0]},
        {label: 'Nest.js', value: 100, color: colors[0]},
        {label: 'Laravel', value: 15, color: colors[3]},
        {label: 'flask', value: 100, color: colors[0]},
        {label: 'Symfony', value: 100, color: colors[0]},
        {label: 'Spring', value: 100, color: colors[0]},
        {label: 'Next.js', value: 100, color: colors[0]},
        {label: 'Vue.js', value: 100, color: colors[0]},
        {label: 'Node.js', value: 100, color: colors[0]},
    ],
}

export var skillsFromExperience: Array<SkillType> = workExperiences.reduce((acc: Array<SkillType>, experience) => {
    const experience_endDate = experience.endDate ? experience.endDate : new Date()
    const daysWorked = Math.round((experience_endDate.getTime() - experience.startDate.getTime()) / (1000 * 3600 * 24))
    //const daysFromToday = Math.round((new Date().getTime() - experience_endDate.getTime()) / (1000 * 3600 * 24))

    experience.skills.forEach(skill => {
        let existingSkill = acc.find(s => s.label === skill.label)

        if (existingSkill) {
            existingSkill.value += Math.max(0, ((skill.value / 100) * daysWorked))
        } else {
            acc.push({
                ...skill,
                value: Math.max(0, ((skill.value * daysWorked / 100)))
            })
        }
    })
    return acc
}, [])

export var rolesFromExperience: Array<SkillType> = workExperiences.reduce((acc: Array<SkillType>, experience) => {
    const experience_endDate = experience.endDate ? experience.endDate : new Date()
    const daysWorked = Math.round((experience_endDate.getTime() - experience.startDate.getTime()) / (1000 * 3600 * 24))
    //const daysFromToday = Math.round((new Date().getTime() - experience_endDate.getTime()) / (1000 * 3600 * 24))

    acc.push({ label: experience.title, value: daysWorked })
    let existingSkill = acc.find(s => s.label === experience.title)
    if(existingSkill) {
        existingSkill.value += daysWorked
    } else {
        acc.push({ label: experience.title, value: daysWorked })
    }

    return acc
}, [])

export var industriesFromExperience: Array<SkillType> = workExperiences.reduce((acc: Array<SkillType>, experience) => {
    const experience_endDate = experience.endDate ? experience.endDate : new Date()
    const daysWorked = Math.round((experience_endDate.getTime() - experience.startDate.getTime()) / (1000 * 3600 * 24))
    //const daysFromToday = Math.round((new Date().getTime() - experience_endDate.getTime()) / (1000 * 3600 * 24))

    let existingSkill = acc.find(s => s.label === experience.industry)
    if(existingSkill) {
        existingSkill.value += daysWorked
    } else {
        acc.push({ label: experience.industry, value: daysWorked })
    }

    return acc
}, [])

export const filteredExperiences = computed(() => {
    // Get selected skills (keys where the value is true)
    const selectedSkills = Object.keys(skillsState.selectedSkills).filter(
        (key) => skillsState.selectedSkills[key]
    );

    // If no skills are selected, return all experiences
    if (selectedSkills.length === 0) {
        return workExperiences;
    }

    // Filter experiences based on selected skills
    return workExperiences.filter((experience) =>
        experience.skills.some((skill) =>
            selectedSkills.includes(skill.label)
        )
    );
});