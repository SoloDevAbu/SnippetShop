"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { darcula } from "@uiw/codemirror-theme-darcula";
import prettier from "prettier";
import { Text } from "lucide-react";
import { python } from "@codemirror/lang-python";
import { LANGUAGE_MAP, SupportedLanguage } from "@repo/constants/languages"

const languageExtensions = {
    JavaScript: javascript(),
    TypeScript: javascript({ typescript: true }),
    Python: python(),
};

interface CodeEditorProps {
    code: string;
    onCodeChange: (code: string) => void;
    onLanguageChange: (language: SupportedLanguage) => void;
  }

export function CodeEditor({ code, onCodeChange, onLanguageChange}:  CodeEditorProps) {

    const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>("JavaScript");
    
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = e.target.value as SupportedLanguage;
        setSelectedLanguage(newLanguage);
        onLanguageChange(newLanguage)
    };

    const handleFormat = async () => {
       
        try {
            const formattedCode = await prettier.format(code, {
              parser: selectedLanguage === "Python" ? 'python' : 'babel',
              plugins: [],
            });
            onCodeChange(formattedCode);
          } catch (error) {
            console.error("Error formatting code:", error);
            alert("Failed to format code. Check syntax.");
          }

    };

    return (
        <div className="h-full w-full">
            <div className="mb-4 flex justify-between items-center">
                <div>
                    <label className="mr-2">Language:</label>
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="p-2 border border-gray-700 rounded"
                    >
                        {Object.keys(LANGUAGE_MAP).map((lang) => (
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
            <div className="h-full w-full">
                <CodeMirror
                    value={code}
                    extensions={[languageExtensions[selectedLanguage], darcula]}
                    onChange={onCodeChange}
                    className="h-[calc(100%-60px)]"
                    theme="dark"
                    minHeight="520px"
                    basicSetup={{
                        highlightActiveLine: true,
                        highlightActiveLineGutter: true,
                    }}
                />
            </div>

        </div>
    );
}
