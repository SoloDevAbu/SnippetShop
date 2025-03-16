import { JSX } from "react/jsx-runtime";
import { InputBox } from "./InputBox";

export function TestCase({
    title,
    inputValue,
    expectedValue,
    onInputChange,
    onExpectedChange,
}: {
    title: string;
    inputValue: string;
    expectedValue: string;
    onInputChange: (value: string) => void;
    onExpectedChange: (value: string) => void
}): JSX.Element {
    return (
        <div className="bg-gray-900/30 shadow-lg shadow-rose-500/5 rounded-lg py-4 px-3 border border-gray-800/50 transition-all duration-200 hover:border-gray-700">
            <h1 className="font-semibold text-gray-200 mb-3 px-3">{title}</h1>
            <InputBox
                title="Input"
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
            />
            <InputBox
                title="Expected Output"
                value={expectedValue}
                onChange={(e) => onExpectedChange(e.target.value)}
            />
        </div>
    )
}