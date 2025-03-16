"use client"

import { useMetadata } from "@repo/ui/developer/new-upload/MetadataContext"
import { MetadataSection } from "@repo/ui/developer/new-upload/MetadataSection";
import { CodeSection } from "../../../../../packages/ui/src/developer/new-upload/CodeSection";
import { NavBar } from "@repo/ui/developer/new-upload/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLanguageId, SupportedLanguage } from "@repo/constants/languages";

export default function NewUpload() {
  const { metadata } = useMetadata();
  const [isCodeAccepted, setIsCodeAccepted] = useState(false);
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>("JavaScript");

  const handleSubmit = async () => {
    const tags = metadata.tags.split(",").map(tag => tag.trim());
    const languageId = getLanguageId(selectedLanguage) ?? 63;

    
    if (isCodeAccepted) {
      const response = await axios.post("http://localhost:5000/api/v1/developer/submitSnippet", {
        metadata,
        tags,
        languageId,
      }, {
        withCredentials: true
      });
      console.log(response);
    } else {
      alert("Verify all test cases");
    }
  };

  const handleRun = async () => {
    console.log(metadata)
    const response = await axios.post("../api/runSnippet", {
      code,
      language_id: getLanguageId(selectedLanguage),
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
      <div className="w-full h-screen flex flex-col">
        <div className="">
          <NavBar onSubmit={handleSubmit} onRun={handleRun} />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 h-full p-4">
          {/*This is for metadata */}
          <div className="md:w-1/2 h-[calc(100vh-5rem)]">
            <MetadataSection />
          </div>
          {/*This part for code written */}
          <div className="md:w-1/2 h-[calc(100vh-5rem)]">
            <CodeSection code={code} onCodeChange={setCode} onLanguageChange={setSelectedLanguage}/>
          </div>
        </div>
      </div>
  )
}