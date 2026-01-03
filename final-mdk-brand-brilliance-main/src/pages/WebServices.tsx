import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Palette, Search, Server, Code, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WebServices = () => {
  const services = [
    {
      icon: Palette,
      title: "Social Media Management",
      description: "Social media that engage your followers and enhance digital dominance.",
      image: "/images/social-media.png",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      image: "/images/web-development.png",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Websites that look perfect on every device—desktop, tablet, and mobile.",
      image: "/images/responsive-design.png",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your visibility and rank higher in search engine results.",
      image: "/images/seo-optimization.png",
    },
    {
      icon: Server,
      title: "Business Automation",
      description: "Reliable, fast hosting solutions and business automation to keep your site and business running smoothly.",
      image: "/images/business-automation.png",
    },
    {
      icon: Globe,
      title: "Domain Services",
      description: "Domain registration, management, and DNS configuration.",
      image: "/images/domain-services.png",
    },
  ];

  const process = [
    { step: "1", title: "Discovery", description: "Understanding your goals" },
    { step: "2", title: "Design", description: "Creating your vision" },
    { step: "3", title: "Development", description: "Building your solution" },
    { step: "4", title: "Launch", description: "Going live with support" },
  ];

  return (
    <>
      <SEO 
        title="Web Development & Design" 
        description="Custom website development, SEO, and digital marketing solutions for Cape Town businesses. Modern, responsive, and fast."
        keywords="web design cape town, seo services, website development, social media management"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Digital Excellence
              </div>
              <h1 className="heading-hero">
                <span className="text-primary">MDK Web Services</span>
                <br />Digital Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                From stunning website designs to powerful web applications, we bring your digital vision to life. Modern, responsive, and built for performance.
              </p>
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get a Web Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <img 
                src="/images/web-services.png" 
                alt="Web Development Services" 
                className="w-full h-auto rounded-xl shadow-xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Our Digital Services</h2>
            <p className="text-muted-foreground">
              Comprehensive web solutions to establish and grow your online presence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-[21/9] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="heading-card mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-mdk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              A proven approach to delivering successful web projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/web-team.png" 
                alt="Web Development Team" 
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="heading-section">Why Choose MDK Web Services?</h2>
              <div className="space-y-4">
                {[
                  "Modern, responsive designs",
                  "Fast-loading, optimized websites",
                  "SEO-friendly development",
                  "Ongoing support and maintenance",
                  "Competitive pricing",
                  "Clear communication throughout",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-mdk-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/quote">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-mdk text-center">
          <h2 className="heading-section mb-4">Ready to Go Digital?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Let's build something amazing together. Get a free consultation today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default WebServices;