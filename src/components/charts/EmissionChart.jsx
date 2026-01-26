import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function EmissionChart() {
  const data = {
    labels: ["Transport", "Electricity", "Diet", "Waste"],
    datasets: [
      {
        data: [900, 800, 500, 250],
        backgroundColor: [
          "#3a923e",
          "#49a64d",
          "#80cf82",
          "#abe3ad",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${context.label}: ${value} kg CO₂`;
          },
        },
      },
      legend: {
        position: "bottom",
      },
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value, context) => context.chart.data.labels[context.dataIndex],
        display: true,
      },
    },
    hover: {
      onHover: (event, elements, chart) => {
        chart.options.plugins.datalabels.display =
          elements.length === 0;
        chart.update();
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default EmissionChart;
