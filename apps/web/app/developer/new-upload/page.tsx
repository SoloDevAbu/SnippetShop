import { MetadataSection } from "@repo/ui/developer/new-upload/MetadataSection";

export default function NewUpload() {
    return (
        <div className="w-full flex flex-col gap-8 md:block">
            {/*This is for metadata */}
            <div className="md:w-1/2">
                <MetadataSection />
            </div>
            {/*This part for code written */}
            <div className="md:w-1/2">

            </div>
        </div>
    )
}