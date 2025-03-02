import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    code: string;
    language_id: number;
    stdin: string[];
    expected_output: string[];
}

interface SubmissionResult {
    stdout: string;
    stderr: string;
    status: {
        id: number;
        description: string;
    };
    time: string;
    memory: number;
}

interface SubmissionResponse {
    token: string;
}

interface SubmissionsResponseData {
    submissions: SubmissionResponse[];
}

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const { code, language_id, stdin, expected_output }: RequestBody = await req.json();
        const batchUrl = 'https://judge0-ce.p.rapidapi.com/submissions/batch';

        // Create a submission for each test case
        const submissions = stdin.map((input, index) => ({
            source_code: code,
            language_id,
            stdin: input,
            expected_output: expected_output[index]
        }));

        // Submit all test cases at once
        const submissionsResponse = await axios.post(batchUrl, {
            submissions,
            wait: true
        }, {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': process.env.JUDGE0_API_KEY
            }
        });

        console.log(submissionsResponse.data);
        // Use the correct property name (submissions) to extract tokens
        const submissionTokens: string[] = submissionsResponse.data.map(
            (submission: SubmissionResponse) => submission.token
        );

        // Fetch results for each token
        const result: SubmissionResult[] = await Promise.all(
            submissionTokens.map(async (token): Promise<SubmissionResult> => {
                const resultUrl = `https://judge0-ce.p.rapidapi.com/submissions/${token}`;
                const resultResponse = await axios.get(resultUrl, {
                    headers: {
                        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                        'x-rapidapi-key': process.env.JUDGE0_API_KEY
                    }
                });
                return resultResponse.data;
            })
        );

        console.log(result);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error submitting code:', error);
        return NextResponse.json({ error: 'Failed to submit code' }, { status: 500 });
    }
}