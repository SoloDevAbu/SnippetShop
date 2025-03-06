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
        <div className="shadow-sm shadow-rose-300 rounded-lg py-4 px-2">
            <h1 className="font-semibold text-gray-300">{title}</h1>
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