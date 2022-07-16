import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement } from "chart.js";

const DonutChart = () => {
  return (
    <div>
      <Doughnut
        height="40%"
        width="40%"
        options={{
          cutout: "75%",
          layout: {
            padding: {
              top: 50,
              bottom: 50,
              left: 50,
              right: 50,
            },
          },

          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: [
            " 25% Consumption co2mg",
            " 20% Energy co2mg",
            " 16% Food co2mg",
            " 26.5% Public co2mg",
            " 12.5% Transport co2mg",
          ],
          datasets: [
            {
              label: "Categories",
              data: [
                2354553712.62764, 1908265269.8322, 1503715250.26774, 2497000000,
                1176894355.95973,
              ],
              backgroundColor: [
                "#EF5F8A", 
                "#00A1C9", 
                "#F6BA75", 
                "#3999E3",
                "#673E88",
              ],

              hoverOffset: 4,
              hoverBorderColor: "#000000",
              hoverBorderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default DonutChart;
