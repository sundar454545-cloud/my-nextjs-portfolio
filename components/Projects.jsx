import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/customcard";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Brokerage Flow Redesign",
    company: "RT Specialty & Orchid Insurance",
    description:
      "Led the UI/UX redesign of a complex brokerage workflow, enhancing usability for brokers and clients. Worked on creating detailed wireframes, PDF form screens, and building interactive prototypes to visualize solutions effectively. Designed clear user flows to simplify navigation, reduce friction, and improve overall efficiency across the platform. Collaborated closely with stakeholders to align design decisions with business objectives and regulatory requirements.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470",
  },
  {
    title: "Internal POC Insurance Website",
    company: "Solartis",
    description:
      "Independently designed and delivered a functional proof-of-concept for a user-centered insurance platform, showcasing how design can drive measurable business impact. Led the end-to-end process — from conducting user research and identifying key pain points to creating wireframes, interactive prototypes, and user flows. The solution not only simplified complex insurance processes but also demonstrated improved usability, efficiency, and potential for higher user adoption.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415",
  },
  {
    title: "Insurance Management System",
    company: "Solartis",
    description:
      "Revamped an internal insurance platform with a strong focus on usability improvements driven by user-centric analysis. Led a design team of three, including myself, to completely redesign the existing design system through user research, identification of key pain points, and alignment with company expectations. Implemented design testing methodologies, including A/B testing, to validate design decisions and ensure measurable improvements. This effort streamlined workflows, improved consistency, and delivered a more intuitive experience for internal users.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470",
  },
  {
    title: "ERC Management Tool",
    company: "Internal Project",
    description:
      "Contributed as a UI Designer to build visually consistent and user-friendly interfaces for a management tool. Collaborated within a team of four designers, where I effectively delivered the screens assigned to me while ensuring alignment with the overall design system and project goals. My work emphasized consistency, usability, and attention to detail, supporting the team in creating a cohesive and intuitive product experience.",
    image:
      "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=1470",
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div ref={ref} variants={cardVariants}>
      <Card className="group overflow-hidden bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col p-0">
        {/* Image block (flush with top, no padding) */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-white/80 text-sm">{project.company}</p>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Text content (with padding) */}
        <CardContent className="p-6 flex-grow flex flex-col">
          <p className="text-muted-foreground leading-relaxed flex-grow">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my skills in creating
            effective and beautiful user experiences.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
