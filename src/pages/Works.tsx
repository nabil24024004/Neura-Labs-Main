import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Web App", "Automation", "Product Design", "Analytics"];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Our Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforming ideas into intelligent solutions that drive real business impact
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {projects.length} Projects Delivered
              </span>
              <span>•</span>
              <span>15+ Industries Served</span>
              <span>•</span>
              <span>98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="smooth-transition"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="relative group cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => navigate(`/works/${project.slug}`)}
              >
                <div className="glass-panel rounded-2xl p-6 h-full flex flex-col overflow-hidden smooth-transition group-hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 smooth-transition`} />

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary smooth-transition">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/40">
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {project.metrics && Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-muted-foreground capitalize">{key}</div>
                            <div className="font-semibold">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/40 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 smooth-transition">
                      View Case Study
                      <span className="inline-block group-hover:translate-x-1 smooth-transition">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-fade-in">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto glass-panel rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's build something extraordinary together. Our team is ready to turn your vision into reality.
            </p>
            <Button
              size="lg"
              onClick={() => {
                window.location.href = '/#connect';
              }}
              className="font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Works;
