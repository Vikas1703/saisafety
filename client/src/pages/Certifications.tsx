import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  Award,
  CheckCircle2,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import certificationBadge from "@assets/generated_images/Maharashtra_certification_badge_f7235245.png";

const certifications = [
  {
    icon: Shield,
    title: "Maharashtra Government License",
    description: "Official Fire-Fighting Contractor Certification",
    issuer: "Government of Maharashtra",
    status: "Active & Valid",
  },
];

const standards = [
  {
    code: "NFPA",
    title: "National Fire Protection Association",
    description: "Compliance with international fire safety standards and best practices for fire protection systems.",
  },
  {
    code: "IS 2190",
    title: "Code of Practice for Selection, Installation & Maintenance of Automatic Fire Detection & Alarm Systems",
    description: "Indian Standard for fire detection and alarm system design and installation.",
  },
  {
    code: "IS 3844",
    title: "Code of Practice for Installation & Maintenance of Internal Fire Hydrants & Hose Reels",
    description: "Standards for fire hydrant and hose reel system installation.",
  },
  {
    code: "NBC",
    title: "National Building Code of India",
    description: "Comprehensive building regulations including fire safety and protection requirements.",
  },
  {
    code: "OISD",
    title: "Oil Industry Safety Directorate",
    description: "Safety standards for oil and gas industry installations and fire protection systems.",
  },
  {
    code: "TAC",
    title: "Tariff Advisory Committee",
    description: "Insurance industry standards for fire safety and risk management.",
  },
];

const commitments = [
  {
    icon: CheckCircle2,
    title: "Licensed & Certified",
    description: "All work performed by certified professionals under proper licensing",
  },
  {
    icon: FileCheck,
    title: "Code Compliance",
    description: "Strict adherence to national and international safety codes",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular audits and inspections to maintain highest standards",
  },
  {
    icon: Shield,
    title: "Insurance Approved",
    description: "Work meets insurance company requirements and standards",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-cert-header">
              Certifications & Compliance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Licensed & Certified Excellence
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our certifications and compliance with national and international standards ensure the highest quality and safety in every project we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Official Certification
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="hover-elevate" data-testid="card-certification-badge">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <img
                      src={certificationBadge}
                      alt="Official Maharashtra Government Fire-Fighting Contractor Certification badge issued to Sai Safety System, showing government seal and licensing credentials"
                      className="w-64 h-64 object-contain"
                      data-testid="img-certification-badge"
                    />
                  </div>

                  <div>
                    {certifications.map((cert, index) => (
                      <div key={index} className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                          <cert.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground" data-testid="text-cert-title">
                          {cert.title}
                        </h3>
                        <p className="text-lg text-muted-foreground" data-testid="text-cert-desc">
                          {cert.description}
                        </p>
                        <div className="space-y-2 pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Issued By:</span>
                            <span className="text-sm font-medium text-foreground">{cert.issuer}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Status:</span>
                            <Badge className="bg-ring text-primary-foreground">{cert.status}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline" data-testid="badge-standards">
              Compliance Standards
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industry Standards We Follow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our work adheres to nationally and internationally recognized fire safety codes and standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate" data-testid={`card-standard-${index}`}>
                  <CardContent className="pt-6">
                    <Badge className="mb-4" variant="outline">{standard.code}</Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-standard-title-${index}`}>
                      {standard.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-standard-desc-${index}`}>
                      {standard.description}
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
            <Badge className="mb-4" variant="outline" data-testid="badge-commitments">
              Our Commitments
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quality & Compliance Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover-elevate" data-testid={`card-commitment-${index}`}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-ring/10 rounded-md flex items-center justify-center mx-auto mb-4">
                      <commitment.icon className="w-6 h-6 text-ring" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`text-commitment-title-${index}`}>
                      {commitment.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-commitment-desc-${index}`}>
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Work With a Certified Professional
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our licensed and certified team ensures your safety systems meet all regulatory requirements and industry standards.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" data-testid="link-cert-contact">
                <Button size="lg" className="bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-cert-contact">
                  Get a Compliance Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services" data-testid="link-cert-services">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" data-testid="button-cert-services">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
