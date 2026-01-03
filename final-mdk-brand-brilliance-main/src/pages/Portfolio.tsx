import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Printer, Globe, Palette, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "print", label: "Print Design" },
    { id: "web", label: "Web Development" },
    { id: "branding", label: "Branding" },
  ];

  const projects = [
    { id: 1, title: "Corporate Business Cards", category: "print", color: "from-primary/20 to-mdk-orange/20" },
    { id: 2, title: "E-commerce Website", category: "web", color: "from-primary/30 to-primary/10" },
    { id: 3, title: "Brand Identity Package", category: "branding", color: "from-mdk-orange/20 to-primary/20" },
    { id: 4, title: "Event Banners", category: "print", color: "from-mdk-green/20 to-primary/20" },
    { id: 5, title: "Portfolio Website", category: "web", color: "from-primary/20 to-mdk-green/20" },
    { id: 6, title: "Product Packaging", category: "branding", color: "from-mdk-orange/30 to-mdk-orange/10" },
    { id: 7, title: "Restaurant Menu Design", category: "print", color: "from-primary/25 to-primary/5" },
    { id: 8, title: "Landing Page Design", category: "web", color: "from-mdk-green/20 to-mdk-green/5" },
    { id: 9, title: "Promotional Flyers", category: "print", color: "from-mdk-orange/20 to-mdk-green/20" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    print: Printer,
    web: Globe,
    branding: Palette,
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="heading-hero mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our collection of print and digital projects. Each piece represents our commitment to quality and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding">
        <div className="container-mdk">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = categoryIcons[project.category] || Camera;
              return (
                <div
                  key={project.id}
                  className="group cursor-pointer animate-fade-in"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className={`aspect-square bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <Icon className="w-16 h-16 text-foreground/20" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-background">
                        <p className="text-sm opacity-80 capitalize">{project.category}</p>
                        <h4 className="font-semibold text-lg">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-mdk text-center">
          <h2 className="heading-section mb-4">Like What You See?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Let's create something amazing for your business. Get in touch for a free consultation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quote">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
