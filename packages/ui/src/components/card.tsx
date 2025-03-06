"use client"
import { JSX } from "react/jsx-runtime";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export function Card({
    title,
    image,
    onClick,
    category,
}: {
    title: string,
    image: string | StaticImageData,
    onClick?: () => void,
    category: string,
}): JSX.Element {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center gap-4 px-6 py-4 shadow-md shadow-gray-700 rounded-lg sm:px-10 bg-zinc-900">
            <button onClick={() => router.push(`/category/${category}`)} className="focus:outline-none">
                <img src={typeof image === 'string' ? image: image.src} alt={title} 
                className="h-14 rounded-full hover:scale-110 duration-200" />
            </button>
            <h1 className="font-semibold">{title}</h1>
        </div>
    )
}