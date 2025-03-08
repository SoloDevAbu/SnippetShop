import { TestCase } from "./TestCase";
import { AddTestCase } from "./AddTestCase";
import { useMetadata } from "./MetadataContext";

export function TestCasesManager() {
    const { metadata, setMetadata } = useMetadata();

    const addTestCase = () => {
        const newTestCase = {
            title: `Test ${metadata.testCases.length + 1}`,
            input: "",
            expected: "",
        };
        setMetadata((prev) => ({
            ...prev,
            testCases: [...prev.testCases, newTestCase]
        }));
    };

    const updateTestCase = (
        index: number,
        field: "input" | "expected",
        value: string
    ) => {
        setMetadata((prev) => ({
            ...prev,
            testCases: prev.testCases.map((testCase, i) =>
                i === index ? { ...testCase, [field]: value } : testCase
            )
        }))
    }

    return (
        <div>
            <div className="flex gap-1 items-center pb-2">
                <h1 className="font-bold text-gray-300">Test Cases<span className="text-red-400">*</span></h1>
                <p className="text-sm text-gray-400">(Minimum 3 test cases needed)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metadata.testCases.map((testCase, index) => (
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
