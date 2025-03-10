"use client"
import { Settings2 } from "lucide-react"
import { TopSellCard } from "./TopSellCard"
import { Trash2 } from "lucide-react"

interface Snippet {
    id: string;
    title: string;
    language: {
        name: string
    }
}

export const TopSells = ({snippetInfo}:{ snippetInfo: Snippet[]}) => {
    return (
        <div className="bg-zinc-900 rounded-lg p-4">
            <div className="flex justify-between">
                <h1 className="text-gray-400 font-bold">Snippet Performances</h1>
                <div className="flex gap-2 items-center">
                    <button className=" bg-gray-800 px-2 py-2 rounded-full  text-sm text-gray-400 shadow-sm shadow-gray-200"><Trash2 /></button>
                    <button className="flex gap-1 bg-gray-800 px-3 py-2 rounded-3xl  text-sm text-gray-400 shadow-sm shadow-gray-200"><Settings2 size={18} />Filter</button>
                </div>
            </div>
            <div className="mt-6  bg-zinc-800 px-4 rounded-lg pb-4">
                <div className="flex bg-zinc-800 py-1.5 px-4 rounded-md text-gray-400 font-semibold text-sm md:text-base">
                    <div className="w-1/2 md:w-2/3">
                        <h3 >Title</h3>
                    </div>
                    <div className="flex justify-between items-center gap-4 md:gap-16 w-1/2 md:w-1/3">
                        <h3>Sells</h3>
                        <h3>Language</h3>
                        <h3>Actions</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {snippetInfo.map((snippet) => (
                        <TopSellCard 
                            key={snippet.id}
                            title={snippet.title}
                            language={snippet.language.name}
                            sells={16}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}