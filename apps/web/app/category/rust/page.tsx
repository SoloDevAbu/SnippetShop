import { rustLogo } from "../../../../../packages/ui/constants/categories";
import { CategoryPage } from "@/components/category-page";

export default function CategoryTypeScript() {
    return (
        <CategoryPage 
            categoryPath="typescript" 
            logo={{ src: rustLogo.src, alt: "TypeScript" }} 
        />
    );
}