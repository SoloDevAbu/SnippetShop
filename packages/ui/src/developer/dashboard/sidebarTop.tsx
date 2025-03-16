import { CodeXml } from "lucide-react"

export const SidebarTop = () => {
    return(
        <div className="flex gap-3 p-4 md:p-5 border-b border-gray-800/40 mb-6 items-center bg-gradient-to-r from-gray-900/90 to-gray-800/50 backdrop-blur-xl">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-2.5 shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
                <CodeXml className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SnippetShop
            </h1>
        </div>
    )
}