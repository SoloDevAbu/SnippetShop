"use client"

import { MetadataProvider, useMetadata } from "@repo/ui/developer/new-upload/MetadataContext"
import { MetadataSection } from "@repo/ui/developer/new-upload/MetadataSection";
import { CodeSection } from "../../../../../packages/ui/src/developer/new-upload/CodeSection";
import { NavBar } from "@repo/ui/developer/new-upload/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NewUpload() {
  const language_id = 63;
  const { metadata } = useMetadata();

  const [isCodeAccepted, setIsCodeAccepted] = useState(false);

  const [code, setCode] = useState("");
  
  const handleSubmit = async () => {
    const tags = metadata.tags.split(",").map(tag => tag.trim());
    if (isCodeAccepted) {
      const response = await axios.post("http://localhost:5000/api/v1/submitSnippet", {
        metadata,
        tags
      });
      console.log(response);
    } else {
      alert("Verify all test cases");
    }
  };

  const handleRun = async () => {
    const response = await axios.post("../api/runSnippet", {
      code,
      language_id,
      stdin: metadata.testCases.map(testCase => testCase.input),
      expected_output: metadata.testCases.map(testCase => testCase.expected)
    })

    const statuses = response.data.submissions.map((result: any) => result.status.description);
    const allAccepted = statuses.every((status: string) => status === "Accepted");
    setIsCodeAccepted(allAccepted);

    console.log(response.data)
    console.log("statuses: ", statuses);
  };

  return (
    <MetadataProvider>
      <div className="w-full">
        <div className="">
          <NavBar onSubmit={handleSubmit} onRun={handleRun} />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/*This is for metadata */}
          <div className="md:w-1/2">
            <MetadataSection />
          </div>
          {/*This part for code written */}
          <div className="md:w-1/2">
            <CodeSection code={code} onCodeChange={setCode} />
          </div>
        </div>
      </div>
    </MetadataProvider>
  )
}