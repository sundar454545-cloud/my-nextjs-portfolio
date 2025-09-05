import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, User, Linkedin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ContactCard = ({ icon: Icon, label, value, href, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const content = (
    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-2">{label}</h3>
        <p className="text-muted-foreground leading-relaxed">{value}</p>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="block hover:scale-105 transition-transform duration-300"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactInfo = [
    {
      icon: User,
      label: "Name",
      value: "Sundarkarthik A",
      href: null,
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 8754955518",
      href: "tel:+918754955518",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: "Sundar454545@gmail.com",
      href: "mailto:Sundar454545@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/sundarkarthik1022/",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 bg-secondary"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Ready to bring your ideas to life? I'd love to hear from you. Reach
            out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {contactInfo.slice(0, 3).map((contact, index) => (
            <ContactCard key={index} {...contact} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contactInfo.slice(3).map((contact, index) => (
            <ContactCard key={index + 3} {...contact} index={index + 3} />
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Available for freelance projects and full-time opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
            >
              <a href="mailto:Sundar454545@gmail.com">
                <Mail className="w-5 h-5 mr-3" />
                Send Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            >
              <a href="tel:+918754955518">
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
