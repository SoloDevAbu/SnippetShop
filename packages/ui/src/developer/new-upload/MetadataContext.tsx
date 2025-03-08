"use client"

import { createContext, useContext, useState } from "react"

interface Metadata {
    title: string;
    description: string;
    tags: string;
    testCases: {
        title: string;
        input: string;
        expected: string;
    }[];
}

interface MetadataContextType {
    metadata: Metadata;
    setMetadata: React.Dispatch<React.SetStateAction<Metadata>>;
}

const MetadataContext = createContext<MetadataContextType | undefined>(undefined);

export function useMetadata() {
    const context = useContext(MetadataContext);
    if(!context) {
        throw new Error("useMetadata Must be used within MetadatProvider");
    }

    return context;
}

export function MetadataProvider({ children}: {children: React.ReactNode}) {
    const [metadata, setMetadata] = useState<Metadata>({
        title: "",
        description: "",
        tags: "",
        testCases: [
            {title: "Test1", input: "", expected: ""},
            {title: "Test2", input: "", expected: ""},
            {title: "Test3", input: "", expected: ""},
        ]
    });

    return (
        <MetadataContext.Provider value={{metadata, setMetadata}}>
            {children}
        </MetadataContext.Provider>
    )
}