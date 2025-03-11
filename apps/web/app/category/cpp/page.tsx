import { cppLogo } from "../../../../../packages/ui/constants/categories";
import { CategoryPage } from "@/components/category-page";


export default function CategoryTypeScript() {
    return (
        <CategoryPage 
            categoryPath="typescript" 
            logo={{ src: cppLogo.src, alt: "TypeScript" }} 
        />
    );
}