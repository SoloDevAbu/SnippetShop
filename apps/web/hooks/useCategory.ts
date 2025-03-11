import { useState, useEffect } from "react";
import axios from "axios";
import { Snippet } from "@/types/snippet";

const BASE_URL = 'http://localhost:5000/api/v1/category';

export function useCategory(categoryPath: string) {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BASE_URL}/${categoryPath}`);
                setSnippets(response.data.snippets);
            } catch (error) {
                console.error(`Error fetching ${categoryPath} snippets:`, error);
                setError('Failed to fetch snippets');
            } finally {
                setLoading(false);
            }
        };
        fetchSnippets();
    }, [categoryPath]);

    return { snippets, loading, error };
}