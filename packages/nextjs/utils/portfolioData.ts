import aave from "../../nextjs/public/protocols/aave.svg";
import curve from "../../nextjs/public/protocols/curve.svg";
import compound from "../../nextjs/public/protocols/compound.svg";
import justlend from "../../nextjs/public/protocols/justlend.webp";
import layerBank from "../../nextjs/public/protocols/layerBank.svg";
import { StaticImageData } from "next/image";
import exp from "constants";

export interface Protocol {
  id: number;
  logo: StaticImageData;
  name: string;
  amountInvested: string;
  apy: number;
  earnedInterest: number;
  totalInvestedValue: number;
}

const portfolioData: Protocol[] = [
  {
    id: 1,
    logo: aave,
    name: "Aave",
    amountInvested: "$0.00",
    apy: 0,
    earnedInterest: 0,
    totalInvestedValue: 0,
  },
  {
    id: 2,
    logo: compound,
    name: "Compound",
    amountInvested: "$0.00",
    apy: 0,
    earnedInterest: 0,
    totalInvestedValue: 0,
  },
  {
    id: 3,
    logo: justlend,
    name: "JustLend",
    amountInvested: "$0.00",
    apy: 0,
    earnedInterest: 0,
    totalInvestedValue: 0,
  },
  {
    id: 4,
    logo: layerBank,
    name: "LayerBank",
    amountInvested: "$0.00",
    apy: 0,
    earnedInterest: 0,
    totalInvestedValue: 0,
  },
]

export default portfolioData;