import { JSX } from "react/jsx-runtime";
import { InputBox } from "./InputBox";
import { TestCasesManager } from "./TestCasesManager";

export function MetadataSection({
    metadata,
    onFiledChange,
    onTestCasesChange,
}: {
    metadata: {
        title: string;
        description: string;
        tags: string;
        testCases: {
            title: string; input: string; expected: string
        }[];
    };
    onFiledChange: (field: "title" | "description" | "tags", value: string) => void;
    onTestCasesChange: (testCases: { title: string; input: string; expected: string }[]) => void;
}): JSX.Element {
    return (
        <div className="flex flex-col gap-4 border border-gray-300 rounded p-4">
            {/*Title */}
            <div>
                <h1 className="font-bold text-gray-600">Title<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Code Snippet title"
                    value={metadata.title}
                    onChange={(e) => onFiledChange("title", e.target.value)}
                />
            </div>
            {/*Description */}
            <div>
                <h1 className="font-bold text-gray-600">Description<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Description of Code Snippet"
                    value={metadata.description}
                    onChange={(e) => onFiledChange("description", e.target.value)}
                />
            </div>
            {/*Tags */}
            <div>
                <h1 className="font-bold text-gray-600">Tags<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Tags (comma seperated)"
                    value={metadata.tags}
                    onChange={(e) => onFiledChange("tags", e.target.value)}
                />
            </div>
            {/*Test Cases */}
            <TestCasesManager
                initialTestCases={metadata.testCases}
                onChange={onTestCasesChange}
            />
        </div>
    )
}