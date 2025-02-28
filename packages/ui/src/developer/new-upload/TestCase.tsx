import { InputBox } from "./InputBox";

export function TestCase({ title }: { title: string }) {
    return (
        <div className="shadow-sm shadow-rose-300 rounded-lg py-4 px-2">
            <h1 className="font-semibold text-gray-700">{title}</h1>
            <InputBox title="Input"/>
            <InputBox title="Expected Output"/>
        </div>
    )
}