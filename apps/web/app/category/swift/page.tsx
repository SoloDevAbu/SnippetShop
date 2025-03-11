
import { swiftLogo } from "../../../../../packages/ui/constants/categories";
import { CategoryPage } from "@/components/category-page";

export default function CategoryTypeScript() {
    return (
        <CategoryPage 
            categoryPath="typescript" 
            logo={{ src: swiftLogo.src, alt: "TypeScript" }} 
        />
    );
}