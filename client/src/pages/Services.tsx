import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Flame,
  Bell,
  Camera,
  Radio,
  Droplets,
  Bug,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Firefighting & Suppression Systems",
    description: "Complete fire suppression system design, installation, and maintenance for commercial and industrial facilities.",
    features: [
      "Sprinkler system installation",
      "Fire hydrant systems",
      "Fire pumps and equipment",
      "Foam-based suppression systems",
      "Gas-based suppression systems",
      "Annual maintenance contracts",
    ],
  },
  {
    icon: Bell,
    title: "Fire Alarm Systems",
    description: "Advanced fire detection and alert systems for early warning and rapid response to fire emergencies.",
    features: [
      "Smoke and heat detectors",
      "Manual call points",
      "Control panels and monitoring",
      "Audio-visual alarm devices",
      "Integration with suppression systems",
      "24/7 monitoring solutions",
    ],
  },
  {
    icon: Camera,
    title: "Access Control & CCTV Solutions",
    description: "Integrated security and surveillance systems to protect your premises and monitor activities.",
    features: [
      "IP camera installation",
      "DVR/NVR setup and configuration",
      "Biometric access control",
      "RFID card access systems",
      "Video analytics solutions",
      "Remote monitoring capabilities",
    ],
  },
  {
    icon: Radio,
    title: "Public Address (PA) Systems",
    description: "Professional PA system installation for clear communication in emergencies and daily operations.",
    features: [
      "Zone-based PA systems",
      "Emergency voice communication",
      "Background music systems",
      "Paging and announcement systems",
      "Integration with fire alarm",
      "Audio distribution networks",
    ],
  },
  {
    icon: Droplets,
    title: "Water Leak Detection (WLD)",
    description: "Advanced WLD systems to detect and prevent water damage in critical areas and data centers.",
    features: [
      "Leak detection sensors",
      "Real-time monitoring alerts",
      "Automatic shut-off systems",
      "Data center protection",
      "Server room solutions",
      "Prevention and early warning",
    ],
  },
  {
    icon: Bug,
    title: "Rodent Control Solutions",
    description: "Comprehensive pest management and rodent control to maintain hygiene and safety standards.",
    features: [
      "Commercial pest control",
      "Rodent prevention systems",
      "Electronic rodent repellents",
      "Regular inspection services",
      "Safe and eco-friendly methods",
      "Compliance documentation",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Solutions",
    description: "Professional electrical installation, maintenance, and safety solutions for all types of facilities.",
    features: [
      "Electrical panel installation",
      "Wiring and distribution",
      "UPS and power backup",
      "Energy-efficient lighting",
      "Electrical safety audits",
      "Preventive maintenance",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-services-header">
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive Safety Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From design to installation and ongoing maintenance, we deliver end-to-end safety solutions with complete system reliability and annual compliance audits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-ring" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-service-detail-title-${index}`}>
                              {service.title}
                            </h2>
                            <p className="text-muted-foreground" data-testid={`text-service-detail-desc-${index}`}>
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <h3 className="font-semibold text-foreground mb-3">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-ring flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every facility has unique safety requirements. Let us design a comprehensive safety solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-custom">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-contact-custom">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:+919163511805" data-testid="link-call-custom">
                <Button size="lg" variant="outline" data-testid="button-call-custom">
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
