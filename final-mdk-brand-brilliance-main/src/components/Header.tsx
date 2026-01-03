import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
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
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-mdk py-2 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0790699806" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">069 162 3990/ 068 840 8842</span>
            </a>
            <a href="mailto:info@mdkbrand.co.za" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">mdkfastprint@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>BEE Level 1 - Certified</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-mdk py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">MDK Brand</span>
              <span className="text-xs text-muted-foreground">MDK Fast Print & MDK Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                {link.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Button asChild className="mt-2">
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;