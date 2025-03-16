"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export const SidebarItem = ({ href, title, icon }: {
    href: string;
    title: string;
    icon: React.ReactNode;
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div 
            className={`flex items-start gap-3 cursor-pointer px-3 py-2.5 rounded-lg transition-all duration-200
            ${selected 
                ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white shadow-lg border border-indigo-500/20" 
                : "hover:bg-gray-800/40 text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => router.push(href)}
        >
            <div className={`${selected ? "text-indigo-400" : "text-gray-500"}`}>
                {icon}
            </div>
            <div className="font-medium">
                {title}
            </div>
        </div>
    )
}