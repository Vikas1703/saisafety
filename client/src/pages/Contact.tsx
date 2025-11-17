import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - will be connected to backend in Task 3
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us directly at +91-91635 11805.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Firefighting & Suppression",
    "Fire Alarm Systems",
    "Access Control & CCTV",
    "Public Address Systems",
    "Water Leak Detection",
    "Rodent Control",
    "Electrical Solutions",
    "General Inquiry",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="outline" data-testid="badge-contact-header">
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to enhance your safety and security? Contact us today for a free consultation and quote. Our experts are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="hover-elevate" data-testid="card-contact-form">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91-XXXXXXXXXX" {...field} data-testid="input-phone" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-trigger">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service, idx) => (
                                  <SelectItem 
                                    key={service} 
                                    value={service}
                                    data-testid={`select-service-option-${idx}`}
                                  >
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project requirements..."
                                className="min-h-32"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-ring text-primary-foreground hover:bg-ring/90"
                        disabled={isSubmitting}
                        data-testid="button-submit-form"
                      >
                        <Send className="mr-2 w-4 h-4" />
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="hover-elevate" data-testid="card-contact-info">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Address</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-address">
                          203, Sharda CHS, Navghar Cross Road No. 5 (South),<br />
                          Bhayandar (East), Dist. Thane - 401105,<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-ring/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-ring" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Phone</p>
                        <a
                          href="tel:+919163511805"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          data-testid="link-phone"
                        >
                          +91-91635 11805
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a
                          href="mailto:mahendra.pal@saissafetysystem.in"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                          data-testid="link-email"
                        >
                          mahendra.pal@saissafetysystem.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-ring/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-ring" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Mon - Sat: 9:00 AM - 6:00 PM<br />
                          24/7 Emergency Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground hover-elevate">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Need immediate assistance? Our emergency support team is available 24/7.
                  </p>
                  <a href="tel:+919163511805" data-testid="link-emergency-call">
                    <Button className="w-full bg-ring text-primary-foreground hover:bg-ring/90" data-testid="button-emergency-call">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Emergency Line
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              Located in Bhayandar (East), Thane, Maharashtra
            </p>
          </div>

          <Card className="overflow-hidden" data-testid="card-map">
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30134.735394!2d72.8502!3d19.2952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f0c602d4e3%3A0x7b8e7b8e7b8e7b8e!2sBhayandar%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Safety System Office Location"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
