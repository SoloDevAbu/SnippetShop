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
        <div className={`flex items-start gap-2 cursor-pointer px-2 py-2 rounded-md hover:bg-zinc-900 ${selected && "bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-sm"} font-semibold`} onClick={() => router.push(href)}>
            <div className="pr-2">
            {icon}
            </div>
            <div className={`font-bold ${selected ? "text-[#ebebeb]" : "text-[#b9b9b9]"}`}>
            {title}
            </div>
        </div>
    )
}