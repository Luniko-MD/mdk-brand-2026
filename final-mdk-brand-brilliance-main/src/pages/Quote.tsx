import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
const Quote = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: ""
    });
    setIsSubmitting(false);
  };
  const services = [{
    value: "dtf",
    label: "DTF Transfers"
  }, {
    value: "sublimation",
    label: "Sublimation Printing"
  }, {
    value: "business-cards",
    label: "Business Cards"
  }, {
    value: "banners",
    label: "Banners & Signage"
  }, {
    value: "flyers",
    label: "Flyers & Brochures"
  }, {
    value: "packaging",
    label: "Custom Packaging"
  }, {
    value: "web-design",
    label: "Web Design"
  }, {
    value: "web-development",
    label: "Web Development"
  }, {
    value: "seo",
    label: "SEO Optimization"
  }, {
    value: "hosting",
    label: "Web Hosting"
  }, {
    value: "other",
    label: "Other"
  }];
  return <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="heading-hero mb-6">
              Get a <span className="text-primary">Free Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll provide a detailed quote within 24 hours. No obligation, no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-mdk">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="heading-card mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="079 069 9806" value={formData.phone} onChange={e => setFormData({
                      ...formData,
                      phone: e.target.value
                    })} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <Select value={formData.service} onValueChange={value => setFormData({
                      ...formData,
                      service: value
                    })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map(service => <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Details *</Label>
                    <Textarea id="description" required rows={5} placeholder="Tell us about your project, quantities, deadlines, and any specific requirements..." value={formData.description} onChange={e => setFormData({
                    ...formData,
                    description: e.target.value
                  })} />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Quote Request"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h3 className="heading-card mb-6">Prefer to Talk?</h3>
                <div className="space-y-4">
                  <a href="tel:0790699806" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-sm text-muted-foreground">069 162 3990/067 840 8842</p>
                    </div>
                  </a>
                  <a href="mailto:info@mdkbrand.co.za" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-sm text-muted-foreground">mdkfastprint@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/27790699806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-mdk-green/10 hover:bg-mdk-green/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-mdk-green/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-mdk-green" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-muted/50 rounded-2xl p-8">
                <h3 className="heading-card mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {["Free, no-obligation quote", "Response within 24 hours", "Detailed pricing breakdown", "Timeline estimate", "Expert consultation"].map((item, index) => <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-mdk-green flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Quote;