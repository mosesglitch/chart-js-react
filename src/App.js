import React, { useState } from "react";
import { Data } from "./utils/Data";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />

      <LineChart chartData={chartData} />
    </div>
  );
}
