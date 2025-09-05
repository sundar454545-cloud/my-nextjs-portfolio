import React from "react";
import { Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full relative bg-background flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full filter blur-3xl opacity-50 animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center justify-center space-y-8">
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tighter"
        >
          UI/UX Designer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          I'm Sundarkarthik, crafting intuitive and user-centered digital
          experiences that bridge business goals with user needs. Based in Tamil
          Nadu, India.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg text-lg px-8 py-6"
          >
            <Mail className="w-5 h-5 mr-3" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 text-muted-foreground animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
          Scroll
        </button>
      </motion.div>
    </motion.section>
  );
}
