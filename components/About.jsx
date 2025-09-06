import React, { useRef } from "react";
import { Users, Target, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";

const AnimatedCard = ({ icon: Icon, title, description, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Tailwind-safe color map
  const { bg, text } = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-500" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-500" },
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-500" },
  }[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-4"
    >
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${bg}`}
      >
        <Icon className={`w-8 h-8 ${text}`} />
      </div>
      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 bg-secondary mb-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            With over 3 years of experience, I specialize in UI/UX Design for US
            insurance companies, crafting seamless and user-centered digital
            experiences that align with business objectives. My work focuses on
            creating impactful designs that simplify complex workflows while
            enhancing usability and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedCard
            icon={Users}
            title="User-Centered"
            description="Designing with empathy and solving real user problems."
            color="blue"
            index={0}
          />
          <AnimatedCard
            icon={Target}
            title="Goal-Oriented"
            description="Aligning design decisions with key business objectives."
            color="rose"
            index={1}
          />
          <AnimatedCard
            icon={Lightbulb}
            title="Innovative"
            description="Crafting creative solutions for complex challenges."
            color="indigo"
            index={2}
          />
        </div>
      </div>
    </motion.section>
  );
}
