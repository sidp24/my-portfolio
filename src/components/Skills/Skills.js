import React from 'react';
import { Radar } from 'react-chartjs-2';

const SkillRadarChart = () => {
  const data = {
    labels: ['JavaScript', 'React', 'Node.js', 'Python', 'CSS', 'HTML'],
    datasets: [
      {
        label: 'My Skills',
        backgroundColor: 'rgba(34, 202, 236, .2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        pointBackgroundColor: 'rgba(34, 202, 236, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
        data: [80, 75, 70, 85, 90, 95] // Your skill level
      }
    ]
  };

  return (
    <div>
      <h2>My Skills</h2>
      <Radar data={data} />
    </div>
  );
};

export default SkillRadarChart;
