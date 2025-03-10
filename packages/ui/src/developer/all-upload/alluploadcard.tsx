"use client"
import { EllipsisVertical } from "lucide-react"
import { EditSnippetButton } from "./editsnippetbutton"

interface Tag {
  tag: {
    name: string
  }
}

const AllUploadCard = ({title,language, description, tags}: {
  title: string;
  language: string;
  description: string;
  tags: Tag[];
}) => {
  return (
    <div className="flex gap-3 bg-zinc-900 p-3.5 m-2 rounded-md justify-between">
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex gap-2 justify-start items-center">
          <h3 className="text-gray-300 font-semibold">{title}</h3>
          <h3 className="bg-zinc-800 px-2 rounded-lg">{language}</h3>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>  
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <p key={index} className="bg-zinc-800 px-2 py-1 rounded-lg">
              {tag.tag.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-2">
        <EllipsisVertical />
        <EditSnippetButton />
      </div>
    </div>
  )
}

export default AllUploadCard