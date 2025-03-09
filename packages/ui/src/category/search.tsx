import { Search } from "lucide-react"

export const SearchBox = () => {
  return (
    <div className="flex gap-2 bg-zinc-800 p-2 rounded-lg">
        <input type="text" className="bg-zinc-700 rounded-lg outline-none px-2 text-sm"/>
        <button><Search /></button>
    </div>
  )
}