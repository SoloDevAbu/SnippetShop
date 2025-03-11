import { CategoryPage } from "@/components/category-page";
import { tsLogo } from "../../../../../packages/ui/constants/categories";

export default function CategoryTypeScript() {
    return (
        <CategoryPage 
            categoryPath="typescript" 
            logo={{ src: tsLogo.src, alt: "TypeScript" }} 
        />
    );
}