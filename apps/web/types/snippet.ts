export interface Tag {
    tag: {
        name: string;
    }
}

export interface Snippet {
    id: string;
    title: string;
    description: string;
    language: {
        name: string;
        extension: string;
    };
    tags: Tag[];
}