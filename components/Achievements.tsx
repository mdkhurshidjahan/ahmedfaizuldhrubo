'use client';

import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Star, Trophy, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Best Session Paper Award",
      organization: "IEEE IPAS 2025",
      description: "Recognition for outstanding research contribution in medical image captioning using multimodal transformers",
      year: "2025",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Published Researcher",
      organization: "9+ Publications",
      description: "Authored and co-authored papers in prestigious conferences including IEEE IPAS, ICAIIC, and MMAR",
      year: "2024-2025",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Academic Mentor",
      organization: "200+ Projects Supervised",
      description: "Successfully guided undergraduate students through research projects and thesis work",
      year: "2022-Present",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Thesis Supervisor",
      organization: "60+ Theses Guided",
      description: "Mentored students in completing their final year projects in AI, robotics, and IoT domains",
      year: "2022-Present",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Research Excellence",
      organization: "Multiple Domains",
      description: "Demonstrated expertise across robotics, AI for healthcare, IoT innovation, and environmental technology",
      year: "2023-2025",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Impact",
      organization: "Real-world Solutions",
      description: "Developed practical AI solutions addressing healthcare, environmental monitoring, and automotive sectors",
      year: "2023-2025",
      color: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { number: "9+", label: "Publications", icon: <BookOpen className="w-6 h-6" /> },
    { number: "200+", label: "Projects Supervised", icon: <Users className="w-6 h-6" /> },
    { number: "60+", label: "Theses Guided", icon: <Target className="w-6 h-6" /> },
    { number: "5", label: "Research Areas", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-teal-50 to-gray-50 dark:from-teal-900/10 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in research, mentorship, and innovation across multiple domains
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="inline-flex p-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                  {achievement.organization}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}