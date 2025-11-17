import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Flame,
  Bell,
  Camera,
  Radio,
  Droplets,
  Bug,
  Zap,
  Shield,
  Clock,
  Award,
  HeadphonesIcon,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@assets/generated_images/Fire_safety_installation_hero_8856756b.png";

const highlights = [
  {
    icon: Award,
    title: "2+ Decades of Expertise",
    description: "Proven track record in safety solutions",
  },
  {
    icon: Shield,
    title: "Licensed by Maharashtra Govt.",
    description: "Certified fire-fighting contractor",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Safety Solutions",
    description: "Design, supply, installation & maintenance",
  },
  {
    icon: HeadphonesIcon,
    title: "24x7 Support",
    description: "Always available for emergencies",
  },
];

const services = [
  {
    icon: Flame,
    title: "Firefighting & Suppression",
    description: "Complete fire suppression system design and installation",
  },
  {
    icon: Bell,
    title: "Fire Alarm Systems",
    description: "Advanced detection and alert systems for early warning",
  },
  {
    icon: Camera,
    title: "Access Control & CCTV",
    description: "Integrated security and surveillance solutions",
  },
  {
    icon: Radio,
    title: "Public Address Systems",
    description: "Professional PA system installation and setup",
  },
  {
    icon: Droplets,
    title: "Water Leak Detection",
    description: "Advanced WLD systems to prevent water damage",
  },
  {
    icon: Bug,
    title: "Rodent Control",
    description: "Comprehensive pest management solutions",
  },
  {
    icon: Zap,
    title: "Electrical Solutions",
    description: "Professional electrical installation and maintenance",
  },
];

const testimonials = [
  {
    quote: "Sai Safety System handled our entire fire alarm installation with flawless execution — timely and professional.",
    author: "Facilities Head",
    company: "Mumbai Industrial Estate",
  },
  {
    quote: "Their team's expertise in CCTV and access control integration transformed our building security. Highly recommended.",
    author: "Security Manager",
    company: "Corporate Tower Thane",
  },
  {
    quote: "Reliable, certified, and committed to excellence. Sai Safety System is our trusted partner for all safety needs.",
    author: "Project Director",
    company: "Commercial Complex Navi Mumbai",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional fire safety technicians installing advanced fire alarm systems in a modern commercial building"
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-ring text-primary-foreground" data-testid="badge-hero-licensed">
              Licensed Fire-Fighting Contractor - Maharashtra Government
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-headline">
              Protecting Lives, Powering Safety.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8" data-testid="text-hero-subtext">
              Licensed fire-fighting & safety solutions partner — design, supply, installation, and maintenance you can trust.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-hero-quote">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90 backdrop-blur-sm" data-testid="button-hero-quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+919163511805" data-testid="link-hero-call">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" data-testid="button-hero-call">
                  <Phone className="mr-2 w-4 h-4" />
                  Call +91-91635 11805
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover-elevate" data-testid={`card-highlight-${index}`}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`text-highlight-title-${index}`}>
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-services-section">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Safety Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to maintenance, we ensure complete system reliability with annual compliance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-ring" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`text-service-desc-${index}`}>
                      {service.description}
                    </p>
                    <Link href="/services" data-testid={`link-service-learn-${index}`}>
                      <Button variant="ghost" size="sm" className="group" data-testid={`button-service-learn-${index}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-view-all-services">
              <Button size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4" variant="outline" data-testid="badge-about-section">
                About Sai Safety System
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted Safety Partner
              </h2>
              <p className="text-muted-foreground mb-4">
                With over two decades of experience, Sai Safety System has established itself as a leading licensed fire-fighting contractor in Maharashtra. We specialize in comprehensive safety solutions that protect lives and property.
              </p>
              <p className="text-muted-foreground mb-6">
                Led by Mahendra Pal, our team is committed to delivering safety with precision, reliability, and unwavering commitment to excellence.
              </p>
              <Link href="/about" data-testid="link-learn-more-about">
                <Button data-testid="button-learn-more-about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-testimonials-section">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <span className="text-4xl text-ring">"</span>
                    </div>
                    <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-quote-${index}`}>
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" data-testid="link-view-all-testimonials">
              <Button variant="outline" data-testid="button-view-all-testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Talk to a Safety Expert Today
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your safety system requirements. Our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-cta-contact">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-cta-contact">
                  <Phone className="mr-2 w-4 h-4" />
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+919163511805" data-testid="link-cta-call">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" data-testid="button-cta-call">
                  <Clock className="mr-2 w-4 h-4" />
                  24/7 Emergency Support
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
