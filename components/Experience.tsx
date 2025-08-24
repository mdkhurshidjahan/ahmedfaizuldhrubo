'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Graduate Research Assistant",
      organization: "North South University",
      period: "2023 - Present",
      description: "Leading cutting-edge research in robotics and AI, focusing on IoT frameworks, medical imaging AI, and environmental monitoring systems.",
      achievements: [
        "Published 9+ papers in top-tier conferences and journals",
        "Developed novel IoT frameworks for environmental monitoring",
        "Advanced medical AI systems for early disease detection"
      ]
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "AI Systems Developer",
      organization: "Independent Research",
      period: "2022 - Present",
      description: "Designing and implementing AI-powered solutions for healthcare, automotive pricing, and satellite image analysis.",
      achievements: [
        "Created CarKoto platform for transparent car price prediction",
        "Developed multimodal transformers for medical image captioning",
        "Built satellite image segmentation systems for urban planning"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "IoT Innovation Researcher",
      organization: "Climate Resilience Projects",
      period: "2023 - Present",
      description: "Focusing on sustainable technology solutions for climate monitoring and environmental protection.",
      achievements: [
        "Designed eco-friendly cooling systems",
        "Developed climate-resilient IoT infrastructure",
        "Created portable air quality monitoring systems"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Mentor & Supervisor",
      organization: "North South University",
      period: "2022 - Present",
      description: "Mentoring undergraduate students and supervising research projects in AI and robotics.",
      achievements: [
        "Supervised 200+ student projects",
        "Guided 60+ thesis projects to completion",
        "Received Best Session Paper award at IEEE IPAS 2025"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

              {/* Content card */}
              <div className="ml-12 md:ml-0">
                <div className="group p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">
                        {exp.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}