"use client"
import { EllipsisVertical, Eye, Heart, Copy } from "lucide-react"
import { EditSnippetButton } from "./editsnippetbutton"

interface Tag {
  tag: {
    name: string
  }
}

const AllUploadCard = ({title, language, description, tags}: {
  title: string;
  language: string;
  description: string;
  tags: Tag[];
}) => {
  return (
    <div className="group flex gap-4 bg-zinc-900/50 hover:bg-zinc-900 p-6 rounded-xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-900/20">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <h3 className="text-gray-200 font-semibold text-lg group-hover:text-emerald-400 transition-colors">
              {title}
            </h3>
            <span className="px-3 py-1 bg-zinc-800 text-xs font-medium text-emerald-400 rounded-full border border-emerald-900/50">
              {language}
            </span>
            <span className="px-3 py-1 bg-zinc-800/50 text-xs font-medium text-gray-400 rounded-full">
              Active
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span className="text-xs">123</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="text-xs">45</span>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>  
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-zinc-800/50 text-gray-300 text-xs rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
                {tag.tag.name}
              </span>
            ))}
          </div>
          <button className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-sm">
            <Copy className="w-4 h-4" />
            Copy ID
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
          <EllipsisVertical className="w-5 h-5 text-gray-400" />
        </button>
        <EditSnippetButton />
      </div>
    </div>
  )
}

export default AllUploadCard