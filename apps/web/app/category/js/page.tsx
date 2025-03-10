"use client"

import { SnippetCard } from "@repo/ui/category/snippet-card";
import { jsLogo } from "../../../../../packages/ui/src/constants/categories";
import { useEffect, useState } from "react";
import axios from "axios";
import { Snippet } from "@/types/types";

export default function CategoryJs() {

    const [snippets, setSnippets] = useState<Snippet[]>([]);

    useEffect(() => {
        const getJsSnippets = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/category/js")
                console.log(response)
                setSnippets(response.data.snippets)
            } catch (error) {
                console.error("Error fetching dashboard data: ", error)
            }
        }
        getJsSnippets();
    }, [])
    return (
        <div className="m-4 ">
            <div className="flex justify-center items-center mb-4">
                <img src={jsLogo.src} alt="JavaScript" className="size-24 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {snippets.length > 0 ? snippets.map((snippet) => (
                    <SnippetCard
                        key={snippet.id}
                        title={snippet.title}
                        language={snippet.language.extension}
                        description={snippet.description}
                        tags={snippet.tags}
                    />
                )) : (
                    <div className="h-full flex justify-center items-center">
                        <p className="text-3xl text-gray-400 font-bold">No snippets, Create Your First snippet</p>
                    </div>
                )}

            </div>
        </div>
    )
}