import { AINews } from '@chaingpt/ainews';
import { NextRequest, NextResponse } from 'next/server';

const ainews = new AINews({
    apiKey: process.env.CHAINGPT_API_KEY || '',
});

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const response = await ainews.getNews({  categoryId: [6], // Search AI News against specific category i.e NFT, Blockchain, DEFI etc
    });
        const news = JSON.stringify(response.data);
        return new NextResponse(news, { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("There was an Error", { status: 500 });
    }
}