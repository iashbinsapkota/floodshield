import React from 'react';

const PredictionTable = () => {
  // Dummy data for prediction
  const predictionData = [
    { day: 'Monday', prediction: 'Flood' },
    { day: 'Tuesday', prediction: 'No Flood' },
    { day: 'Wednesday', prediction: 'No Flood' },
    { day: 'Thursday', prediction: 'No Flood' },
    { day: 'Friday', prediction: 'Flood' },
    { day: 'Saturday', prediction: 'Flood' },
    { day: 'Sunday', prediction: 'No Flood' },

    // Add more predictions for the week
  ];

  return (
    <div className="prediction-table-container">
      <h2>Prediction Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Prediction</th>
          </tr>
        </thead>
        <tbody>
          {predictionData.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionTable;
