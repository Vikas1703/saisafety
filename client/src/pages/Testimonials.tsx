import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Sai Safety System handled our entire fire alarm installation with flawless execution — timely and professional. Their attention to detail and commitment to quality exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "Facilities Head",
    company: "Mumbai Industrial Estate",
    rating: 5,
  },
  {
    quote: "Their team's expertise in CCTV and access control integration transformed our building security. The installation was seamless, and the ongoing support has been exceptional. Highly recommended.",
    author: "Priya Sharma",
    role: "Security Manager",
    company: "Corporate Tower Thane",
    rating: 5,
  },
  {
    quote: "Reliable, certified, and committed to excellence. Sai Safety System is our trusted partner for all safety needs. They've maintained our systems for over 5 years with zero issues.",
    author: "Amit Desai",
    role: "Project Director",
    company: "Commercial Complex Navi Mumbai",
    rating: 5,
  },
  {
    quote: "We needed a comprehensive fire suppression system for our warehouse, and Sai Safety System delivered beyond our expectations. The foam-based system they installed has given us peace of mind.",
    author: "Vikram Patel",
    role: "Operations Manager",
    company: "Bhiwandi Logistics Hub",
    rating: 5,
  },
  {
    quote: "Professional service from start to finish. The team understood our hospital's unique requirements and delivered a fire alarm system that meets all compliance standards. Outstanding work!",
    author: "Dr. Meera Iyer",
    role: "Administrator",
    company: "Healthcare Facility Navi Mumbai",
    rating: 5,
  },
  {
    quote: "Their electrical solutions and safety audits have been invaluable for our facility. The preventive maintenance approach has saved us from potential issues and reduced our operational costs.",
    author: "Sandeep Malhotra",
    role: "Maintenance Head",
    company: "Manufacturing Plant Thane",
    rating: 5,
  },
  {
    quote: "Sai Safety System's PA system installation for our retail complex was completed ahead of schedule. The integration with fire alarm systems works perfectly. Great team to work with!",
    author: "Neha Reddy",
    role: "General Manager",
    company: "Shopping Mall Bhayandar",
    rating: 5,
  },
  {
    quote: "We've partnered with Sai Safety System for multiple projects. Their licensed professionals, timely execution, and 24/7 support make them our go-to safety solutions provider.",
    author: "Karan Joshi",
    role: "Property Manager",
    company: "Real Estate Development Group",
    rating: 5,
  },
  {
    quote: "The water leak detection system they installed in our data center has been flawless. Real-time monitoring and instant alerts give us the protection we need for our critical infrastructure.",
    author: "Arjun Nair",
    role: "IT Manager",
    company: "Technology Services Mumbai",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-testimonials-header">
              Client Testimonials
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the clients who trust us with their safety and security needs across Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 9) * 0.1 }}
              >
                <Card className="h-full hover-elevate flex flex-col" data-testid={`card-testimonial-${index}`}>
                  <CardContent className="pt-6 flex flex-col flex-1">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-ring text-ring" />
                      ))}
                    </div>

                    <div className="mb-4 flex-1">
                      <span className="text-3xl text-ring leading-none">"</span>
                      <p className="text-muted-foreground italic mt-2" data-testid={`text-testimonial-detail-quote-${index}`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground" data-testid={`text-testimonial-detail-author-${index}`}>
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-detail-role-${index}`}>
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-detail-company-${index}`}>
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join Our Satisfied Clients
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of professionalism, quality, and reliability that our clients have come to expect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-testimonials-contact">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-testimonials-contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" data-testid="link-testimonials-projects">
                <Button size="lg" variant="outline" data-testid="button-testimonials-projects">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
