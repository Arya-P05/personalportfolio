import { Icons } from "@/components/icons";

export const DATA = {
  name: "Arya Patel",
  initials: "AP",
  url: "https://aryap.xyz/",
  location: "Toronto, Ontario, Canada",
  work: [
    {
      company: "MPAC",
      href: "",
      badges: [],
      location: "Toronto, Ontario, Canada",
      title: "Software Engineer Intern",
      logoUrl: "/atomic.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Pptimized MPAC’s Geo-spatial Convolutional Neural Network, boosting classification accuracy by 16%. I also played a key role in developing internal Retrieval-Augmented Generation (RAG) Language Models, successfully integrating over four models and reducing response times by 0.5 seconds. Additionally, I implemented various AWS SQS queues and custom endpoints to automate malicious content checks in LLM responses. Which both streamlined the process and ensured security without response compromising speeds.",
    },
    {
      company: "Hack The North",
      badges: [],
      href: "",
      location: "Waterloo, Ontario, Canada",
      title: "Software Engineer Intern",
      logoUrl: "/shopify.svg",
      start: "January 2024",
      end: "Present",
      description:
        "Enhanced the sponsorship dashboard by upgrading it to Blueprint.js V5, which resulted in a 34% improvement in load times and data rendering efficiency. I also implemented a responsive design for the dashboard table, ensuring optimal usability across more than 10 different device types. Additionally, I developed an automated reminder system that played a key role in the team collectively securing $500,000+ in sponsorships while reducing manual workload by 20%.",
    },
    {
      company: "Guardian",
      href: "",
      badges: [],
      location: "Toronto, Ontario, Canada",
      title: "Software Engineer Intern",
      logoUrl: "/nvidia.png",
      start: "Sept 2023",
      end: "Feb 2024",
      description:
        "Developed and implemented key features for appointment scheduling and health tracking, which are being used by over 600 patients each month. My features also led to a notable increase in patient satisfaction, achieving a rating of 4.76 out of 5 for appointment scheduling—an improvement of 28% from previous years. I also helped enhance the app's security by automating regular vulnerability assessments and implementing AES-256 encryption.",
    },
    {
      company: "JPMorgan Chase & Co.",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern Experience",
      logoUrl: "/splunk.svg",
      start: "July 2023",
      end: "Aug 2023",
      description:
        "Developed an adaptive internal equity screener tool using Python and TensorFlow, leveraging LSTM networks to enhance its accuracy. I also built several React and TypeScript components that can contribute to Perspective, the company's open-source software. Expereinced creating comprehensive test suites with Jest and Mocha & Chai, which led to a 35% reduction in intermittent security issues, significantly improving the stability and security of the software.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science and Finance, Double Major",
      logoUrl: "/waterloo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
