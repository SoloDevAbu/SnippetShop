"use client"
import BarChart from "@repo/ui/developer/dashboard/barchart";
import DoughnutChart from "@repo/ui/developer/dashboard/doughnutchart";
import { StatusCard } from "@repo/ui/developer/dashboard/StatusCard";
import { TopSells } from "@repo/ui/developer/dashboard/topsells";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const count = async () => {
            const count = await axios.get("http://localhost:5000/api/v1/developer/snippetCount", {
                withCredentials: true
            });
            setCount(count.data.count)
        }
        count();
    }, [])
    
    return (
        <div className="px-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <StatusCard title="Total Snipppet" count={count} date="Jan 15 205" performancePercent="31%"/>
                <StatusCard title="Total Sells" count={103} date="Feb 01 205" performancePercent="15%"/>
                <StatusCard title="Pending Snippets" count={3} date="Feb 01 205" performancePercent="11%"/>
                <StatusCard title="Deleted Snippets" count={5} date="Feb 01 205" performancePercent="14%"/>
            </div>
            <div className="flex gap-4">
                <div className="bg-zinc-900 rounded-lg w-1/3">
                    <DoughnutChart />
                </div>
                <div className="w-2/3 bg-zinc-900 rounded-lg p-2">
                    <BarChart />
                </div>
            </div>

            <div>
                <TopSells />
            </div>
        </div>
    );
}
