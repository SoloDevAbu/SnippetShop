"use client"
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      <h1 className="text-4xl font-bold text-purple-400 mb-8">Privacy Policy</h1>
      <div className="space-y-8 text-gray-300">
        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Information We Collect</h2>
          <p className="text-gray-400 leading-relaxed">
            We collect information you provide directly to us when you create an account, make a purchase, or contact us for support.
            This may include your name, email address, and payment information.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">How We Use Your Information</h2>
          <p className="text-gray-400 leading-relaxed">
            We use the information we collect to provide and improve our services, process your transactions,
            and communicate with you about your account and updates to our services.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-lg border border-zinc-800/50">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Data Security</h2>
          <p className="text-gray-400 leading-relaxed">
            We implement appropriate security measures to protect your personal information
            and maintain the safety of your data on our platform.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
