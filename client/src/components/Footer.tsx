import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Sai Safety System</h3>
                <p className="text-xs text-muted-foreground">Licensed Contractor</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Maharashtra Government licensed fire-fighting contractor providing comprehensive safety solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-certifications">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Firefighting & Suppression</li>
              <li>Fire Alarm Systems</li>
              <li>CCTV & Access Control</li>
              <li>PA Systems</li>
              <li>Water Leak Detection</li>
              <li>Rodent Control</li>
              <li>Electrical Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  203, Sharda CHS, Navghar Cross Road No. 5 (South), Bhayandar (East), Dist. Thane - 401105, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+919163511805" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-phone">
                  +91-91635 11805
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:mahendra.pal@saissafetysystem.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-email">
                  mahendra.pal@saissafetysystem.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sai Safety System. All rights reserved. Licensed Fire-Fighting Contractor by Government of Maharashtra.
          </p>
        </div>
      </div>
    </footer>
  );
}
