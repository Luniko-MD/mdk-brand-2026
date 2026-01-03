import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Shirt, CreditCard, Flag, FileText, Package, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FastPrint = () => {
  const services = [
    {
      icon: Palette,
      title: "DTF Transfers",
      description: "High-quality direct-to-film transfers for vibrant, durable prints on any fabric.",
      image: "/images/dtf-transfers.png",
    },
    {
      icon: Shirt,
      title: "Sublimation Printing",
      description: "Full-color, photographic quality prints that last. Perfect for sportswear and promotional items.",
      image: "/images/sublimation.png",
    },
    {
      icon: CreditCard,
      title: "Business Cards",
      description: "Make a lasting first impression with professionally designed and printed business cards.",
      image: "/images/business-cards.png",
    },
    {
      icon: Flag,
      title: "Banners & Signage",
      description: "Eye-catching indoor and outdoor banners, pull-ups, and signage solutions.",
      image: "/images/banners.png",
    },
    {
      icon: FileText,
      title: "Flyers & Brochures",
      description: "Compelling marketing materials that communicate your message effectively.",
      image: "/images/flyers.png",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Branded packaging solutions including labels, stickers, and boxes.",
      image: "/images/packaging.png",
    },
  ];

  const process = [
    { step: "1", title: "Request Quote", description: "Tell us what you need" },
    { step: "2", title: "Design Review", description: "We finalize your design" },
    { step: "3", title: "Production", description: "Quality printing begins" },
    { step: "4", title: "Delivery", description: "Fast, reliable delivery" },
  ];

  return (
    <>
      <SEO 
        title="Fast Printing Services" 
        description="Same-day business cards, flyers, and DTF printing in Cape Town. High quality, fast turnaround."
        keywords="printing cape town, business cards, flyers, dtf printing"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-mdk-orange/5">
        <div className="container-mdk section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-mdk-orange/10 rounded-full text-mdk-orange text-sm font-medium">
                Fast Turnaround
              </div>
              <h1 className="heading-hero">
                <span className="text-primary">MDK Fast Print</span>
                <br />Professional Printing Services
              </h1>
              <p className="text-lg text-muted-foreground">
                From DTF transfers to business cards, banners to brochures—we deliver quality printing with fast turnaround times. Your brand deserves the best.
              </p>
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get a Print Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <img 
                src="/images/print-hero.png"
                alt="Professional DTF Printing" 
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
            <h2 className="heading-section mb-4">Our Printing Services</h2>
            <p className="text-muted-foreground">
              High-quality printing solutions for all your business and personal needs.
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
            <h2 className="heading-section mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Simple, streamlined process from request to delivery.
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
            <div>
              <img 
                src="/images/why-choose-us.png" 
                alt="Quality Sublimation Printing" 
                className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-section">Why Choose MDK Fast Print?</h2>
              <div className="space-y-4">
                {[
                  "Premium quality materials and inks",
                  "Fast turnaround times",
                  "Competitive pricing",
                  "Expert design assistance available",
                  "Wide range of products and finishes",
                  "Reliable delivery nationwide",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-mdk-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/quote">
                  Request a Quote
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
          <h2 className="heading-section mb-4">Ready to Print?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Get a free quote for your printing project today. Fast, quality, affordable.
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

export default FastPrint;