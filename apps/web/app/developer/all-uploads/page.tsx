"use client"

import AllUploadCard from "@repo/ui/developer/all-upload/alluploadcard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Snippet } from "@/types/types";

export default function AllUploads() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);

    useEffect(() => {
        const allSnippets = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/developer/all-snippets", {
                    withCredentials: true
                })
                console.log("Response from server",response.data)
                setSnippets(response.data.snippets)
            } catch (error) {
                console.error("Error fetching dashboard data: ", error)
            }
        }
        allSnippets()
    }, []);
    
    return (
        <div className="h-screen">
            {snippets.length > 0 ? snippets.map((snippet) => (
            <AllUploadCard 
                key={snippet.id}
                title={snippet.title}
                language={snippet.language.extension}
                description={snippet.description}
                tags={snippet.tags}
            />
            )): (
            <div className="h-full flex justify-center items-center">
                <p className="text-3xl text-gray-400 font-bold">No snippets, Create Your First snippet</p>
            </div>
            )}
        </div>
    )
}