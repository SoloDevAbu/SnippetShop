"use client"

import { SnippetCard } from "@repo/ui/category/snippet-card";
import { useCategory } from "@/hooks/useCategory";

interface CategoryPageProps {
    categoryPath: string;
    logo: {
        src: string;
        alt: string;
    };
}

export function CategoryPage({ categoryPath, logo }: CategoryPageProps) {
    const { snippets, loading, error } = useCategory(categoryPath);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="m-4">
            <div className="flex justify-center items-center mb-4">
                <img src={logo.src} alt={logo.alt} className="size-24 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {snippets.length > 0 ? snippets.map((snippet) => (
                    <SnippetCard
                        key={snippet.id}
                        title={snippet.title}
                        language={snippet.language.extension}
                        description={snippet.description}
                        tags={snippet.tags}
                    />
                )) : (
                    <div className="h-full flex justify-center items-center">
                        <p className="text-3xl text-gray-400 font-bold">No snippets, Create Your First snippet</p>
                    </div>
                )}
            </div>
        </div>
    );
}