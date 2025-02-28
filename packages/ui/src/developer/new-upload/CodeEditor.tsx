"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { darcula } from "@uiw/codemirror-theme-darcula";
import prettier from "prettier";
import { Text } from "lucide-react";

const supportedLanguages = ["JavaScript", "TypeScript"];
const languageMap = {
    "JavaScript": javascript(),
    "TypeScript": javascript({ typescript: true }),
};
const parserMap: { [key: string]: prettier.BuiltInParserName } = {
    "JavaScript": "babel",
    "TypeScript": "typescript",
};

export function CodeEditor() {
    const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof parserMap>("JavaScript");
    const [code, setCode] = useState("");

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
    };

    const handleFormat = () => {
        const parser = parserMap[selectedLanguage];
        prettier.format(code, { parser }).then((formattedCode) => {
            setCode(formattedCode);
        }).catch((error) => {
            console.error("Error formatting code:", error);
            alert("Failed to format code. Check syntax.");
        });

    };

    const languageExtension = languageMap[selectedLanguage as keyof typeof languageMap];

    return (
        <div className="h-full w-full">
            <div className="mb-4 flex justify-between items-center">
                <div>
                    <label className="mr-2">Language:</label>
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="p-2 border rounded"
                    >
                        {supportedLanguages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button onClick={handleFormat}>
                        <Text />
                    </button>
                </div>
            </div>
            <CodeMirror
                value={code}
                extensions={[languageExtension, darcula]}
                onChange={(value) => setCode(value)}
                className="h-[calc(100%-60px)]"
            />

        </div>
    );
}
