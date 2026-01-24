import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function EmissionChart() {
  const data = {
    labels: ["Transport", "Electricity", "Diet", "Waste"],
    datasets: [
      {
        data: [900, 800, 500, 250],
      },
    ],
  };

  return <Pie data={data} />;
}

export default EmissionChart;
