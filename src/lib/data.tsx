import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/calmllama.jpg',
    title: 'Calm Llama - Booking Platform',
    description:
      'A modern web platform that enables users to discover and book premium wellness experiences such as saunas, yoga, massages, and float tanks. Features include real-time availability, secure payments, and instant booking confirmations. Worked as a Full Stack Freelance developer @ ToraTec AI, Dublin, Ireland',
    technologies: [
      'TypeScript',
      'Stripe Payment Gateway',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Shadcn UI',
      'Node.js',
      'Express',
      'UI/UX Developer',
      'Supabase',
      'AI',
      'n8n',
      'Google Maps API',
    ],
    links: {
      preview: 'https://calmllama.life/',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/mini-otio.jpg',
    title: 'Mini Otio - AI Research Assistant',
    description:
      'A modern AI-powered research assistant that combines real-time web search with intelligent response generation. Users can ask research questions and receive comprehensive, streamed responses with multiple formatting options (step-by-step, bullet points, ELI5). Features include bookmark management, conversation export, and a sleek chat interface with real-time streaming capabilities.      ',
    technologies: [
      'AI Agent',
      'Next.js 15',
      'TypeScript',
      'Shadcn UI',
      'React.js',
      'Tailwind CSS',
      'Zustand',
      'Zod',
      'OpenRouter API',
      'Exa.ai',
      'AI SDK',
    ],
    links: {
      preview: 'https://mini-otio.vercel.app/',
      github: 'https://github.com/Yashkapure06/mini-otio',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/ec2.jpg',
    title: 'EC2 Cloud Cost Analyzer',
    description:
      '       AWS EC2 Cloud Cost Analyzer is a tool that helps you analyze the cost of your AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances.      ',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Shadcn UI',
      'Tailwind CSS',
      'AWS',
      'AWS EC2',
      'AWS API Gateway',
      'AWS CloudWatch',
    ],
    links: {
      preview: 'https://ec2-observe.vercel.app/',
      github: 'https://github.com/Yashkapure06/ec2-observe',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
  {
    image: '/images/final-year.png',
    title: 'Online Interview Assessment System (OIAS)',
    description:
      'A fully Functional Online Interview Assessment System for Students and Professionals. This comprehensive platform enables real-time video interviews, automated assessments, and seamless communication between interviewers and candidates.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Socket.io',
      'MongoDB',
      'Heroku',
      'Node Mailer',
      'Express.js',
      'Firebase',
      'Google OAuth',
    ],
    links: {
      preview:
        'https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10',
      github: 'https://github.com/Yashkapure06',
      githubApi: 'https://api.github.com/repos/Yashkapure06',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'IT Tutor',
    company: 'Impact Academies, United Kingdom',
    description:
      'I teach Scratch, Java, JavaScript, Python, HTML, CSS, Motion Design, AI, ML, and more. I help students learn these skills and build their own projects. I teach from age 5 to 40+',

    period: '2024 - Present',
    technologies: [
      'Scratch',
      'Java',
      'JavaScript',
      'Python',
      'HTML',
      'CSS',
      'Motion Design',
      'AI',
      'ML',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Dragon Sino Group, United Kingdom',
    description:
      'Worked as a Full Stack developer at Dragon Sino Group, a Chinese company operating in the United Kingdom. Created fully functional MERN Stack Web Applications with responsive behavior, smooth touch UI, and API Integration.',
    period: '2024 - 2025',
    technologies: [
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'API Integration',
      'MERN Stack',
      'RESTful API',
      'PHP',
      'MySQL',
    ],
  },
  {
    title: 'Frontend Developer (React.js)',
    company: 'Octane Apps, Remote',
    description:
      'Worked as a Frontend Developer specializing in React.js at Octane Apps. Created fully functional Next.js based frontends with MERN dashboards, focusing on responsive design and smooth user interfaces.',
    period: '2023 - 2024',
    technologies: [
      'Next.js',
      'React.js',
      'SCSS',
      'CSS',
      'MUI',
      'SEO',
      'Payment Gateway',
      'API Integration',
      'RESTful API',
      'MERN Stack',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
  },
  {
    title: 'Frontend Developer (Full-Stack - Next.js)',
    company: 'Anandlok Ayurveda & Panchakarma Hospital, Nagpur',
    description:
      'Worked as an FUll Stack Developer Frontend Focused, creating a website for Ayurveda & Panchakarma practitioners using React.js, Next.js, and Material-UI. The platform allows practitioners to share their knowledge and experience with others.',
    period: '2021-2023',
    technologies: [
      'Next.js',
      'React.js',
      'CSS',
      'Material-UI',
      'SEO',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'API Integration',
      'MERN Stack',
      'RESTful API',
    ],
  },
  {
    title: 'Full Stack Vue.js Developer',
    company: 'Dr. Manisha&apos;s Yoga Institute, Pune',
    description: (
      <>
        Created a comprehensive MEVN Stack Web Application for Dr.
        Manisha&apos;s Yoga Institute, investing over 180+ hours in development.
        The project includes an admin panel with CRUD functionalities and a
        blogging system using Firebase. The platform serves as a digital space
        for yoga practitioners and students.
      </>
    ),
    period: '2022 - 2023',
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'Vuex',
      'MongoDB',
      'Node-Express',
      'Firebase',
      'SEO',
    ],
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed, Remote',
    description:
      'Working as a freelance Full Stack Developer, specializing in MERN/MEVN stack development. Creating responsive web applications, e-commerce platforms, and custom solutions for various clients. Available for hire at $35/hr, may vary depending on the project. And flexible working hours.',
    period: '2020 - Present',
    technologies: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
] as const;
