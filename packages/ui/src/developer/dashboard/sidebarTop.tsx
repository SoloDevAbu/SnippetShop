import { CodeXml } from "lucide-react"

export const SidebarTop = () => {
    return(
        <div className=" flex gap-3 p-3.5 border-b border-gray-800 mb-4 items-center">
            <div className="bg-gray-800 rounded-full p-2">
                <CodeXml />
            </div>
            <h1 className="text-xl font-bold ">SnippetShop</h1>
        </div>
    )
}