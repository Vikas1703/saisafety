# Design Guidelines for Sai Safety System Website

## Design Approach
**Professional Safety-Oriented Business Site** - Reference-based approach drawing from corporate service websites with strong trust-building elements (similar to enterprise security/infrastructure service providers).

## Brand Identity

**Theme:** Professional, reliable, and safety-oriented

**Color Palette:**
- Deep Navy: #0B3D91 (trust, authority)
- Bright Orange: #FF6A3D (alertness, attention)
- Neutral White: #F5F7FA
- Dark Grey: #1F1F1F (text)

**Typography:**
- Primary: Inter
- Fallback: System UI fonts
- Clear hierarchy with professional legibility

## Layout System

**Spacing:** Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm (p-4, py-8, gap-6, etc.)

**Grid Structure:** Grid-based layouts with card-style showcases, sticky navigation, prominent CTAs throughout

## Core Components

### Hero Section
- Large hero image (fire safety equipment, technicians at work, or modern building with safety systems)
- Headline: "Protecting Lives, Powering Safety."
- Subtext: "Licensed fire-fighting & safety solutions partner — design, supply, installation, and maintenance you can trust."
- Dual CTAs: "Get a Free Quote" (primary orange) and "Call +91-91635118" (secondary navy outline)
- Blurred background on CTA buttons when placed over images

### Trust Indicators
- 4-column quick highlights: "2+ Decades of Expertise", "Licensed by Maharashtra Govt.", "End-to-End Safety Solutions", "24x7 Support"
- Maharashtra Government certification badge prominently displayed
- Social proof placeholders (LinkedIn, Google Reviews)

### Service Cards (7 cards in responsive grid)
- 3-column desktop, 2-column tablet, 1-column mobile
- Each card: Lucide React icon, title, 2-line description, "Learn More" CTA
- Services: Firefighting & Suppression, Fire Alarm Systems, Access Control & CCTV, PA Systems, WLD, Rodent Control, Electrical

### Navigation
- Sticky top nav with logo, menu items (Home, About, Services, Certifications, Projects, Testimonials, Contact)
- Mobile hamburger menu
- Persistent "Request Quote" button in nav

### Testimonials
- Rotating slider/carousel with 3-5 testimonial cards
- Include client name, role, company
- Clean card design with quote marks

### Contact Form
- Fields: Name, Email, Phone, Service dropdown, Message
- Form validation with toast confirmations
- Google Maps embed showing company location
- Company details prominently displayed (address, phone, email)

### Floating Elements
- WhatsApp contact button (bottom-right, bright orange)
- Sticky "Request Quote" CTA appearing on scroll
- Mobile floating CTA bar with "Call Now" & "Get Quote"

## Images

**Hero Image:** Full-width professional photo of fire safety equipment installation, safety technicians in action, or modern commercial building with visible safety systems. Should convey professionalism and technical expertise.

**About Section:** Image of team/leadership or company facility

**Services:** Icon-based (Lucide React) with optional supportive imagery per card

**Projects/Portfolio:** 3-5 project showcase images with before/after or installation photos

**Certifications:** Maharashtra Government Fire-Fighting Certification badge image

**General:** Use WebP format for all images, free stock photos of fire alarm systems, CCTV cameras, technicians, electrical panels, safety equipment

## Animations
Subtle framer-motion animations:
- Page entrance fades
- Scroll-triggered reveals for sections
- Smooth transitions on testimonial slider
- Micro-interactions on service card hover (slight lift/shadow)
- Keep minimal to maintain professional tone

## Page-Specific Elements

**Home:** Hero + highlights + service grid + about preview + testimonials + CTA section

**About:** Mission/vision + company journey timeline + leadership spotlight + "Why Choose Us" 4-point grid

**Services:** 7 service cards with expanded descriptions and "Learn More" links

**Certifications:** Badge display + compliance standards explanation (NFPA, IS codes)

**Projects:** 3-5 project cards with descriptions, outcomes, challenges solved

**Contact:** Form + map embed + contact details + sticky footer with call/email CTAs

## Accessibility & Performance
- WCAG 2.1 compliant
- All images with descriptive alt text
- Visible focus states on all interactive elements
- Lazy loading for images and components
- Semantic HTML structure
- Target <1.2s load time