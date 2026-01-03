import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await emailjs.send(
        "service_9a9ei2b",
        "template_iv3r2nn",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
        },
        "iubpB5LJlGzc4Hpe7"
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div>
      <SEO 
        title="Contact Us" 
        description="Get in touch with MDK Brand for professional printing and web development services in Cape Town. Call, email, or visit us today."
        keywords="contact mdk brand, printing services contact, web development cape town contact"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container-mdk section-padding">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="heading-hero mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or ready to start your project? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-mdk">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="tel:0691623990"
              className="group p-8 rounded-2xl border bg-card border-border hover:border-primary/20 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card mb-2">Phone</h3>
              <p className="font-medium text-foreground mb-1">069 162 3990</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 8am-5pm</p>
            </a>

            <a
              href="mailto:mdkfastprint@gmail.com"
              className="group p-8 rounded-2xl border bg-card border-border hover:border-primary/20 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card mb-2">Email</h3>
              <p className="font-medium text-foreground mb-1">mdkfastprint@gmail.com</p>
              <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
            </a>

            <a
              href="https://wa.me/27691623990"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border bg-mdk-green/10 border-mdk-green/20 hover:bg-mdk-green/15 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-mdk-green/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-mdk-green" />
              </div>
              <h3 className="heading-card mb-2">WhatsApp</h3>
              <p className="font-medium text-foreground mb-1">Chat with us</p>
              <p className="text-sm text-muted-foreground">Quick responses</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="heading-section">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
                {submitSuccess && (
                  <div className="bg-mdk-green/10 text-mdk-green p-4 rounded-lg text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-100 text-red-600 p-4 rounded-lg text-sm">
                    Sorry, something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="069 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Print Services">Print Services</option>
                      <option value="Web Services">Web Services</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="heading-section">Our Location</h2>

              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d18.32054891278386!3d-33.91452449395656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1703500000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MDK Brand Location"
                  className="absolute inset-0"
                />
              </div>

              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <p>Cape Town, Western Cape, South Africa</p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="font-medium">Business Hours</span>
                </div>
                <div className="space-y-4">
                  {businessHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-mdk text-center">
          <h2 className="heading-section mb-4">Ready to Start?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Do not wait. Let us bring your project to life today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quote">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;