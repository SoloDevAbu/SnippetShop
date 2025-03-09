import { SnippetCard } from "@repo/ui/category/snippet-card";
import { swiftLogo } from "../../../../../packages/ui/src/constants/categories";

export default function CategorySwift() {
    return (
            <div className="m-4 ">
                <div className="flex justify-center items-center mb-4">
                    <img src={swiftLogo.src} alt="Swift" className="size-24 rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <SnippetCard />
                    <SnippetCard />
                    <SnippetCard />
                    <SnippetCard />
                    <SnippetCard />
                </div>
            </div>
        )
}