"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const LatestSnippets = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20"
        >
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-300">Latest Snippets</h2>
                <div className="flex gap-2">
                    <button onClick={() => scroll("left")} className="p-2 rounded-full bg-zinc-800 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => scroll("right")} className="p-2 rounded-full bg-zinc-800 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {[1, 2, 3, 4, 5].map((item) => (
                    <motion.div
                        key={item}
                        whileHover={{ scale: 1.02 }}
                        className="min-w-[300px] snap-center bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50"
                    >
                        <div className="aspect-video bg-zinc-700/50 rounded-lg mb-4" />
                        <h3 className="text-lg font-semibold text-gray-300">Modern Button Component</h3>
                        <p className="text-gray-400 text-sm mt-2">Customizable button with hover effects</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};
