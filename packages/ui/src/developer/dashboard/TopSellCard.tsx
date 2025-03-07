"use client"
import { EllipsisVertical } from "lucide-react"

export const TopSellCard = ({title, language, sells}: {
    title: string;
    language: string;
    sells: number;
}) => {
  return (
    <div className="flex bg-zinc-900 py-1.5 px-4 rounded-md text-gray-400 text-sm md:text-base">
       <div className="flex gap-1.5 items-center w-1/2 md:w-2/3">
            <input type="checkbox" style={{ width: '16px', height: '16px' }} />
            <h3 >{title}</h3>
       </div>
       <div className="flex justify-between items-center gap-4 md:gap-16 w-1/2 md:w-1/3">
            <h3>{sells}</h3>
            <h3>{language}</h3>
            <button><EllipsisVertical size={18}/></button>
       </div>
    </div>
  )
}
