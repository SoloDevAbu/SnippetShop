"use client"
import BarChart from "@repo/ui/developer/dashboard/barchart";
import DoughnutChart from "@repo/ui/developer/dashboard/doughnutchart";
import { StatusCard } from "@repo/ui/developer/dashboard/StatusCard";
import { TopSells } from "@repo/ui/developer/dashboard/topsells";
import axios from "axios";
import { useEffect, useState } from "react";

interface SnippetInfo {
    id: string;
    title: string;
    language: {
        name: string;
    }
}

interface DashboardData {
    allSnippets: number;
    pendingSnippets: number;
    approvedSnippets: number;
    snippets: SnippetInfo[]
}

export default function DashboardPage() {

    const [ dashboardData, setDashboardData ] = useState<DashboardData>({
        allSnippets: 0,
        pendingSnippets: 0,
        approvedSnippets: 0,
        snippets: []
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/developer/snippet-status", {
                    withCredentials: true
                })
                console.log("Response from server",response.data)
               
                setDashboardData(response.data)
            } catch (error) {
                console.error("Error fetching dashboard data: ", error)
            }
        }
        fetchDashboardData();
    }, [])
    
    return (
        <div className="px-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <StatusCard title="Total Snipppet" count={dashboardData.allSnippets} date="Jan 15 205" performancePercent="31%"/>
                <StatusCard title="Total Sells" count={0} date="Feb 01 205" performancePercent="15%"/>
                <StatusCard title="Approved Snippets" count={dashboardData.approvedSnippets} date="Feb 01 205" performancePercent="14%"/>
                <StatusCard title="Pending Snippets" count={dashboardData.pendingSnippets} date="Feb 01 205" performancePercent="11%"/>
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
                <TopSells snippetInfo={dashboardData.snippets}/>
            </div>
        </div>
    );
}
