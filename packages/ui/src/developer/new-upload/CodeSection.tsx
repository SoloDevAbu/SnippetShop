import { JSX } from "react/jsx-runtime";
import { CodeEditor } from "./CodeEditor";
import { SupportedLanguage } from "@repo/constants/languages";

interface CodeSectionProps {
    code: string;
    onCodeChange: (code: string) => void;
    onLanguageChange: (language: SupportedLanguage) => void;
}

export function CodeSection({ code, onCodeChange, onLanguageChange }: CodeSectionProps): JSX.Element {
    return (
        <div className="border border-gray-800 rounded p-4 h-full">
            <CodeEditor code={code} onCodeChange={onCodeChange} onLanguageChange={onLanguageChange}/>
        </div>
    )
}
