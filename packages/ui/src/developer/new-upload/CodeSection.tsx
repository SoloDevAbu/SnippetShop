import { JSX } from "react/jsx-runtime";
import { CodeEditor } from "./CodeEditor";

interface CodeSectionProps {
    code: string;
    onCodeChange: (code: string) => void;
}

export function CodeSection({ code, onCodeChange }: CodeSectionProps): JSX.Element {
    return (
        <div className="border border-gray-300 rounded p-4 h-full">
            <CodeEditor code={code} onCodeChange={onCodeChange}/>
        </div>
    )
}
