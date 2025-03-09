import { SearchBox } from "./search"

export const TopBar = () => {
    return (
        <div className="flex justify-between items-center fixed top-2 left-2 right-2 bg-zinc-900 p-4 rounded-lg">
            <h1 className="text-lg font-semibold text-gray-300">SnippetShop</h1>
            <div>
                <SearchBox />
            </div>
        </div>
    )
}