import { InputBox } from "./InputBox";
import { TestCasesManager } from "./TestCasesManager";
import { useMetadata } from "./MetadataContext";

export function MetadataSection() {

    const { metadata, setMetadata } = useMetadata();

    const handleFieldChange = (field: "title" | "description" | "tags", value: string) => {
        setMetadata((prev) => ({ ...prev, [field]: value }))
    }
    return (
        <div className="flex flex-col gap-6 border border-gray-800/50 bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 h-full overflow-y-auto">
            {/*Title */}
            <div>
                <h1 className="font-bold text-gray-200 mb-2 px-3">Title<span className="text-rose-500 ml-1">*</span></h1>
                <InputBox
                    title="Code Snippet title"
                    value={metadata.title}
                    onChange={(e) => handleFieldChange("title", e.target.value)}
                />
            </div>
            {/*Description */}
            <div>
                <h1 className="font-bold text-gray-200 mb-2 px-3">Description<span className="text-rose-500 ml-1">*</span></h1>
                <InputBox
                    title="Description of Code Snippet"
                    value={metadata.description}
                    onChange={(e) => handleFieldChange("description", e.target.value)}
                />
            </div>
            {/*Tags */}
            <div>
                <h1 className="font-bold text-gray-200 mb-2 px-3">Tags<span className="text-rose-500 ml-1">*</span></h1>
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