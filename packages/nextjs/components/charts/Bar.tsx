import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js/auto';

interface DataEntry {
  bounceRate: number;
  conversionRate: number;
}

interface ComparisonBarChartProps {
  data: DataEntry[];
}

const ComparisonBarChart: React.FC<ComparisonBarChartProps> = ({ data }) => {
  const dateLabels = ['21 May', '22 May', '23 May', '24 May', '25 May'];

  const chartData: ChartData<'bar', number[], string> = {
    labels: dateLabels,
    datasets: [
      {
        label: 'Bounce Rate',
        backgroundColor: '#3461FF',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: 'bottom',
        data: data.map(entry => entry.bounceRate),
      },
      {
        label: 'Conversion Rate',
        backgroundColor: '#C893FD',
        borderColor: '#C893FD',
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: 'bottom',
        data: data.map(entry => entry.conversionRate),
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    // barPercentage: 0.8,
    // categoryPercentage: 0.7,
  };

  return (
    <div className="max-w-lg mx-auto p-4 mt-10 bg-white rounded-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ComparisonBarChart;