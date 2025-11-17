import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Building2,
  Factory,
  Hospital,
  ShoppingBag,
  Warehouse,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import fireSuppressionProject from "@assets/generated_images/Fire_suppression_project_637e64d7.png";
import cctvProject from "@assets/generated_images/CCTV_access_control_project_a413a0c6.png";
import fireAlarmProject from "@assets/generated_images/Fire_alarm_systems_project_39685215.png";

const projects = [
  {
    title: "Commercial Tower Fire Suppression",
    category: "Firefighting & Suppression",
    icon: Building2,
    image: fireSuppressionProject,
    location: "Mumbai, Maharashtra",
    scope: "Complete fire suppression system for 15-floor commercial building",
    challenges: [
      "Integration with existing building systems",
      "Minimal disruption to ongoing operations",
      "Compliance with Mumbai fire regulations",
    ],
    outcomes: [
      "100% code-compliant installation",
      "Zero operational downtime during installation",
      "Annual maintenance contract secured",
      "Received fire safety clearance certificate",
    ],
  },
  {
    title: "Industrial Facility CCTV & Access Control",
    category: "Security Solutions",
    icon: Factory,
    image: cctvProject,
    location: "Thane Industrial Area",
    scope: "Integrated CCTV surveillance and biometric access control for manufacturing facility",
    challenges: [
      "Large facility area coverage (50,000 sq ft)",
      "Multiple entry points and security zones",
      "Integration with existing IT infrastructure",
    ],
    outcomes: [
      "120+ cameras installed with full coverage",
      "Centralized monitoring with remote access",
      "Enhanced security with biometric controls",
      "Reduced security incidents by 85%",
    ],
  },
  {
    title: "Healthcare Facility Fire Alarm System",
    category: "Fire Alarm Systems",
    icon: Hospital,
    image: fireAlarmProject,
    location: "Navi Mumbai",
    scope: "Advanced fire detection and alarm system for multi-specialty hospital",
    challenges: [
      "24/7 operational facility requirements",
      "Patient safety as top priority",
      "Integration with PA system for evacuation",
    ],
    outcomes: [
      "Zone-wise fire detection coverage",
      "Integrated emergency communication",
      "Regular maintenance and testing protocols",
      "Hospital accreditation compliance achieved",
    ],
  },
  {
    title: "Retail Complex Safety Solutions",
    category: "Comprehensive Safety",
    icon: ShoppingBag,
    image: fireSuppressionProject,
    location: "Bhayandar, Thane",
    scope: "End-to-end safety systems including fire, CCTV, and PA systems",
    challenges: [
      "High foot traffic during installation",
      "Multiple vendors coordination",
      "Tight project timeline",
    ],
    outcomes: [
      "Project completed 2 weeks ahead of schedule",
      "All systems integrated seamlessly",
      "Fire NOC obtained before opening",
      "Ongoing maintenance support",
    ],
  },
  {
    title: "Warehouse Fire Protection",
    category: "Firefighting & Suppression",
    icon: Warehouse,
    image: fireAlarmProject,
    location: "Bhiwandi Logistics Hub",
    scope: "Fire suppression and detection for large-scale storage facility",
    challenges: [
      "High-ceiling warehouse design",
      "Flammable goods storage requirements",
      "Insurance compliance standards",
    ],
    outcomes: [
      "Foam-based suppression system installed",
      "Early warning detection system",
      "Insurance approval obtained",
      "Annual safety audit support",
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-projects-header">
              Our Projects
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Proven Track Record
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successfully delivered safety solutions across Maharashtra. Each project demonstrates our commitment to excellence and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.scope} at ${project.location}`}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${index}`}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-ring text-primary-foreground">{project.category}</Badge>
                      </div>
                    </div>

                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-project-title-${index}`}>
                            {project.title}
                          </h2>
                          <p className="text-muted-foreground text-sm" data-testid={`text-project-location-${index}`}>
                            📍 {project.location}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Project Scope</h3>
                          <p className="text-sm text-muted-foreground" data-testid={`text-project-scope-${index}`}>
                            {project.scope}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Challenges Solved</h3>
                          <ul className="space-y-1">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-ring mt-0.5">•</span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Key Outcomes</h3>
                          <ul className="space-y-1">
                            {project.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-ring flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Sai Safety System for their safety solutions. Let's discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-projects-contact">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-projects-contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+919163511805" data-testid="link-projects-call">
                <Button size="lg" variant="outline" data-testid="button-projects-call">
                  Call +91-91635 11805
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
