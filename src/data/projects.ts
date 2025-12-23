export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    gradient: string;
    role?: string;
    techStack?: string[];
    status?: string;
    platform?: string;
    overview?: string;
    problem?: string[];
    solution?: string[];
    keyFeatures?: {
        title: string;
        items: string[];
    }[];
    designPhilosophy?: string[];
    technicalHighlights?: string[];
    outcome?: string[];
    whyDifferent?: string[];
    metrics?: Record<string, string>;
    tags?: string[];
    liveUrl?: string;
    behanceUrl?: string;
    images?: string[];
}

export const projects: Project[] = [
    {
        slug: "peerhire",
        title: "PeerHire",
        category: "Web App",
        description: "A university-exclusive platform for outsourcing varsity work",
        gradient: "from-blue-500/20 to-purple-500/20",
        role: "Product Design, UI/UX Design, Frontend Engineering, Backend Architecture",
        techStack: ["Next.js", "Lovable Cloud", "PostgreSQL", "Realtime Messaging", "Object Storage"],
        status: "Live (Real Users)",
        platform: "Web (Mobile-First Responsive)",
        liveUrl: "https://peerhireaaub.vercel.app",
        behanceUrl: "https://www.behance.net/neuralabs-projects",
        images: [
            "/projects/peerhire/hero.png",
            "/projects/peerhire/services.png",
            "/projects/peerhire/freelancers.png",
            "/projects/peerhire/signup.png"
        ],
        overview: "PeerHire is a university-exclusive freelancing platform designed to connect students who need academic assistance with fellow students who can provide it. Unlike generic freelancing platforms, PeerHire is purpose-built for varsity-level work—including assignments, lab reports, documentation, and academic writing—within a trusted campus environment. The platform enables students to act as hirers, freelancers, or both using a single verified university email. With real-time dashboards, live availability boards, messaging, and reputation-based ratings, PeerHire transforms informal peer help into a structured, professional, and scalable ecosystem.",
        problem: [
            "No trusted, university-verified marketplace",
            "Informal Facebook/WhatsApp groups with no accountability",
            "No transparency in pricing, quality, or deadlines",
            "No reputation or rating system",
            "Lack of real-time availability visibility",
            "Traditional platforms like Fiverr or Upwork are overkill, unsafe for academic contexts, and disconnected from campus realities."
        ],
        solution: [
            "Only students with a valid @aaub.edu.bd email can join",
            "Users can seamlessly switch between Hirer and Freelancer roles",
            "Tasks, payments, messages, and review are handled inside one system",
            "Reputation and ratings follow freelancers everywhere on the platform",
            "This creates trust, fairness, and professionalism inside the campus economy."
        ],
        keyFeatures: [
            {
                title: "Dual-Role Accounts",
                items: [
                    "One account, one email",
                    "Students can hire and work as freelancers without creating multiple profiles",
                    "Role switching is instant and UI-driven"
                ]
            },
            {
                title: "Role-Based Dashboards",
                items: [
                    "Hirer dashboard: tasks posted, progress, spending, freelancer ratings",
                    "Freelancer dashboard: active jobs, completed work, earnings, reputation",
                    "All stats are powered by real backend data, not demos"
                ]
            },
            {
                title: "Live Freelancer Board",
                items: [
                    "Real-time list of freelancers showing availability status",
                    "Rating and completed job count",
                    "Instant messaging from live cards"
                ]
            },
            {
                title: "Real-Time Messaging",
                items: [
                    "Messenger-style chat system",
                    "Supports file sharing and job-linked conversations",
                    "Integrated across dashboards, jobs, and live board"
                ]
            },
            {
                title: "Task Completion & Review System",
                items: [
                    "Hirers mark tasks as completed",
                    "Review popup appears immediately",
                    "Ratings propagate everywhere: Freelancer dashboard, Profile, Live board, Search results"
                ]
            },
            {
                title: "Mobile-First Design",
                items: [
                    "Fully responsive across all pages",
                    "Sidebar adapts to drawer / bottom navigation on mobile",
                    "Chat experience optimized for touch devices"
                ]
            }
        ],
        designPhilosophy: [
            "PeerHire follows a futuristic minimal dark UI inspired by modern SaaS products:",
            "High-contrast dark theme for focus",
            "Subtle motion and micro-interactions",
            "Card-based layouts with clear hierarchy",
            "Mobile usability prioritized from day one",
            "The goal was to make the platform feel professional, calm, and trustworthy, not experimental or gimmicky."
        ],
        technicalHighlights: [
            "Lovable Cloud backend with real users and production data",
            "Strong role-based access control",
            "Realtime updates for messages, availability, and ratings",
            "Secure object storage for job files and handwriting samples",
            "Scalable database design for future payment automation (bKash integration planned)"
        ],
        outcome: [
            "PeerHire evolved from a showcase concept into a real, production-ready platform:",
            "No demo or fake data",
            "Real hirers and freelancers onboarded",
            "Fully live dashboards, live board, and messaging",
            "A foundation ready for payment automation and growth"
        ],
        whyDifferent: [
            "Campus-verified trust model",
            "Academic-specific workflows",
            "Dual-role user architecture",
            "Real-time visibility and accountability",
            "Designed for real student usage, not just presentation"
        ],
        metrics: { Projects: "100+", StudentBase: "400+", AvgRating: "4.8/5" },
        tags: ["Assignment", "Ratings", "Live"]
    },
    // Placeholders for other projects to prevent errors on the Works page listing
    {
        slug: "smart-analytics",
        title: "Smart Analytics Dashboard",
        category: "Product Design",
        description: "Real-time data visualization with predictive insights",
        gradient: "from-green-500/20 to-teal-500/20",
        tags: ["Data Viz", "Predictive AI", "Dashboard"],
        metrics: { dataPoints: "10M+", updateRate: "Real-time", accuracy: "92%" }
    },
    {
        slug: "voice-ai",
        title: "Voice AI Assistant",
        category: "AI Development",
        description: "Natural language processing for enterprise workflows",
        gradient: "from-orange-500/20 to-red-500/20",
        tags: ["Voice AI", "NLP", "Enterprise"],
        metrics: { languages: "15+", accuracy: "94%", responseTime: "0.5s" }
    },
    {
        slug: "document-intelligence",
        title: "Document Intelligence",
        category: "AI Development",
        description: "Automated document processing and extraction system",
        gradient: "from-pink-500/20 to-purple-500/20",
        tags: ["OCR", "Document AI", "Automation"],
        metrics: { accuracy: "98%", processingTime: "2s/page", formats: "20+" }
    },
    {
        slug: "predictive-maintenance",
        title: "Predictive Maintenance System",
        category: "Analytics",
        description: "AI-powered system predicting equipment failures before they occur",
        gradient: "from-cyan-500/20 to-blue-500/20",
        tags: ["IoT", "Predictive Analytics", "Industrial"],
        metrics: { accuracy: "91%", downtime: "-60%", savings: "$2M+" }
    },
    {
        slug: "sentiment-analysis",
        title: "Sentiment Analysis Platform",
        category: "AI Development",
        description: "Real-time brand monitoring across social media channels",
        gradient: "from-violet-500/20 to-purple-500/20",
        tags: ["Sentiment AI", "Social Media", "Analytics"],
        metrics: { sources: "50+", accuracy: "89%", languages: "25+" }
    },
    {
        slug: "supply-chain",
        title: "Supply Chain Optimizer",
        category: "Automation",
        description: "ML-driven logistics optimization reducing costs by 40%",
        gradient: "from-amber-500/20 to-orange-500/20",
        tags: ["ML", "Logistics", "Optimization"],
        metrics: { costReduction: "40%", efficiency: "+35%", routes: "1000+" }
    },
    {
        slug: "medical-imaging",
        title: "Medical Imaging AI",
        category: "AI Development",
        description: "Deep learning system for medical diagnosis assistance",
        gradient: "from-rose-500/20 to-pink-500/20",
        tags: ["Deep Learning", "Healthcare", "Computer Vision"],
        metrics: { accuracy: "96%", scans: "100K+", time: "-70%" }
    }
];
