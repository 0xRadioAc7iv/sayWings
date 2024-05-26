import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://yields.llama.fi/pools', {cache: "no-cache"});
        const dataObject = await response.json();
        const dataArray = dataObject.data;
        const apyArray = [];

        for (let i = 0; i < dataArray.length; i++) {
            const element = dataArray[i];
            
            if (
                (element.chain === "Ethereum" || element.chain === "Sepolia" || element.chain === "Polygon") &&
                (element.symbol === "USDC" || element.symbol === "ETH") &&
                (element.project === "aave-v3" || element.project === "compound-v3")
            ) {
                apyArray.push(element.apy);
            }
        }

        const highestAPY = Math.max(...apyArray);
        return new NextResponse(JSON.stringify(highestAPY), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse("There was an Error", { status: 500 });
    }
}