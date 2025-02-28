import { JSX } from "react/jsx-runtime";
import { CodeEditor } from "./CodeEditor";

export function CodeSection(): JSX.Element {
    return (
        <div className="border border-gray-300 rounded p-4 h-full">
            <CodeEditor />
        </div>
    )
}
