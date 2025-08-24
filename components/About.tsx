'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Brain, Cpu, Leaf, Scale, Heart } from 'lucide-react';

export default function About() {
  const researchAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Robotics & AI",
      description: "Advanced robotic systems and artificial intelligence algorithms"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "AI for Healthcare",
      description: "Medical imaging, diagnosis, and healthcare automation systems"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT Innovation",
      description: "Smart sensor networks and environmental monitoring systems"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "NLP for Law",
      description: "Natural language processing applications in legal technology"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental AI",
      description: "AI solutions for climate monitoring and sustainability"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Research",
      description: "Publication and collaboration in top-tier conferences"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/10 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img
                  src="/profile.jpg"
                  alt="Ahmed Faizul Haque Dhrubo"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I am a dedicated Robotics & AI Researcher pursuing my B.Sc. in Computer Science & Engineering 
                with a specialization in Robotics & Artificial Intelligence at North South University, Bangladesh.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My research spans multiple cutting-edge domains, from developing IoT frameworks for environmental 
                monitoring to advancing medical AI systems for early disease detection. I am passionate about 
                creating technology solutions that address real-world challenges in healthcare, environmental 
                sustainability, and smart systems.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                With publications in prestigious conferences like IEEE IPAS, ICAIIC, and MMAR, I am committed 
                to pushing the boundaries of what's possible in robotics and artificial intelligence.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-space-grotesk font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      B.Sc. in Computer Science & Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Robotics & Artificial Intelligence • North South University, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-space-grotesk font-bold text-center text-gray-900 dark:text-white mb-12">
            Research Areas
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}