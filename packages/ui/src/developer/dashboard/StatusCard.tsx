import { EllipsisVertical } from "lucide-react"

export const StatusCard = ({title, count, date, performancePercent}: {
    title: string;
    count: number;
    date: string;
    performancePercent: string;
}) => {
    return(
        <div className="flex flex-col gap-6 bg-zinc-900 rounded-md p-4">
            <div className="flex justify-between">
                <h3 className="text-sm text-gray-400">{title}</h3>
                <EllipsisVertical size={16}/>
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="font-bold text-3xl">{count}</h1>
                    <h3 className="text-gray-400 text-sm">{date}</h3>
                </div>
                <div className="bg-gray-700 px-2 py-1 rounded-xl">
                    <h3 className="text-xs text-green-400">+{performancePercent}</h3>
                </div>
            </div>
        </div>
    )
}