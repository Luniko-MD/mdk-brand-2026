import { Link } from "react-router-dom";
import { ArrowRight, Printer, Globe, CheckCircle, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "MDK Fast Print",
      description: "Professional printing services including DTF transfers, sublimation, business cards, banners, and more.",
      icon: Printer,
      link: "/fast-print",
      image: "/images/print-services.png",
    },
    {
      title: "MDK Web Services",
      description: "Custom web development, UI/UX design, SEO optimization, and digital solutions for your business.",
      icon: Globe,
      link: "/web-services",
      image: "/images/web-services.png",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "We never compromise on quality. Every project meets our highest standards.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without sacrificing quality. We respect your deadlines.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We listen, understand, and deliver.",
    },
    {
      icon: Award,
      title: "BEE Level 1",
      description: "Proudly certified, supporting transformation in South Africa.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Award className="w-4 h-4" />
                BEE Level 1 Certified
              </div>
              <h1 className="heading-hero text-balance">
                Elevate Your Brand with{" "}
                <span className="text-primary">Print & Digital</span> Excellence
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                From stunning print materials to powerful web solutions, MDK Brand delivers quality that makes your business stand out. Get a free quote today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img 
                  src="/images/hero-main.png" 
                  alt="MDK Brand - Print and Digital Excellence" 
                  className="w-full h-auto rounded-xl shadow-xl object-cover aspect-video"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mdk-orange/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-mdk py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Two powerful divisions, one commitment to excellence. Whether you need print or digital, we've got you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="heading-card mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-mdk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Why Choose MDK Brand</h2>
            <p className="text-muted-foreground">
              We combine expertise, dedication, and innovation to deliver exceptional results for every client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-mdk text-center">
          <h2 className="heading-section mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Let's discuss your project and create something amazing together. Request a free quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;