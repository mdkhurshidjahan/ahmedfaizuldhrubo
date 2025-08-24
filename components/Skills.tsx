'use client';

import { motion } from 'framer-motion';
import { 
  Brain, Code2, Database, Cpu, Camera, BarChart3, 
  Cloud, GitBranch, Terminal, Layers, Zap, Settings
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "OpenCV", level: 90 },
        { name: "Transformers", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "MATLAB", level: 75 },
        { name: "R", level: 70 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "STM32", level: 90 },
        { name: "Arduino", level: 95 },
        { name: "Raspberry Pi", level: 85 },
        { name: "ESP32", level: 80 },
        { name: "PCB Design", level: 75 }
      ]
    },
    {
      title: "Data & Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 95 }
      ]
    },
    {
      title: "Computer Vision",
      icon: <Camera className="w-8 h-8" />,
      skills: [
        { name: "Image Processing", level: 90 },
        { name: "Object Detection", level: 85 },
        { name: "Medical Imaging", level: 80 },
        { name: "Satellite Imagery", level: 75 },
        { name: "CNN Architectures", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "LaTeX", level: 85 },
        { name: "Jupyter", level: 95 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  const tools = [
    { name: "PyTorch", icon: <Zap className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { name: "TensorFlow", icon: <Brain className="w-6 h-6" />, color: "from-orange-400 to-yellow-400" },
    { name: "STM32", icon: <Cpu className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { name: "Arduino", icon: <Cpu className="w-6 h-6" />, color: "from-teal-500 to-green-500" },
    { name: "OpenCV", icon: <Camera className="w-6 h-6" />, color: "from-green-500 to-blue-500" },
    { name: "Python", icon: <Code2 className="w-6 h-6" />, color: "from-yellow-400 to-blue-500" },
    { name: "Docker", icon: <Layers className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
    { name: "Git", icon: <GitBranch className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "from-blue-600 to-purple-600" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { name: "Jupyter", icon: <Terminal className="w-6 h-6" />, color: "from-orange-400 to-orange-500" },
    { name: "LaTeX", icon: <BarChart3 className="w-6 h-6" />, color: "from-gray-600 to-gray-700" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-teal-50 dark:from-gray-900 dark:to-teal-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI research, IoT development, and cutting-edge technology solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-8">
            Technology Stack
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${tool.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tool.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {tool.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}