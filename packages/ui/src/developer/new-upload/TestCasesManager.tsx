"use client"

import { useState } from "react";
import { TestCase } from "./TestCase";
import { AddTestCase } from "./AddTestCase";

export function TestCasesManager({ initialTestCases }: { initialTestCases: string[] }) {
    const [testCases, setTestCases] = useState<string[]>(initialTestCases);

    const addTestCase = () => {
        setTestCases([...testCases, `Test${testCases.length + 1}`]);
    };

    return (
        <div>
            <div className="flex gap-1 items-center">
                <h1 className="font-bold text-gray-600">Test Cases<span className="text-red-500">*</span></h1>
                <p className="text-sm text-gray-400">(Minimum 3 test cases needed)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testCases.map((testCase) => (
                    <TestCase title={testCase} key={testCase} />
                ))}
                <AddTestCase onClick={addTestCase} />
            </div>
        </div>
    );
}
