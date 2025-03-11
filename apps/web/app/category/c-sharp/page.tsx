"use client"

import { CategoryPage } from "@/components/category-page";
import { cSharpLogo } from "../../../../../packages/ui/constants/categories";

export default function CategoryTypeScript() {
    return (
        <CategoryPage 
            categoryPath="typescript" 
            logo={{ src: cSharpLogo.src, alt: "C-Sharp" }} 
        />
    );
}