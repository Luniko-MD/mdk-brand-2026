import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background">
      <div className="container-mdk py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MDK Brand</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner for professional printing services and cutting-edge web solutions. We bring your ideas to life with precision and creativity.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-primary" />
              <span>Trusted Digital Services</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[{
              name: "About Us",
              path: "/about"
            }, {
              name: "Fast Print",
              path: "/fast-print"
            }, {
              name: "Web Services",
              path: "/web-services"
            }, {
              name: "Portfolio",
              path: "/portfolio"
            }, {
              name: "Get a Quote",
              path: "/quote"
            }].map(link => <Link key={link.path} to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                  {link.name}
                </Link>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:0790699806" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>069 162 3990/ 068 840 8842</span>
              </a>
              <a href="mailto:info@mdkbrand.co.za" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>mdkfastprint@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Business Hours</h4>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </div>
              <div className="pl-7">Sat: 9:00 AM - 1:00 PM</div>
              <div className="pl-7">Sun: Closed</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© {currentYear} MDK Brand. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;