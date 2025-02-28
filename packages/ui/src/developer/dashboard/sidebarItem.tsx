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
        <div className={`flex items-start gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-100 ${selected && "bg-gray-200 shadow-sm shadow-gray-500"} font-semibold`} onClick={() => router.push(href)}>
            <div className="pr-2">
                {icon}
            </div>
            <div className={`font-bold ${selected ? "text-[#6a51a6]" : "text-slate-500"}`}>
                {title}
            </div>
        </div>
    )
}