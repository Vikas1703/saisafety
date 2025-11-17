import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingCTA() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919163511805?text=Hi%2C%20I%27m%20interested%20in%20your%20safety%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        data-testid="button-whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg"
          style={{ backgroundColor: '#25D366' }}
          data-testid="button-whatsapp-trigger"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </a>

      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg lg:hidden"
          >
            <div className="flex items-center gap-2 p-3">
              <a href="tel:+919163511805" className="flex-1" data-testid="link-sticky-call">
                <Button variant="outline" className="w-full" data-testid="button-sticky-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link href="/contact" className="flex-1" data-testid="link-sticky-quote-wrapper">
                <Button className="w-full bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-sticky-quote">
                  <FileText className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-20 right-6 z-40 hidden lg:block"
          >
            <Link href="/contact" data-testid="link-sticky-quote-desktop-wrapper">
              <Button className="bg-ring text-primary-foreground hover:bg-ring/90 shadow-lg" data-testid="button-sticky-quote-desktop">
                <FileText className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
