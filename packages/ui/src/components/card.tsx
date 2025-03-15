"use client"
import { JSX } from "react/jsx-runtime";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function Card({
    title,
    image,
    onClick,
    category,
}: {
    title: string,
    image: string | StaticImageData,
    onClick?: () => void,
    category: string,
}): JSX.Element {
    const router = useRouter();
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-4 px-6 py-4 shadow-lg shadow-purple-500/5 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-purple-500/10"
        >
            <button onClick={() => router.push(`/category/${category}`)} className="focus:outline-none relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={typeof image === 'string' ? image: image.src} alt={title} 
                className="h-16 w-16 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
            </button>
            <h1 className="font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">{title}</h1>
        </motion.div>
    )
}