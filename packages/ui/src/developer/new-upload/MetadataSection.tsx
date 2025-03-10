import { InputBox } from "./InputBox";
import { TestCasesManager } from "./TestCasesManager";
import { useMetadata } from "./MetadataContext";

export function MetadataSection() {

    const { metadata, setMetadata } = useMetadata();

    const handleFieldChange = (field: "title" | "description" | "tags", value: string) => {
        setMetadata((prev) => ({ ...prev, [field]: value }))
    }
    return (
        <div className="flex flex-col gap-4 border border-gray-800 rounded p-4">
            {/*Title */}
            <div>
                <h1 className="font-bold text-gray-300">Title<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Code Snippet title"
                    value={metadata.title}
                    onChange={(e) => handleFieldChange("title", e.target.value)}
                />
            </div>
            {/*Description */}
            <div>
                <h1 className="font-bold text-gray-300">Description<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Description of Code Snippet"
                    value={metadata.description}
                    onChange={(e) => handleFieldChange("description", e.target.value)}
                />
            </div>
            {/*Tags */}
            <div>
                <h1 className="font-bold text-gray-300">Tags<span className="text-red-500">*</span></h1>
                <InputBox
                    title="Tags (comma seperated)"
                    value={metadata.tags}
                    onChange={(e) => handleFieldChange("tags", e.target.value)}
                />
            </div>
            {/*Test Cases */}
            <TestCasesManager />
        </div>
    )
}