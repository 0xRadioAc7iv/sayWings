import React, { useEffect, useRef } from "react";
import { ArcElement, Chart, DoughnutController, Legend, Tooltip } from "chart.js/auto";

const roasData = {
  google: 3.5,
  meta: 4.2,
  twitter: 5.1,
};

const LineAndBarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ["Google", "Meta", "Twitter"],
          datasets: [
            {
              data: [roasData.google, roasData.meta, roasData.twitter],
              backgroundColor: ["#46D3FF", "#FFCE51", "#FFB9EC"],
            },
          ],
        };

        const options = {
          cutout: "70%",
          rotation: -90,
          circumference: 180,
          plugins: {
            legend: {
              display: false,
            },
          },
        };

        const myDoughnutChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: options,
        });

        return () => {
          myDoughnutChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="w-48 h-48 relative">
      <canvas ref={chartRef}></canvas>
      <div className="absolute top-1/2 left-1/2 bottom-1/2 right-[2.6rem] flex items-center flex-col transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xs">
        <span className="text-3xl bg-[#FFB9EC] rounded-full p-4">66</span>{" "}
        <span className="text-zinc-900 flex flex-col items-center w-[20vw] mt-4">Your Performance is Balanced</span>
      </div>
    </div>
  );
};

export default LineAndBarChart;
