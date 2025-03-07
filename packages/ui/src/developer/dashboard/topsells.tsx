"use client"
import { Settings2 } from "lucide-react"
import { TopSellCard } from "./TopSellCard"
import { Trash2 } from "lucide-react"

export const TopSells = () => {
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
                    <TopSellCard title="Reverse LinkList" language="C++" sells={16} />
                    <TopSellCard title="Reverse LinkList" language="JavaScript" sells={64} />
                    <TopSellCard title="Reverse LinkList" language="Python" sells={47} />
                    <TopSellCard title="Reverse LinkList" language="C#" sells={22} />
                    <TopSellCard title="Reverse LinkList" language="C" sells={8} />
                    <TopSellCard title="Reverse LinkList" language="Java" sells={36} />
                </div>
            </div>
        </div>
    )
}