import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  return (
    <div>
        < Doughnut 
           data={{
            labels: [
                'Consumption 25%',
                'Energy 20%',
                'Food 16%',
                'Public 26.5%',
                'Transport 12.5%',
              ],
              datasets: [
                  {
                label: 'Categories',
                data: [24.941173915018624, 20.21375673683841, 15.928463799510945,26.450070317699502, 12.466535230932529],
                backgroundColor: [
                  '#F6BA75',
                  '#EF5F8A',
                  '#00A1C9',
                  '#673E88',
                  '#3999E3',
                  
                ],

                hoverOffset: 4,
                hoverBorderColor: '#000000',
                hoverBorderWidth: 2,
                
            
                
              },
            ],
           
   
           }}
          
            />
    </div>
  )
}

export default DonutChart;