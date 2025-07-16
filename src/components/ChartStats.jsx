import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartStats = ({ completed, total }) => {
  const remaining = total - completed;

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ['rgb(49, 144, 62, 0.9)', '#e5e7eb'], // green, gray
        backdropFilter: blur,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    // cutout: '70%',
    plugins: {
      legend: { display: false },
    },
  };

  return (
      <Doughnut data={data} options={options} />      
  );
};

export default ChartStats;