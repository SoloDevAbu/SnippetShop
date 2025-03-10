export const LANGUAGE_MAP = {
    JavaScript: {id: 63, extension: "js"},
    TypeScript: {id: 74, extension: "ts"},
    Python: {id: 71, extension: "py"},
} as const;

export type SupportedLanguage = keyof typeof LANGUAGE_MAP;

export const getLanguageId = (language: SupportedLanguage) => {
    console.log("getLanguageId called with:", language);
    return LANGUAGE_MAP[language].id
};

export const getLanguageById = (id: number) : {name: SupportedLanguage; extension: string} => {
    const entry = Object.entries(LANGUAGE_MAP).find(([_, value]) => value.id === id);
    if (!entry) throw new Error(`Language with id ${id} not found`);
    
    const [name, {extension}] = entry;

    return {
        name: name as SupportedLanguage,
        extension
    }
}