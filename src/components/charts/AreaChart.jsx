import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

function AreaChart() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],

    datasets: [
      {
        label: "Entradas",
        data: [120, 180, 150, 220, 200, 260],
        fill: true,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.2,
        pointRadius: 5,
        pointBackgroundColor: "#4F46E5",
        pointBorderWidth: 0,
      },

      {
        label: "Saídas",
        data: [80, 100, 90, 140, 100, 160],
        fill: true,
        borderColor: "#EF4444",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.2,
        pointRadius: 5,
        pointBackgroundColor: "#EF4444",
        pointBorderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      x: {
        duration: 1000,
      },
      y: {
        duration: 1000,
        easing: "easeOutQuart",
      },
    },

    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          pointStyleWidth: 11,
          boxHeight: 8,
          padding: 20,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default AreaChart;
