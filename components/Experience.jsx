import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";

const TimelineItem = ({ children, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-3.5 top-1 w-3.5 h-3.5 bg-primary rounded-full border-4 border-secondary shadow-lg z-10"></div>
      {!isLast && (
        <div className="absolute left-5 top-1 h-full w-0.5 bg-border"></div>
      )}
      {children}
    </motion.div>
  );
};

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer - UI/UX",
      company: "Solartis Technology",
      period: "May 2022 - Present",
      description:
        "Led end-to-end UI/UX design for internal and client-facing web applications, translating complex business requirements into intuitive solutions and collaborating closely with developers.",
    },
  ];

  const education = {
    degree: "Bachelor Of Information Technology",
    school: "NPR College of Engineering & Technology",
    period: "2012 - 2016",
    description:
      "Focused on software engineering, human-computer interaction, and design principles. Built strong foundations in problem-solving and user-centered development.",
  };

  return (
    <section className="py-20 bg-secondary mb-20">
      {" "}
      {/* reduced padding */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {" "}
          {/* reduced mb */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
            My Journey
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional experience and educational background.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {" "}
          {/* reduced gap */}
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Building className="w-7 h-7 text-primary" />
              Experience
            </h3>
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  isLast={index === experiences.length - 1}
                >
                  <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-1">
                        {exp.period}
                      </p>
                      <h4 className="text-lg font-bold text-card-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-base text-primary font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </TimelineItem>
              ))}
            </div>
          </div>
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-primary" />
              Education
            </h3>
            <div className="relative">
              <TimelineItem isLast={true}>
                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground mb-1">
                      {education.period}
                    </p>
                    <h4 className="text-lg font-bold text-card-foreground">
                      {education.degree}
                    </h4>
                    <p className="text-base text-primary font-semibold mb-2">
                      {education.school}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {education.description}
                    </p>
                  </CardContent>
                </Card>
              </TimelineItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
