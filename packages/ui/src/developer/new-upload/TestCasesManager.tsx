"use client"

import { useState } from "react";
import { TestCase } from "./TestCase";
import { AddTestCase } from "./AddTestCase";

export function TestCasesManager({
    initialTestCases,
    onChange
}: {
    initialTestCases: { title: string; input: string; expected: string }[];
    onChange?: (cases: { title: string; input: string; expected: string }[]) => void;
}) {
    const [testCases, setTestCases] = useState(initialTestCases);

    const addTestCase = () => {
        const newTestCase = {
            title: `Test${testCases.length + 1}`,
            input: "",
            expected: "",
        };
        const update = [...testCases, newTestCase];
        setTestCases(update);
        onChange?.(update);
    };

    const updateTestCase = (
        index: number,
        field: "input" | "expected",
        value: string
    ) => {
        const update = testCases.map((testCase, i) => i === index ? { ...testCase, [field]: value } : testCase);
        setTestCases(update);
        onChange?.(update);
    }

    return (
        <div>
            <div className="flex gap-1 items-center">
                <h1 className="font-bold text-gray-600">Test Cases<span className="text-red-500">*</span></h1>
                <p className="text-sm text-gray-400">(Minimum 3 test cases needed)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testCases.map((testCase, index) => (
                    <TestCase
                        key={index}
                        title={testCase.title}
                        inputValue={testCase.input}
                        expectedValue={testCase.expected}
                        onInputChange={(val) => updateTestCase(index, "input", val)}
                        onExpectedChange={(val) => updateTestCase(index, "expected", val)}
                    />
                ))}
                <AddTestCase onClick={addTestCase} />
            </div>
        </div>
    );
}
