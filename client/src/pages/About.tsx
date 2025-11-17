import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Shield,
  Users,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";

const mission = {
  icon: Target,
  title: "Our Mission",
  description: "To provide comprehensive, reliable, and certified safety solutions that protect lives and property across Maharashtra. We are committed to excellence in every installation, maintenance, and consultation we deliver.",
};

const vision = {
  icon: Eye,
  title: "Our Vision",
  description: "To be the most trusted and innovative safety solutions provider in India, setting industry standards for quality, reliability, and customer satisfaction in fire-fighting and safety systems.",
};

const journey = [
  {
    year: "2000",
    title: "Foundation",
    description: "Sai Safety System established with a mission to enhance safety standards",
  },
  {
    year: "2005",
    title: "Licensed Contractor",
    description: "Received official Fire-Fighting Contractor certification from Maharashtra Government",
  },
  {
    year: "2010",
    title: "Service Expansion",
    description: "Expanded services to include CCTV, Access Control, and PA Systems",
  },
  {
    year: "2015",
    title: "500+ Projects",
    description: "Completed over 500 successful safety installations across Maharashtra",
  },
  {
    year: "2020",
    title: "Innovation Leader",
    description: "Integrated advanced technology solutions for comprehensive safety management",
  },
  {
    year: "2024",
    title: "Continued Excellence",
    description: "Leading provider of end-to-end safety solutions with 24/7 support",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed Contractor",
    description: "Official Fire-Fighting Certification from Government of Maharashtra ensures compliance and quality.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description: "Experienced professionals with deep expertise in safety systems and industry best practices.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Committed to on-time project delivery without compromising on quality or safety standards.",
  },
  {
    icon: Award,
    title: "Reliable Support",
    description: "24/7 emergency support and annual maintenance to ensure continuous system reliability.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-about-header">
              About Sai Safety System
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Your Trusted Safety Partner
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With over two decades of excellence, we are Maharashtra's premier licensed fire-fighting contractor, delivering comprehensive safety solutions that protect what matters most.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-elevate" data-testid="card-mission">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <mission.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-mission-title">
                    {mission.title}
                  </h2>
                  <p className="text-muted-foreground" data-testid="text-mission-desc">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-elevate" data-testid="card-vision">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mb-4">
                    <vision.icon className="w-6 h-6 text-ring" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-vision-title">
                    {vision.title}
                  </h2>
                  <p className="text-muted-foreground" data-testid="text-vision-desc">
                    {vision.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-journey">
              Our Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Two Decades of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our foundation to becoming Maharashtra's trusted safety partner
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block" />

            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <Card className="hover-elevate" data-testid={`card-journey-${index}`}>
                      <CardContent className="pt-6">
                        <div className="text-3xl font-bold text-ring mb-2" data-testid={`text-journey-year-${index}`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-journey-title-${index}`}>
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-journey-desc-${index}`}>
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 bg-primary rounded-full items-center justify-center z-10 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-leadership">
              Leadership
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Led by Experience
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-3xl mx-auto hover-elevate" data-testid="card-leadership">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">MP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mahendra Pal</h3>
                  <p className="text-ring font-medium">Project Head</p>
                </div>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  Leading Sai Safety System with a mission to deliver safety with precision and commitment. With extensive experience in the safety industry, Mahendra Pal ensures every project meets the highest standards of quality and compliance.
                </p>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    📧 mahendra.pal@saissafetysystem.in | 📞 +91-91635 11805
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-why-choose">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Safety, Our Priority
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four pillars that make us Maharashtra's trusted safety solutions provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate" data-testid={`card-why-choose-${index}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-6 h-6 text-ring" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-why-title-${index}`}>
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground" data-testid={`text-why-desc-${index}`}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
