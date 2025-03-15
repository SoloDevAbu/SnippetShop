"use client"
import { motion } from "framer-motion";
import { Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-zinc-800/50 bg-zinc-900/50 backdrop-blur-lg"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-purple-400 font-semibold mb-4">SnippetShop</h3>
                        <p className="text-gray-400 text-sm">Premium code snippets for developers to build better applications faster.</p>
                    </div>
                    <div>
                        <h4 className="text-gray-300 font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Featured", href: "/featured" },
                                { name: "Categories", href: "/categories" },
                                { name: "Latest", href: "/latest" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-300 font-medium mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Privacy Policy", href: "/privacy-policy" },
                                { name: "Terms of Service", href: "/terms-of-service" },
                                { name: "License", href: "/license" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-300 font-medium mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {[Github, Twitter, Instagram].map((Icon, index) => (
                                <a key={index} href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-zinc-800/50 text-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SnippetShop. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
};
