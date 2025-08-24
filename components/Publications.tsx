'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Users, BookOpen, Filter, Search } from 'lucide-react';
import publicationsData from '@/data/publications.json';

type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'preprint';
  link: string;
  thumbnail: string;
  abstract: string;
  tags: string[];
};

export default function Publications() {
  const [filter, setFilter] = useState<'all' | 'conference' | 'journal' | 'preprint'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const publications = publicationsData as Publication[];

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = filter === 'all' || pub.type === filter;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const typeColors = {
    conference: 'from-blue-500 to-purple-500',
    journal: 'from-green-500 to-teal-500',
    preprint: 'from-orange-500 to-red-500'
  };

  const typeLabels = {
    conference: 'Conference',
    journal: 'Journal',
    preprint: 'Preprint'
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gray-900 dark:text-white mb-6">
            Research & Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my research contributions spanning robotics, AI, healthcare technology, and environmental monitoring
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full p-1 border border-white/20 dark:border-gray-700/20">
                {(['all', 'conference', 'journal', 'preprint'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === type
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-96"
              >
                <div
                  className="relative w-full h-full preserve-3d cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === pub.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s'
                  }}
                  onClick={() => setFlippedCard(flippedCard === pub.id ? null : pub.id)}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 backface-hidden w-full h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${typeColors[pub.type]}`}>
                            {typeLabels[pub.type]}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {pub.year}
                          </span>
                        </div>

                        <img
                          src={pub.thumbnail}
                          alt={pub.title}
                          className="w-full h-32 object-cover rounded-lg mb-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-32 rounded-lg mb-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center';
                              placeholder.innerHTML = '<BookOpen class="w-8 h-8 text-gray-500" />';
                              parent.insertBefore(placeholder, target);
                            }
                          }}
                        />

                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight mb-3 line-clamp-3">
                          {pub.title}
                        </h3>

                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="truncate">{pub.authors}</span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                          {pub.venue}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {pub.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 backface-hidden w-full h-full"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 flex flex-col">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight mb-4">
                        Abstract
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                        {pub.abstract}
                      </p>

                      <div className="space-y-3">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Paper
                        </a>
                        
                        <div className="flex flex-wrap gap-1">
                          {pub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No publications found matching your criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}