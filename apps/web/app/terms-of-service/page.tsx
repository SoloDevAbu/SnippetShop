"use client"
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Terms of Service</h1>
      <div className="space-y-8 text-gray-300">
        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-400 leading-relaxed">
            By accessing and using SnippetShop, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Use License</h2>
          <p className="text-gray-400 leading-relaxed">
            We grant you a limited, non-exclusive, non-transferable license to download
            and use the code snippets for your personal or commercial projects.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Limitations</h2>
          <p className="text-gray-400 leading-relaxed">
            You may not redistribute, resell, or sublicense any of the code snippets
            purchased from our platform without explicit permission.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
