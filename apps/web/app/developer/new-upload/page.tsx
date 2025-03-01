"use client"

import { MetadataSection } from "@repo/ui/developer/new-upload/MetadataSection";
import { CodeSection } from "../../../../../packages/ui/src/developer/new-upload/CodeSection";
import { NavBar } from "@repo/ui/developer/new-upload/NavBar";
import { useState, useEffect } from "react";

export default function NewUpload() {

    const [metadata, setMetadata] = useState({
        title: "",
        description: "",
        tags: "",
        testCases: [
            {title: "Test1", input: "", expected: ""},
            {title: "Test2", input: "", expected: ""},
            {title: "Test3", input: "", expected: ""},
        ],
    });

    useEffect(() => {
        console.log("Metadata changed:", metadata);
    }, [metadata]);

    const handleFieldChange = (field: "title" | "description" | "tags", value: string) => {
        setMetadata((prev) => ({...prev, [field]: value}))
    };

    const handleTestCasesChange = (testCases: typeof metadata.testCases) => {
        setMetadata((prev) => ({...prev, testCases}))
    };

    const handleSubmit = async () => {
        // Use Next.js API routes or server actions
        const res = await fetch("/api/submitSnippet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(metadata),
        });
        // Handle response
        if (res.ok) {
          alert("Snippet submitted!");
        } else {
          alert("Submission failed.");
        }
      };
    
      const handleRun = async () => {
        // Run the snippet code, perhaps sending both metadata and code to an API endpoint
        const res = await fetch("/api/runSnippet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(metadata),
        });
        // Handle response
        if (res.ok) {
          const result = await res.json();
          alert("Run Successful: " + result.output);
        } else {
          alert("Run failed.");
        }
      };

    return (
        <div className="w-full">
            <div className="">
            <NavBar onSubmit={handleSubmit} onRun={handleRun} />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-8">
                {/*This is for metadata */}
                <div className="md:w-1/2">
                    <MetadataSection 
                        metadata={metadata}
                        onFiledChange={handleFieldChange}
                        onTestCasesChange={handleTestCasesChange}
                    />
                </div>
                {/*This part for code written */}
                <div className="md:w-1/2">
                    <CodeSection />
                </div>
            </div>
        </div>
    )
}