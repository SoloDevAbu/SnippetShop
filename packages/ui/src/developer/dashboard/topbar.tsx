"use client"

import { Plus, BellRing, CircleUser, Menu } from "lucide-react"
import { useRouter } from "next/navigation";
import { useMobileMenu } from "./mobileMenu";

export const Topbar = ({
    title,
    showMenuButton = false
}: {
    title: string;
    showMenuButton?: boolean;
}) => {
    const router = useRouter()
    const { toggleMenu } = useMobileMenu()

    return(
        <div className="flex justify-between p-4 md:p-5 items-center border-b border-gray-800/40 backdrop-blur-xl bg-gray-900/80 relative z-50">
            <div className="flex items-center gap-4">
                {showMenuButton && (
                    <button 
                        onClick={toggleMenu}
                        className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                )}
                <h1 className="font-bold text-lg md:text-xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {title}
                </h1>
            </div>
            <div className="flex gap-3 md:gap-5 justify-center items-center">
                <button 
                    className="flex gap-2 items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 
                    rounded-lg px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium transition-all duration-200 
                    shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:scale-105"
                    onClick={() => router.push("/developer/new-upload")}
                >
                    <Plus size={16} className="md:w-4 md:h-4"/>
                    <span className="hidden sm:inline">Add New</span>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-2 md:p-2.5 transition-all duration-200 
                    shadow-lg shadow-black/20 hover:shadow-black/30 hover:scale-105">
                    <BellRing className="w-4 h-4 md:w-5 md:h-5"/>
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 rounded-lg p-1.5 md:p-2 transition-all duration-200 
                    shadow-lg shadow-black/20 hover:shadow-black/30 hover:scale-105 ring-1 ring-white/10">
                    <CircleUser className="w-5 h-5 md:w-6 md:h-6"/>
                </button>
            </div>
        </div>
    )
}