import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Search, Code, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Design & Prototyping",
    icon: Palette,
    color: "primary",
    skills: [
      "UI/UX Design",
      "Wireframing",
      "Figma",
      "Interactive Prototypes",
      "Component Design",
    ],
  },
  {
    title: "User Research & Testing",
    icon: Search,
    color: "accent",
    skills: [
      "Heuristic Evaluation",
      "Usability Testing",
      "A/B Testing",
      "User Interviews",
      "Data Analysis",
    ],
  },
  {
    title: "Development & Systems",
    icon: Code,
    color: "rose",
    skills: [
      "HTML/CSS",
      "Design Systems",
      "Component-Based Design",
      "Responsive Design",
      "Figma to Code",
    ],
  },
  {
    title: "Collaboration & Tools",
    icon: Users,
    color: "amber",
    skills: [
      "Developer Collaboration",
      "Agile Workflow",
      "Variant Management",
      "Presentation Mode",
      "Clean File Maintenance",
    ],
  },
];

// ✅ Explicit Tailwind color mapping
const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-500" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-500" },
};

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const { bg, text } = colorMap[category.color] || {
    bg: "bg-gray-200",
    text: "text-gray-700",
  };

  return (
    <motion.div ref={ref} variants={cardVariants}>
      <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${bg}`}
            >
              <category.icon className={`w-6 h-6 ${text}`} />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">
              {category.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 bg-background mb-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for creating exceptional user experiences
            from concept to code.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
