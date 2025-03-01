import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    code: string;
    language_id: number;
    stdin: string;
    expected_output: string;
}

interface AxiosResponse {
    data: any;
}

export async function POST(req: NextRequest): Promise<NextResponse> {

    try {
        const { code, language_id, stdin, expected_output }: RequestBody = await req.json();
        const judge0Url = 'https://judge0-ce.p.rapidapi.com/submissions';

        const submissionsResponse: AxiosResponse = await axios.post(judge0Url, {
            source_code: code,
            language_id,
            stdin,
            expected_output,
            wait: true
        }, {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': process.env.JUDGE0_API_KEY
            }
        });

        const submissionId = submissionsResponse.data.token;
        const resultUrl = `${judge0Url}/${submissionId}`;

        const resultResponse = await axios.get(resultUrl, {
            headers: {
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                'x-rapidapi-key': process.env.JUDGE0_API_KEY
            }
        })

        const resultData = resultResponse.data.data || resultResponse.data;
        return NextResponse.json(resultData);
    } catch (error) {
        console.error('Error submitting code:', error);
        return NextResponse.json({ error: 'Failed to submit code' }, { status: 500 });
    }
}