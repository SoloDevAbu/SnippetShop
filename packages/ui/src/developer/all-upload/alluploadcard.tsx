"use clinet"
import { EllipsisVertical } from "lucide-react"
import { EditSnippetButton } from "./editsnippetbutton"

const AllUploadCard = () => {
  return (
    <div className="flex gap-3 bg-zinc-900 p-3.5 m-2 rounded-md justify-between">
      <div className="flex flex-col gap-4 max-w-2xl">
        <h3 className="text-gray-300 font-semibold">Title of Sippet</h3>
        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi veniam aliquid amet minus dolorum voluptatem debitis voluptas impedit et consequuntur officiis, dignissimos, rerum, eos expedita mollitia. Dignissimos, voluptatibus tenetur.</p>  
      </div>
      <div className="flex flex-col justify-between items-end">
        <EllipsisVertical />
        <EditSnippetButton />
      </div>
    </div>
  )
}

export default AllUploadCard