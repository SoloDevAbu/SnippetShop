"use client"
import { motion } from "framer-motion";
import { Star, ArrowRight, Code2, Eye } from 'lucide-react'

export const FeaturedSection = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20"
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 flex items-center gap-2">
                    Featured Snippets
                    <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-400">New</span>
                </h2>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    View all <ArrowRight className="h-4 w-4" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="text-yellow-500 h-5 w-5" />
                            <span className="text-gray-400 text-sm">Featured</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-300 mb-2 group-hover:text-purple-400 transition-colors duration-300">Animated Navigation Menu</h3>
                        <p className="text-gray-400 mb-4">A responsive and animated navigation menu with smooth transitions.</p>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">$9.99</span>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-xs text-gray-300">React</span>
                                <span className="px-3 py-1 bg-zinc-700/50 rounded-full text-xs text-gray-300">TypeScript</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    <Code2 className="h-4 w-4" /> Preview
                                </button>
                                <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    <Eye className="h-4 w-4" /> Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
