import { SmartContractAuditor } from "@chaingpt/smartcontractauditor";
import { NextRequest, NextResponse } from 'next/server';

const smartcontractauditor = new SmartContractAuditor({
    apiKey: process.env.CHAINGPT_API_KEY || '',
});

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json();
        const question = data.question;

        const response = await smartcontractauditor.auditSmartContractBlob({
            question: question,
            chatHistory: "off"
        });

        return new NextResponse(response, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("There was an Error", { status: 500 });
    }
}