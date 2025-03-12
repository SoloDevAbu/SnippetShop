"use client"

import React, { useEffect, useState } from 'react'
import { AddTestCase } from '@repo/ui/developer/new-upload/AddTestCase'
import { SnippetInfo } from '@repo/ui/components/snippet-info'
import { UserTestCase } from '@repo/ui/components/UserTestCase'
import { SnippetTopBar } from '@repo/ui/category/snippet-top-bar'
import { useParams } from 'next/navigation'
import axios from 'axios'

interface Tag {
    tag: {
        name: string
    }
}

interface TestCase {
    input: string;
    expected_output: string;
}

interface SnippetData {
    title: string;
    description: string;
    language: {
        name: string;
        judge0_id: number
    };
    tags: Tag[];
    developer: {
        name: string;
    };
    test_cases: TestCase[];
}

interface TestCaseResult {
    number: number;
    input: number;
    output: number;
    isSuccess: boolean;
}

const SnippetPreview = () => {
    const [snippetData, setSnippetData] = useState<SnippetData>();
    const [testResults, setTestResults] = useState<TestCaseResult[]>([]);
    const [customTestCases, setCustonTestCases] = useState<TestCase[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [canBuy, setCanBuy] = useState(false);

    const code = `const fs = require("fs");
                // Read input from stdin
                const input = fs.readFileSync(0, "utf-8").trim().split(" ");
                const a = parseInt(input[0], 10);
                const b = parseInt(input[1], 10);
                
                function sum(a, b) {
                    return a + b;
                }
                
                console.log(sum(a, b));
                `

    const param = useParams();

    useEffect(() => {
        const fetchSnippet = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`http://localhost:5000/api/v1/category/snippet/${param.snippetId}`);
                setSnippetData(response.data.snippet);
                console.log(response.data.snippet)
            } catch (error) {
                console.error('Error fetching snippet:', error);
                setError((error as Error).message)
            } finally {
                setLoading(false)
            }
        };
        fetchSnippet();
    }, [param.snippetId]);

    const addTestCase = () => {
        const newTestCase = {
            input: "",
            expected_output: ""
        };
        setCustonTestCases(prev => [...prev, newTestCase]);
    }

    const updateCustomTestCases = (index: number, field: keyof TestCase, value: string) => {
        setCustonTestCases(prev => 
            prev.map((testCase, i) => 
                i === index ? {...testCase, [field]: value} : testCase
            )
        )
    }

    const handleRun = async () => {
        const allTestCases = [...snippetData!.test_cases, ...customTestCases];
        const response = await axios.post("../../../../api/runSnippet", {
            code,
            language_id: snippetData?.language.judge0_id,
            stdin: allTestCases.map(testCase => testCase.input),
            expected_output: allTestCases.map(testCase => testCase.expected_output)
        })

        const results = response.data.submissions.map((submission: any, index: number) => {
            const testCase = allTestCases[index];
            if (!testCase) {
                throw new Error(`Test case at index ${index} is undefined`);
            }
            const actualOutput = submission.stdout?.trim();
            const expectedOutput = testCase.expected_output;
            
            return {
                number: index + 1,
                input: testCase.input,
                output: actualOutput,
                isSuccess: submission.status.id === 3 && actualOutput === expectedOutput
            };
        });
        const statuses = response.data.submissions.map((result: any) => result.status.description);
        const allAccepted = statuses.every((status: string) => status === "Accepted");

        setCanBuy(allAccepted);

        setTestResults(results);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-gray-400">Loading snippet...</p>
            </div>
        );
    }

    if (error || !snippetData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-red-400">{error || 'Failed to load snippet'}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex-none">
                <SnippetTopBar onClick={handleRun} canBuy={canBuy}/>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                <section className="flex-1 md:w-1/2 p-4 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-semibold text-gray-300">Snippet Information</h1>
                        <SnippetInfo
                            title={snippetData.title}
                            language={snippetData.language.name}
                            description={snippetData.description}
                            tags={snippetData.tags.map(t => t.tag.name)}
                            developerName={snippetData.developer.name}
                        />

                        <h1 className="text-3xl font-semibold text-gray-300">Test Result</h1>
                        <div className="flex flex-col gap-8 bg-zinc-900 rounded-lg p-4">
                            {testResults.map((result, index) => (
                                <UserTestCase
                                    key={index}
                                    number={result.number}
                                    input={String(result.input)}
                                    output={String(result.output)}
                                    isSuccess={result.isSuccess}
                                />
                            ))}
                            {testResults.length === 0 && (
                                <p className="text-gray-400 text-center py-4">
                                    Run tests to see results
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                <section className="flex-1 md:w-1/2 p-4 overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl text-gray-300 font-semibold mb-4">Test Cases</h1>
                        {snippetData.test_cases.map((testCase, index) => (
                            <UserTestCase
                                key={index}
                                number={index + 1}
                                input={testCase.input}
                                output={testCase.expected_output}

                            />
                        ))}
                        {customTestCases.length > 0 && (
                            <div className='mb-6'>
                                <h2 className='text-xl text-gray-400 mb-2'>Your Test Cases</h2>
                                {customTestCases.map((testCase, index) => (
                                    <UserTestCase 
                                        key={`custom-${index}`}
                                        number={snippetData.test_cases.length + index + 1}
                                        input={testCase.input}
                                        output={testCase.expected_output}
                                        onInputChange={(value) => updateCustomTestCases(index, 'input', value)}
                                        onOutputChange={(value) => updateCustomTestCases(index, 'expected_output', value)}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="w-1/2">
                            <AddTestCase onClick={addTestCase} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SnippetPreview