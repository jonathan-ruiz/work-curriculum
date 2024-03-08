import tailwindConfig from '../tailwind.config.js';
import {SkillType} from "./types.ts";

export var workExperiences =
    [
        {
            title: 'Technical Lead',
            role: ['Lead', 'Developer'],
            company: 'BouncyBrain',
            project: '<a class=\'text-inherit\' href=\'https://www.bouncybraingames.com/projects/\'>FullSteam: Fluffy X Machina</a>',
            startDate: new Date('13/Dec/23'),
            achievements: [
                'Led the technical development of the BouncyBrain game MVP, preparing the company’s first round of investment.',
            ],
            tasks: [
                'Lead the definition and implementation of the technical strategy for Bouncy Brain, establishing coding workflows, versioning practices, and toolchains.',
                'Design and program the BouncyBrain game MVP using Unity and C#, ensuring a high-quality and engaging gaming experience.',
                'Oversaw comprehensive code review processes, ensuring the highest quality standards and fostering a collaborative development environment.',
                'Provide strategic leadership in business development and IT strategy, aligning technical initiatives with the company’s overall goals.',
            ],
            skills: [
                {label: 'Unity', value: 90},
                {label: 'C#', value: 100},
                {label: 'Git', value: 100},
                {label: 'Business Development', value: 1},
                {label: 'IT Strategy', value: 100},
                {label: 'Team Lead', value: 20},
                {label: 'Blender', value: 1},
            ],
            industry: 'gaming',
        },
        {
            title: 'Senior DevOps Engineer',
            company: 'Scopely',
            project: '<a class=\'text-inherit\' href=\'https://startrekfleetcommand.com/\'>Star Trek Fleet Command</a>',
            startDate: new Date('01/Jul/22'),
            endDate: new Date('12/Dec/23'),
            achievements: [
                'Infrastructure cost reduction up to 30%.',
                'Redislabs cost reduction by 20%.',
                'Dev environments hardening adding Twingate & Okta SSO',
                'Jenkins 1.0 to Jenkins 2.0 migration.',
            ],
            tasks: [
                'Designed and implement infrastructure using Terraform for new applications in AWS, such as ECS (Fargate, EC2), Lambda, DynamoDB, etc.',
                'Optimized current infrastructure for improved performance, scalability, and cost-efficiency, using a data-driven approach based off metrics from DataDog, Cloudwatch & Kibana.',
                'Advises cross-functional teams on AWS services and best practices.',
                'Docker image creation and publishing, implementing CI/CD processes using Jenkins and GitLab CI, and developing Python scripts for AWS Lambda functions.',
                'Established robust monitoring using DataDog and Kibana, enabling early issue detection & streamlined support processes.'
            ],

            skills: [
                {label: 'AWS', value: 100},
                {label: 'Terraform', value: 100},
                {label: 'Jenkins', value: 50},
                {label: 'Python', value: 100},
                {label: 'DataDog', value: 100},
                {label: 'Kibana', value: 50},
                {label: 'Docker', value: 100},
                {label: 'Linux', value: 50},
                {label: 'Gitlab CI', value: 100},
                {label: 'Unity', value: 0},
                {label: 'Bash', value: 100},
                {label: 'Git', value: 100},
                {label: 'Nginx', value: 0},
                {label: 'Redis', value: 100},

            ],
            // image: 'st.webp',
            industry: 'gaming',
        },
        {
            title: 'Senior Software Engineer',
            company: 'Dovetailgames',
            project: '<a class=\'text-inherit\' href=\'https://www.trainsimworld.com/?_ga=2.258825162.1532421791.1705054840-69028514.1705054840\'>Train Sim World 4</a>',
            startDate: new Date('01/May/2021'),
            endDate: new Date('01/Jul/2022'),
            tasks: [
                'Designed and implemented the REST API used for the game and the creators club website',
                'Led application development and refactoring initiatives for Train Sim World 4\'s Creators Club, applying knowledge of Gitlab CI, Cucumber, Nest, and Next to enhance features and user experience.',
                'Performed ongoing maintenance of applications to ensure consistent functionality, optimal performance, and a positive user experience.',
                'Implemented robust CI/CD workflows using Gitlab CI, leveraging Docker for seamless automation.',
                'Analyzed and optimized the existing infrastructure (Linux, Nginx) for enhanced performance, scalability, and cost-efficiency.',
                'Managed Google Cloud Services (GCP), specifically focusing on App Engine, utilizing skills in Docker and Kubernetes for resource efficiency.'
            ],
            skills: [
                {label: 'GCP', value: 100},
                {label: 'PostgreSQL', value: 100},
                {label: 'Docker', value: 50},
                {label: 'Nginx', value: 50},
                {label: 'Linux', value: 0},
                {label: 'Gitlab CI', value: 50},
                {label: 'Kubernetes', value: 10},
                {label: 'Nest.js', value: 100},
                {label: 'Node.js', value: 100},
                {label: 'JavaScript', value: 100},
                {label: 'HTML', value: 50},
                {label: 'CSS', value: 50},
                {label: 'MaterialUI', value: 50},
                {label: 'Next.js', value: 50},
                {label: 'Unreal', value: 0},
                {label: 'Lens', value: 50},
                {label: 'Cucumber', value: 100},
                {label: 'Git', value: 100},
                {label: 'Nginx', value: 50},
                {label: 'TypeScript', value: 100},


            ],
            // image: 'ts4.webp',
            industry: 'gaming',
            breakPageAfter: true

        },
        {
            title: 'Lead Full Stack Developer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'Blue Ocean Sustainability',
            project: '<a class=\'text-inherit\' href=\'https://truecarbonscore.com\'>Truecarbon Score</a>',
            startDate: new Date('Fri Aug 01 2020 00:00:00 GMT+0000'),
            endDate: new Date('Fri May 01 2021 00:00:00 GMT+0000'),
            tasks: [
                'Created and implemented an API initially for migrating from the old version of the application to the new one, and later expanded its capabilities to establish Machine-to-Machine (M2M) connections for efficient data access within the app.',
                'Led the design and development of the Truecarbon Score application using Laravel and Vue.js with Inertia.',
                'Provided project owner reporting for effective project communication and transparency.',
                'Managed the team, including task assignment and progress monitoring to ensure project timelines were met.',
                'Managed AWS services, specifically with Beanstalk, for optimal deployment and scalability.'
            ],
            skills: [
                {label: 'Bitbucket', value: 20},
                {label: 'Laravel', value: 100},
                {label: 'Vue.js', value: 100},
                {label: 'JavaScript', value: 100},
                {label: 'Bash', value: 100},
                {label: 'Inertia', value: 50},
                {label: 'Vite', value: 50},
                {label: 'MySQL', value: 40},
                {label: 'Docker', value: 30},
                {label: 'AWS', value: 30},
                {label: 'Terraform', value: 30},
                {label: 'Team Lead', value: 50},
                {label: 'Bash', value: 10},
                {label: 'Tailwind', value: 100},
                {label: 'Git', value: 100},
                {label: 'TypeScript', value: 100},
               
            ],
            industry: 'building',
        },
        {
            title: 'Full Stack Developer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'Alfatec',
            project: '<a class=\'text-inherit\' href=\'https://www.sinasuite.com.com\'>SINA HIS (Hospital Information System)</a>',
            startDate: new Date('Sat Feb 01 2020 00:00:00 GMT+0000'),
            endDate: new Date('Sun Aug 01 2020 00:00:00 GMT+0000'),
            tasks: [
                'REST API, application development and bug fixing using JAVA, Spring, and Angular, ensuring the delivery of high-quality software solutions.',
                'Implemented refactoring processes in MySQL to align codebase with coding standards, improving code maintainability and readability.',
                'Pioneered the implementation of crucial features, leveraging skills in JBoss (Firefly), contributing to a significant increase in the company\'s customer pool.'
            ],
            skills: [
                {label: 'Spring', value: 100},
                {label: 'Angular', value: 20},
                {label: 'MySQL', value: 50},
                {label: 'JBoss', value: 50},
                {label: 'TDD', value: 30},
                {label: 'Git', value: 100},
                {label: 'TypeScript', value: 100},
            ],
            industry: 'health',

        },
        {
            title: 'Lead Software Engineer',
            finalClient: 'Indra',
            company: 'Bitheater Ltd (Own company)',
            startDate: new Date('Mon Jan 01 2018 00:00:00 GMT+0000'),
            endDate: new Date('Sat Feb 01 2020 00:00:00 GMT+0000'),
            tasks: [
                'Led the migration from heavily Microsoft libs bond C/C++ code to a cross-platform solution (Linux + Windows) for an Intelligent Traffic System (ITS).',
                'Refactored and optimized existing C/C++ codebase for improved maintainability and performance.',
                'Utilized C++, Qt, and CMake for the successful migration, ensuring compatibility with both Linux and Windows environments.',
                'Implemented Boost libraries to enhance the functionality and capabilities of the ITS.',
                'Collaborated with the team to address platform-specific challenges and ensure seamless integration.',
                'Achieved Linux compatibility, allowing the application to apply to tenders requiring Linux support.',
                'Press articles:\n  - Article 1: https://bit.ly/2Z11mgC\n  - Article 2: https://bit.ly/30AVGva'
            ],
            skills: [
                {label: 'C++', value: 100},
                {label: 'Qt', value: 10},
                {label: 'CMake', value: 100},
                {label: 'Bash', value: 100},
                {label: 'VirtualBox', value: 50},
                {label: 'Linux', value: 100},
                {label: 'Boost', value: 100},
                {label: 'Team Management', value: 50},
                {label: 'Team Lead', value: 50},
                {label: 'Git', value: 100},
                {label: '.NET', value: 100},
            ],
            industry: 'public infrastructure',

        },
        {
            title: 'Lead Software Engineer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'JTI',
            startDate: new Date('Thu Jun 01 2017 00:00:00 GMT+0000'),
            endDate: new Date('Sun Jan 01 2018 00:00:00 GMT+0000'),
            tasks: [
                'Led IoT device prototyping using Python on Raspberry Pi, and C on nRF51 SoC',
                'nrf51 firmware maintenance and upgrading',
                'Implemented given IoT business logic on Python\'s Raspberry Pi, facilitating quick testing, modification, and addition of new features.',
                'Conducted comprehensive testing of NFC, 6LowPan, GSM, and TCP/IP for hotspot internet access to evaluate the most effective method of sending information to the internet.',
                'As a result, filed a set of patent requests to protect the potential use of the mechanisms developed for data exchange.(link in Certifications section)',
            ],
            skills: [
                {label: 'firmware', value: 100},
                {label: 'SoC', value: 100},
                {label: 'C', value: 100},
                {label: 'Python', value: 100},
                {label: 'Flask', value: 100},
                {label: 'NFC', value: 50},
                {label: 'GSM', value: 30},
                {label: '6LowPan', value: 30},
                {label: 'IoT', value: 100},
                {label: 'Node.js', value: 50},
                {label: 'Express.js', value: 50},
                {label: 'Node.js', value: 50},
                {label: 'JavaScript', value: 50},
                {label: 'BLE', value: 100},
                {label: 'Team Lead', value: 100},
                {label: 'Git', value: 100},
                {label: 'iOS', value: 50},
                {label: 'PWA', value: 50},
                {label: 'JavaScript', value: 50},
                {label: 'Webbluetooth', value: 50},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Lead DevOps Engineer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'JTI',
            startDate: new Date('Wed Feb 01 2015 00:00:00 GMT+0000'),
            endDate: new Date('Sat Jun 01 2017 00:00:00 GMT+0000'),
            tasks: [
                'Automated and maintained E-Commerce platform infrastructure, ensuring optimal performance and reliability.',
                'Developed and managed CI/CD processes for Progressive Web App development, enabling almost instantaneous releases to staging and production environments.',
                'Implemented backup and disaster recovery processes to comply with fundamental ISO standards certifications.',
                'Managed and configured Atlassian platform tools including GIT/Bitbucket, Bamboo, and Jira.'
            ],
            skills: [
                {label: 'Ansible', value: 100},
                {label: 'Docker', value: 20},
                {label: 'Bitbucket', value: 40},
                {label: 'Bamboo', value: 80},
                {label: 'PHPUnit', value: 40},
                {label: 'PHING', value: 40},
                {label: 'Azure', value: 50},
                {label: 'Linux', value: 50},
                {label: 'Nagios', value: 50},
                {label: 'Newrelic', value: 70},
                {label: 'Siege', value: 20},
                {label: 'Team Lead', value: 50},
                {label: 'Bash', value: 50},
                {label: 'Wordpress', value: 50},
                {label: 'Git', value: 100},
                {label: 'Apache', value: 50},
                {label: 'Powershell', value: 50},

            ],
            industry: 'ecommerce',
            breakPageAfter: true
        },
        {
            title: 'Cloud Engineer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'JTI',
            startDate: new Date('Wed Aug 01 2014 00:00:00 GMT+0000'),
            endDate: new Date('Sat Feb 01 2015 00:00:00 GMT+0000'),
            tasks: [
                'Led the end-to-end design and implementation of an international e-commerce platform\'s infrastructure, ensuring scalability, reliability, and optimal performance.',
                'Orchestrated a successful migration process, seamlessly transitioning the system from on-premise to a cloud-based architecture, with meticulous planning and thorough testing.',
                'Played a pivotal role in identifying and resolving networking issues, employing advanced troubleshooting techniques to enhance overall stability and connectivity.',
                'Established and implemented proactive measures for ongoing system enhancement, focusing on refining the infrastructure to adapt to evolving business needs and technological advancements.'
            ],
            skills: [
                {label: 'Docker', value: 20},
                {label: 'Azure', value: 100},
                {label: 'Linux', value: 20},
                {label: 'Apache', value: 100},
                {label: 'MySQL Galera', value: 100},
                {label: 'Magento', value: 20},
                {label: 'Nagios', value: 10},
                {label: 'Newrelic', value: 10},
                {label: 'Bash', value: 30},
                {label: 'Pen Testing', value: 30},
                {label: 'Git', value: 100},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Full Stack Developer',
            company: 'Bitheater Ltd (Own company)',
            finalClient: 'Rocket Internet GMbH',
            project: '<a class=\'text-inherit\' href=\'https://es.wikipedia.org/wiki/Lendico\'>Lendico</a>',
            startDate: new Date('Sun Dec 01 2013 00:00:00 GMT+0000'),
            endDate: new Date('Thu May 01 2014 00:00:00 GMT+0000'),
            tasks: [
                'Developed a P2B lending platform with a focus on functionality, security, and scalability.',
                'Refactored the application to ensure compatibility with two similar platforms - P2P and P2B lending, maintaining a single code source for both during simultaneous development.'
            ],
            skills: [
                {label: 'Puppet', value: 30},
                {label: 'AWS', value: 10},
                {label: 'Linux', value: 10},
                {label: 'Symfony', value: 100},
                {label: 'MySQL', value: 50},
                {label: 'Bootstrap', value: 100},
                {label: 'JQuery', value: 100},
                {label: 'Vagrant', value: 20},
                {label: 'Git', value: 100},
            ],
            industry: 'finance',
        },
        {
            title: 'Lead Android Developer',
            company: 'Movistar',
            project: 'Por Ser Movistar',
            startDate: new Date('Fri May 01 2013 00:00:00 GMT+0000'),
            endDate: new Date('Tue Dec 01 2013 00:00:00 GMT+0000'),
            tasks: [
                'Led the development of a native Android application using SSO (Single Sign On) SAML, serving a client pool of 20M users for exclusive Movistar client offers.',
                'Published the Android app to provide seamless access to exclusive offers for Movistar clients.',
                'Developed tools for deployment and statistics compilation to streamline development processes.',
                'Configured Apache servers for optimal performance and security.',
                'Implemented high-availability systems to ensure continuous service availability for users.'
            ],
            skills: [
                {label: 'Android', value: 100},
                {label: 'Java', value: 100},
                {label: 'SAML', value: 70},
                {label: 'Team Lead', value: 50},
                {label: 'SourceSafe', value: 100},
            ],
            industry: 'telecommunications',
        },
        {
            title: 'Lead Full Stack Developer',
            company: 'Movistar',
            project: 'Por Ser Movistar',
            startDate: new Date('Sun Dec 01 2012 00:00:00 GMT+0000'),
            endDate: new Date('Fri May 01 2013 00:00:00 GMT+0000'),
            tasks: [
                'Led the development of a promotional site and REST API service providing exclusive offers and coupons to Movistar clients.',
                'Created a web platform enabling Movistar customers to access exclusive offers and coupons.',
                'Developed a REST service as the foundation for future mobile app development.',
                'Led Android applications development for seamless user access to exclusive offers.',
                'Contributed to web development using PHP/Symfony, REST Web services, and SSO (SAML) identity provider.',
                'SSO SDK development for seamless integration with Movistar\'s SSO (SAML) identity provider.',
                'Implemented high-availability systems to ensure continuous service availability for users.'
            ],
            skills: [
                {label: 'SDK Development', value: 100},
                {label: 'Symfony', value: 100},
                {label: 'JQuery', value: 50},
                {label: 'JavaScript', value: 50},
                {label: 'Linux', value: 50},
                {label: 'Apache', value: 50},
                {label: 'MySQL', value: 90},
                {label: 'SAML', value: 70},
                {label: 'Nginx', value: 30},
                {label: 'AWS', value: 1},
                {label: 'Team Lead', value: 50},
                {label: 'Git', value: 100},

            ],
            industry: 'telecommunications',
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
            breakPageAfter: true
        },
        {
            title: 'Senior Software Engineer',
            company: 'Universitat Jaume I',
            startDate: new Date('Sat Dec 01 2010 00:00:00 GMT+0000'),
            endDate: new Date('Tue Jun 01 2011 00:00:00 GMT+0000'),
            tasks: [
                'Developed applications for humanoid robotics, contributing to advancements in the field.',
                'Implemented neural networks training systems for humanoid robotics.',
                'Developed computer vision applications using OpenCV',
                'Contributed to the project documented at http://ieeexplore.ieee.org/document/7363592/?reload=true.',
                'Worked on the humanoid torso robot project documented at http://robinlab.uji.es/tombatossals-humanoid-torso.'
            ],
            skills: [
                {label: 'C++', value: 100},
                {label: 'OpenCV', value: 100},
                {label: 'QT', value: 50},
                {label: 'ROS', value: 50},
                {label: 'CMake', value: 50},
                {label: 'Git', value: 100},
                {label: 'ML', value: 50},
                {label: 'Neural Networks', value: 50},
            ],
            industry: 'robotics',
            breakPageAfter: true
        },
        {
            title: 'Senior Software Engineer',
            company: 'Inovacion Dental',
            startDate: new Date('Thu May 01 2010 00:00:00 GMT+0000'),
            endDate: new Date('Tue Dec 01 2010 00:00:00 GMT+0000'),
            tasks: [
                'Managed and visualized DICOM Images using VTK/ITK libraries for medical image processing.',
                'Developed a Dental DICOM Images Analysis application for specialized medical imaging.',
                'Created a Mitsubishi Robotic Arm handling application for automation in dental procedures.',
            ],
            skills: [
                {label: 'VTK/ITK', value: 100},
                {label: 'DICOM', value: 100},
                {label: 'Swift', value: 100},
                {label: 'OpenCV', value: 100},
                {label: 'Java', value: 100},
                {label: 'Git', value: 100},
                {label: 'C++', value: 100},

            ],
            industry: 'health',

        },
        {
            title: 'Full Stack Developer',
            company: 'Overon',
            startDate: new Date('Wed Jun 01 2009 00:00:00 GMT+0000'),
            endDate: new Date('Thu Feb 01 2010 00:00:00 GMT+0000'),
            tasks: [
                'Designed and maintained internal applications for efficient enterprise management.',
                'Managed databases and email servers to ensure seamless operation of internal applications, utilizing Linux, Apache, and MySQL.',
                'Developed and maintained Client/Server Applications, meeting business requirements and leveraging PHP skills.',
            ],
            skills: [
                {label: 'Linux', value: 30},
                {label: 'Apache', value: 50},
                {label: 'MySQL', value: 100},
                {label: 'PHP', value: 100},
                {label: 'Bash', value: 50},
                {label: 'Postfix', value: 30},
                {label: 'HTML', value: 50},
                {label: 'CSS', value: 50},
            ],
            industry: 'telecommunications',
        },
        {
            title: 'Full Stack Developer',
            company: 'Thyssen-Bornemisza',
            startDate: new Date('Sun Mar 01 2009 00:00:00 GMT+0000'),
            endDate: new Date('Tue Jun 01 2009 00:00:00 GMT+0000'),
            tasks: [
                'Development of an SDK in PHP to build CMS managed web applications',
                'Contributed to services provided by an interactive communication agency.',
                'Designed and developed websites, ensuring a seamless user experience.',
                'Developed multimedia content for engaging online experiences.',
                'Provided internet consulting services for strategic online presence.',
                'Contributed to branding, positioning, and corporate identity initiatives online.',
                'Resolved issues in enterprise web portals to maintain optimal functionality.',
                'Developed enterprise web portals using PHP and the CodeIgniter development framework, showcasing expertise in Linux, Apache, MySQL, and PHP.'
            ],
            skills: [
                {label: 'SDK development', value: 100},
                {label: 'Linux', value: 50},
                {label: 'Apache', value: 10},
                {label: 'MySQL', value: 50},
                {label: 'PHP', value: 100},
                {label: 'CodeIgniter', value: 100},
                {label: 'Typo3', value: 100},
                {label: 'CSS', value: 50},
                {label: 'HTML', value: 50},
                {label: 'JavaScript', value: 50},
                {label: 'Jquery', value: 50},
                {label: 'Git', value: 100},
            ],
            industry: 'learning',
            

        },
        {
            title: 'Full Stack Developer',
            company: 'Hughes Media Internet Ltd',
            startDate: new Date('Tue Mar 01 2008 00:00:00 GMT+0000'),
            endDate: new Date('Fri Feb 01 2009 00:00:00 GMT+0000'),
            tasks: [
                'Improvement and maintenance of the company\'s CMS SDK',
                'Conducted PHP web development, creating dynamic and interactive websites.',
                'Developed CMS solutions based on MYSQL, LINUX, and PHP5, emphasizing skills in eCommerce and MVC architecture.',
                'Utilized Object-Oriented Programming (OOP) principles for efficient and modular code development.',
                'Monitored and troubleshooted web and mail servers for optimal performance and reliability.',
                'Contributed to the development, maintenance, and integration of various websites.',
                'Developed and deployed SOAP web services to enhance functionality.',
                'Administered Linux servers for seamless operation, specifically CentOS Linux.'
            ],
            skills: [
                {label: 'SDK development', value: 100},
                {label: 'Linux', value: 70},
                {label: 'Apache', value: 70},
                {label: 'MySQL', value: 50},
                {label: 'PHP', value: 100},
                {label: 'Pen Testing', value: 20},
                {label: 'Jquery', value: 20},
                {label: 'JavaScript', value: 50},
                {label: 'Subversion', value: 100},
            ],
            industry: 'ecommerce',
        },
        {
            title: 'Full Stack Developer',
            company: 'EADS CASA Espacio',
            startDate: new Date('Sat Jun 01 2004 00:00:00 GMT+0000'),
            endDate: new Date('Mon Nov 01 2007 00:00:00 GMT+0000'),
            tasks: [
                'Developed a warehouse and providers management application using PHP and MySQL.',
                'Created a non-conformance reports (NCR) management application in PHP, HTML, CSS, and MySQL.',
                'Contributed to the development of enterprise internal network services, including intranet and data transfer between partners.',
                'Resolved technical questions, conducted troubleshooting, and developed tools for improved efficiency.',
                'Developed graphic user interfaces for data consultation, modification, and insertion.',
                'Designed a data exchange interface between ORACLE and MySQL.',
                'Developed an autoclave management application using Visual Basic 5.0.',
                'Facilitated information exchange between partners and the company, including SAP interfaces.'
            ],
            skills: [
                {label: 'Java', value: 10},
                {label: 'Linux', value: 90},
                {label: 'PHP', value: 100},
                {label: 'ORACLE', value: 20},
                {label: 'HTML', value: 90},
                {label: 'CSS', value: 90},
                {label: 'JavaScript', value: 70},
                {label: 'Jquery', value: 50},
                {label: 'ANSI C', value: 20},
                {label: 'AWK', value: 30},
                {label: 'Visual Basic 5.0', value: 40},
                {label: 'MySQL', value: 100},
                {label: 'Apache', value: 90},
                {label: 'SAP', value: 1},
                {label: 'Subversion', value: 100},
            ],
            industry: 'aeronautics',
            breakPageAfter: true
        },
        {
            title: 'Systems Administrator',
            company: 'EADS CASA Espacio',
            startDate: new Date('Mon Jun 01 2001 00:00:00 GMT+0000'),
            endDate: new Date('Sat Jun 01 2004 00:00:00 GMT+0000'),
            tasks: [
                'Administered AIX/UNIX/Linux servers, overseeing various services for optimal performance.',
                'Configured and tuned Apache2, including mod_proxy, mod_php, and virtual domains, ensuring efficient web services.',
                'Conducted troubleshooting, upgrades, and configuration of services/systems on AIX/UNIX/Linux/Solaris servers.',
                'Managed databases, ensuring their integrity and availability for critical operations.',
                'Implemented and maintained the MySQL backups system to safeguard data integrity.',
                'Provided technical support for CATIA users.',
            ],
            skills: [
                {label: 'AIX', value: 70},
                {label: 'Linux', value: 90},
                {label: 'MySQL', value: 80},
                {label: 'Apache', value: 70},
                {label: 'CATIA', value: 30},
                {label: 'C', value: 30},
                {label: 'AWK', value: 30},
                {label: 'Bash', value: 30},
            ],
            industry: 'aeronautics',

        },
        {
            title: 'Freelance Teacher',
            company: 'Informática 64 SL.',
            startDate: new Date('Sat Jun 01 1999 00:00:00 GMT+0000'),
            endDate: new Date('Mon Nov 01 2002 00:00:00 GMT+0000'),
            tasks: [
                'Delivered training sessions for UNIX shell scripting.',
                'Delivered a comprehensive Master class on C/C++, funded by the Madrid Council.',
                'Delivered a Master class on Linux sponsored by the Madrid Council.',
                'Delivered a course for application development with Java, sponsored by the Madrid Council.'
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
        {label: 'JAVA', value: 3, color: colors[3]},
        {label: 'C/C++', value: 13, color: colors[4]},
        {label: 'C#', value: 5, color: colors[5]},

    ],
    cloud: [
        {label: 'AWS', value: 50, color: colors[0]},
        {label: 'Terraform', value: 50, color: colors[0]},
        {label: 'GCP', value: 25, color: colors[1]},
        {label: 'Azure', value: 10, color: colors[2]},
        {label: 'Digital Ocean', value: 15, color: colors[3]}
    ],
    others: [
        {label: 'Android', value: 10, color: colors[0]},
        {label: 'Ansible', value: 50, color: colors[1]},
        {label: 'ReactJS', value: 25, color: colors[2]},
        {label: 'React Native', value: 25, color: colors[3]},
        {label: 'Express.js', value: 75, color: colors[4]},
        {label: 'Nest.js', value: 75, color: colors[5]},
        {label: 'Next.js', value: 60, color: colors[6]},
        {label: 'Spring', value: 25, color: colors[7]},
        {label: 'Vue.js', value: 100, color: colors[0]},
        {label: 'Terraform', value: 100, color: colors[1]},
        {label: 'Gitlab CI', value: 90, color: colors[2]},
        {label: 'Jenkins', value: 25, color: colors[3]},
        {label: 'Docker', value: 90, color: colors[4]},
        {label: 'Kubernetes', value: 20, color: colors[5]},
        {label: 'Linux', value: 100, color: colors[6]},
        {label: 'Symfony', value: 20, color: colors[7]},
        {label: 'bootstrap', value: 50, color: colors[0]},
        {label: 'Tailwind', value: 80, color: colors[1]},
        {label: 'Material UI', value: 15, color: colors[2]},
        {label: 'CSS', value: 60, color: colors[3]},
        {label: 'HTML', value: 90, color: colors[4]},
        {label: 'Bamboo', value: 20, color: colors[5]},
        {label: 'Jira', value: 80, color: colors[6]},
        {label: 'Confluence', value: 80, color: colors[7]},
        {label: 'Bitbucket', value: 80, color: colors[0]},
        {label: 'Github', value: 80, color: colors[1]},
        {label: 'Lens', value: 40, color: colors[2]},
        {label: 'REST API', value: 100, color: colors[2]},
        {label: 'Cucumber', value: 70, color: colors[2]},
        {label: 'Unity', value: 30, color: colors[2]},
        {label: 'Unreal', value: 10, color: colors[2]},
        {label: 'Bash', value: 50, color: colors[2]},
    ]
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