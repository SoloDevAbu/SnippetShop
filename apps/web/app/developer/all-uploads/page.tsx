"use client"

import AllUploadCard from "@repo/ui/developer/all-upload/alluploadcard";
import axios from "axios";
import { useEffect, useState } from "react";

interface SnippetData {
    title: string;
    description: string
}

export default function AllUploads() {
    const [data, setData] = useState<SnippetData>({
        title: "",
        description: ""
    })

    useEffect(() => {
        const allSnippets = async () => {
            const response = await axios.get("http://localhost:5000/api/v1/developer/all-snippets", {
                withCredentials: true
            })
            console.log("Response from server",response)
        }
        allSnippets()
    }, []);
    
    return (
        <div>
            <AllUploadCard title="First" description="hi there"/>
            
        </div>
    )
}