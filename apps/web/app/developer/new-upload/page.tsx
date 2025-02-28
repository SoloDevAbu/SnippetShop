import { MetadataSection } from "@repo/ui/developer/new-upload/MetadataSection";
import { CodeSection } from "../../../../../packages/ui/src/developer/new-upload/CodeSection";

export default function NewUpload() {
    return (
        <div className="w-full flex flex-col md:flex-row gap-8">
            {/*This is for metadata */}
            <div className="md:w-1/2">
                <MetadataSection />
            </div>
            {/*This part for code written */}
            <div className="md:w-1/2">
                <CodeSection />
            </div>
        </div>
    )
}