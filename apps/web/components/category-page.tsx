"use client"

import { SnippetCard } from "@repo/ui/category/snippet-card";
import { useCategory } from "@/hooks/useCategory";
import { useRouter } from "next/navigation";

interface CategoryPageProps {
    categoryPath: string;
    logo: {
        src: string;
        alt: string;
    };
}

export function CategoryPage({ categoryPath, logo }: CategoryPageProps) {
    const { snippets, loading, error } = useCategory(categoryPath);
    const router = useRouter();

    const showSnippetPreview = (snippetId: string) => {
        router.push(`/category/${categoryPath}/${snippetId}`);
    }

    if (loading) return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <p className="text-lg font-semibold text-gray-400">Loading...</p>
        </div>
    );

    if (error) return (
        <div className="min-h-[80vh] flex justify-center items-center">
            <p className="text-lg font-semibold text-red-400">{error}</p>
        </div>
    );
    return (
        <div className="m-4">
            <div className="flex justify-center items-center mb-4">
                <img src={logo.src} alt={logo.alt} className="size-24 rounded-full" />
            </div>
            {snippets.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {snippets.map((snippet) => (
                        <SnippetCard
                            key={snippet.id}
                            title={snippet.title}
                            language={snippet.language.extension}
                            description={snippet.description}
                            tags={snippet.tags}
                            onClick={() => showSnippetPreview(snippet.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="min-h-[400px] flex justify-center items-center">
                    <p className="text-3xl text-gray-400 font-bold">No snippets available</p>
                </div>
            )}
        </div>
    );
}