"use client"

import { Plus } from "lucide-react"
import { BellRing } from "lucide-react"
import { CircleUser } from "lucide-react";

export const Topbar = ({title}: {
    title: string
}) => {
    return(
        <div className="flex justify-between p-4 items-center border-b border-gray-800 mb-2">
            <h1 className="font-bold text-lg text-gray-300">
                {title}
            </h1>
            <div className="flex gap-4 justify-center items-center">
                <div>
                    <button className="flex gap-2 bg-green-600 rounded-md px-2 py-1">{<Plus/>}Add New</button>
                </div>
                <div>
                    <button className="bg-gray-700 rounded-full p-1.5"><BellRing/></button>
                </div>
                <div className="flex items-center">
                    <button className=" rounded-full border border-lime-600 "><CircleUser size={32}/></button>
                </div>
            </div>
            
        </div>
    )
}