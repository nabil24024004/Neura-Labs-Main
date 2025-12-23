import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Code2, Layers, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button onClick={() => navigate("/works")}>Back to Works</Button>
            </div>
        );
    }

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                <div className="container mx-auto px-4 relative z-10">
                    <Button
                        variant="ghost"
                        className="mb-8 hover:bg-white/5"
                        onClick={() => navigate("/works")}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Works
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                            {project.category}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12">
                            {project.description}
                        </p>

                        {/* Project Metadata Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl glass-panel border-white/5">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Layers className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Role</span>
                                </div>
                                <p className="font-medium">{project.role || "N/A"}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Code2 className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack?.map(tech => (
                                        <Badge key={tech} variant="outline" className="bg-white/5">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Status</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <p className="font-medium">{project.status || "Completed"}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Monitor className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Platform</span>
                                </div>
                                <p className="font-medium">{project.platform || "Web"}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 py-20 space-y-24"
            >
                {/* Overview */}
                {project.overview && (
                    <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-3">
                            <h2 className="text-2xl font-bold gradient-text sticky top-32">Overview</h2>
                        </div>
                        <div className="md:col-span-9">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {project.overview}
                            </p>
                        </div>
                    </motion.section>
                )}

                {/* Problem & Solution */}
                {(project.problem || project.solution) && (
                    <div className="grid md:grid-cols-2 gap-12">
                        {project.problem && (
                            <motion.div variants={item} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 smooth-transition" />
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-red-400">The Problem</span>
                                </h3>
                                <ul className="space-y-4">
                                    {project.problem.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <span className="text-red-400 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {project.solution && (
                            <motion.div variants={item} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 smooth-transition" />
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-green-400">The Solution</span>
                                </h3>
                                <ul className="space-y-4">
                                    {project.solution.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <span className="text-green-400 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Key Features */}
                {project.keyFeatures && (
                    <motion.section variants={item}>
                        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.keyFeatures.map((feature, idx) => (
                                <div key={idx} className="glass-panel p-6 rounded-xl hover:bg-white/5 smooth-transition">
                                    <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                                    <ul className="space-y-3">
                                        {feature.items.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-primary/50 text-lg leading-none">›</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Design Philosophy & Tech Highlights */}
                <div className="grid md:grid-cols-2 gap-16">
                    {project.designPhilosophy && (
                        <motion.section variants={item}>
                            <h2 className="text-2xl font-bold mb-8 gradient-text">Design Philosophy</h2>
                            <div className="space-y-6 text-muted-foreground">
                                {project.designPhilosophy.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {project.technicalHighlights && (
                        <motion.section variants={item}>
                            <h2 className="text-2xl font-bold mb-8 gradient-text">Technical Highlights</h2>
                            <ul className="space-y-4">
                                {project.technicalHighlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    )}
                </div>

                {/* Outcome */}
                {project.outcome && (
                    <motion.section variants={item} className="glass-panel p-10 rounded-3xl border-primary/20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5" />
                        <h2 className="text-3xl font-bold mb-8 gradient-text relative z-10">Project Outcome</h2>
                        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
                            {project.outcome.map((p, i) => (
                                <p key={i} className="text-lg text-muted-foreground">{p}</p>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Why Different */}
                {project.whyDifferent && (
                    <motion.section variants={item} className="mb-20">
                        <h2 className="text-2xl font-bold mb-8 text-center">What Makes It Different</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.whyDifferent.map((diff, i) => (
                                <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                                    {diff}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

            </motion.div>

            {/* CTA Footer */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Have a similar project in mind?</h2>
                    <Button size="lg" onClick={() => window.location.href = '/#connect'}>
                        Let's Discuss
                    </Button>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default ProjectDetail;
