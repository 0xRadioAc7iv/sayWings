import aave from "../../nextjs/public/protocols/aave.svg";
import curve from "../../nextjs/public/protocols/curve.svg";
import compound from "../../nextjs/public/protocols/compound.svg";
import justlend from "../../nextjs/public/protocols/justlend.webp";
import layerBank from "../../nextjs/public/protocols/layerBank.svg";
import { StaticImageData } from "next/image";

export interface Protocol {
  id: number;
  logo: StaticImageData;
  name: string;
  type: string;
  tvl: string;
  apy: number;
  openSource: number;
  audited: number;
}

const dummyData: Protocol[] = [
  {
    id: 1,
    logo: aave,
    name: "Aave",
    type: "Lending",
    tvl: "$12.971B",
    apy: 7.106,
    openSource: 1,
    audited: 1,
  },
  {
    id: 3,
    logo: compound,
    name: "Compound Finance",
    type: "Lending",
    tvl: "$2.581B",
    apy: 6.4,
    openSource: 1,
    audited: 1,
  },
  {
    id: 4,
    logo: justlend,
    name: "JustLend",
    type: "Lending",
    tvl: "$6.64B",
    apy: 5.427,
    openSource: 1,
    audited: 1,
  },
  {
    id: 5,
    logo: layerBank,
    name: "LayerBank",
    type: "Lending",
    tvl: "$603.5M",
    apy: 0.01962,
    openSource: 1,
    audited: 1,
  },
];

export default dummyData;
