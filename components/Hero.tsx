'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create neural network particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(20, 184, 166, ${0.1 * (1 - distance / 100)})`;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-space-grotesk font-bold bg-gradient-to-r from-gray-900 via-teal-600 to-blue-600 dark:from-white dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ahmed Faizul Haque Dhrubo
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Robotics & AI Researcher | IoT Innovator | Machine Learning Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Advancing the frontiers of artificial intelligence and robotics through innovative research and sustainable technology solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button
              onClick={scrollToNext}
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View Research
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
            </button>
            
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-teal-500 text-teal-600 dark:text-teal-400 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Connect with Me
              <Mail className="inline-block ml-2 w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {[
              { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=qt9Wg-YAAAAJ' },
              { name: 'ResearchGate', url: '#' },
              { name: 'LinkedIn', url: '#' },
              { name: 'Email', url: 'mailto:ahmed.dhrubo@example.com' }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-teal-500/20 hover:border-teal-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-teal-500" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </section>
  );
}