import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: [
      "Computadores",
      "Monitores",
      "Acessórios",
      "Infraestrutura",
      "Telefonia",
    ],
    datasets: [
      {
        data: [120, 80, 45, 60],
        backgroundColor: ["#4F46E5", "#06B6D4", "#22C55E", "#F59E0B"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },

    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
