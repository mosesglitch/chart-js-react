import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js/auto";

const BarChart = ({ chartData }) => {
  // Bar.register(CategoryScale);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
