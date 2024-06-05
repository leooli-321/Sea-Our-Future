import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "./dashboard.css";

Chart.register(ArcElement);

const Dashboard: React.FC = () => {
  const data = {
    labels: [
      "Florianópolis",
      "Natal",
      "Goiania",
      "Recife",
      "Fortaleza",
      "Belo Horizonte",
      "Porto Alegre",
      "Manaus",
      "Salvador",
      "Sao Luis",
      "Rio de Janeiro",
      "Curitiba",
      "Vitoria",
      "Joao Pessoa",
    ],
    datasets: [
      {
        label: "População",
        data: [
          8.1, 7.1, 4.8, 9.3, 6.9, 5.7, 7.1, 5.6, 6.2, 12.1, 9.3, 5.9, 6.6, 5.3,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#E7E9ED",
          "#9966CC",
          "#FFD700",
          "#008080",
          "#800000",
          "#808080",
          "#00CED1",
          "#DC143C",
          "#20B2AA",
          "#F08080",
        ],
      },
    ],
  };

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(
    null
  );

  const handleLabelHover = (color: string, value: number) => {
    setSelectedColor(color);
    setSelectedPercentage(value);
  };

  const modifiedData = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        backgroundColor: data.datasets[0].backgroundColor.map((color) =>
          color === selectedColor ? color : "#000000"
        ),
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <Pie
          data={modifiedData}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            onHover: (_, elements) => {
              if (elements.length > 0) {
                const index = elements[0].index;
                setSelectedColor(data.datasets[0].backgroundColor[index]);
                setSelectedPercentage(data.datasets[0].data[index]);
              }
            },
          }}
        />
        {selectedPercentage !== null && (
          <div className="percentage-overlay">
            {selectedPercentage.toFixed(1)}%
          </div>
        )}
      </div>
      <div className="manual-legend">
        {data.labels.map((label, index) => (
          <span
            className="porcentagem"
            key={index}
            style={{
              color:
                selectedColor === data.datasets[0].backgroundColor[index]
                  ? "#FFFFFF"
                  : "#000000",
              backgroundColor: data.datasets[0].backgroundColor[index],
            }}
            onMouseEnter={() =>
              handleLabelHover(
                data.datasets[0].backgroundColor[index],
                data.datasets[0].data[index]
              )
            }
            onMouseLeave={() => handleLabelHover("null", null)}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
