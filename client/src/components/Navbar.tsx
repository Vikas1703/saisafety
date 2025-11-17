import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/certifications", label: "Certifications" },
    { path: "/projects", label: "Projects" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div className="ml-2 hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">Sai Safety System</h1>
                <p className="text-xs text-muted-foreground">Licensed Fire-Fighting Contractor</p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-nav-${item.label.toLowerCase()}-wrapper`}>
                <Button
                  variant="ghost"
                  className={location === item.path ? "bg-accent" : ""}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="tel:+919163511805" className="flex items-center gap-2" data-testid="link-nav-call">
              <Button variant="outline" size="sm" data-testid="button-nav-call">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91-91635 11805</span>
              </Button>
            </a>
            <Link href="/contact" data-testid="link-nav-quote-wrapper">
              <Button size="sm" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-nav-quote">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`link-mobile-${item.label.toLowerCase()}-wrapper`}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${location === item.path ? "bg-accent" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="pt-2 border-t border-border space-y-2">
                <a href="tel:+919163511805" className="block" data-testid="link-mobile-call">
                  <Button variant="outline" className="w-full" data-testid="button-mobile-call">
                    <Phone className="w-4 h-4 mr-2" />
                    Call +91-91635 11805
                  </Button>
                </a>
                <Link href="/contact" data-testid="link-mobile-quote-wrapper">
                  <Button className="w-full bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-mobile-quote">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
