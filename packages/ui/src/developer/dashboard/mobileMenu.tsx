"use client"

import { createContext, useContext, useState } from "react"
import { SidebarTop } from "./sidebarTop"

const MobileMenuContext = createContext<{
    isOpen: boolean;
    toggleMenu: () => void;
}>({
    isOpen: false,
    toggleMenu: () => {}
})

export const useMobileMenu = () => useContext(MobileMenuContext)

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <MobileMenuContext.Provider value={{
            isOpen,
            toggleMenu: () => setIsOpen(prev => !prev)
        }}>
            {children}
        </MobileMenuContext.Provider>
    )
}

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, toggleMenu } = useMobileMenu()

    return (
        <>
            <aside className={`
                fixed inset-y-0 left-0 z-[100] w-72 bg-gray-900 border-r border-gray-800 
                transform transition-transform duration-300 ease-in-out lg:hidden
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <SidebarTop />
                {children}
            </aside>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-[99] lg:hidden"
                    onClick={() => toggleMenu()}
                />
            )}
        </>
    )
}
