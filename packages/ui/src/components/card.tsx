import { JSX } from "react/jsx-runtime";
import { StaticImageData } from "next/image";

export function Card({
    title,
    image,
}: {
    title: string,
    image: string | StaticImageData,
}): JSX.Element {
    return (
        <div className="flex flex-col items-center gap-2 px-6 py-4 shadow-md shadow-gray-700 rounded-lg">
            <img src={typeof image === 'string' ? image: image.src} alt={title} 
            className="h-14 rounded-full" />
            <h1>{title}</h1>
        </div>
    )
}