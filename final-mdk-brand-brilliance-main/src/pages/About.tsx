import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in every project we deliver.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we create.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work alongside our clients as true partners in their success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches.",
    },
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about MDK Brand, a Cape Town based printing and web development agency dedicated to quality, innovation, and client success."
        keywords="about mdk brand, printing company cape town, web agency south africa"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="heading-hero mb-6">
              About <span className="text-primary">MDK Brand</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              We are a passionate team dedicated to helping businesses succeed through exceptional print and digital solutions. Based in Cape Town, we serve clients across South Africa with creativity, quality, and reliability.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-medium"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/about-story.png" 
                alt="MDK Brand Journey" 
                className="w-full h-auto rounded-xl shadow-lg object-cover object-top aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="heading-section">Our Story</h2>
              <p className="text-muted-foreground">
                MDK Brand was founded with a simple mission: to provide businesses of all sizes with access to professional-quality print and digital services. What started as a small printing operation has grown into a comprehensive creative agency.
              </p>
              <p className="text-muted-foreground">
                Today, we operate two specialized divisions—MDK Fast Print for all your printing needs, and MDK Web Services for digital solutions. This allows us to be your one-stop shop for brand development and marketing materials.
              </p>
              <p className="text-muted-foreground">
                demonstrating our commitment to transformation and empowerment in Africa and globally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-mdk">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with creative print and digital solutions that drive growth, build brand recognition, and create lasting impressions. We aim to make professional design and printing accessible to everyone.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading creative partner for businesses in South Africa, known for our quality, innovation, and commitment to client success. We envision a future where every business can access world-class branding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              These core values guide everything we do and how we serve our clients.
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
          <h2 className="heading-section mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Ready to elevate your brand? We'd love to hear about your project.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quote">
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;