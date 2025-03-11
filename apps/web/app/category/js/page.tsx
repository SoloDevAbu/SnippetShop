"use client"
import { CategoryPage } from "@/components/category-page";
import { jsLogo } from "../../../../../packages/ui/constants/categories";

export default function CategoryJs() {
    return (
        <CategoryPage 
            categoryPath="js" 
            logo={{ src: jsLogo.src, alt: "JavaScript" }} 
        />
    );
}