import React from 'react';
import './App.css';

function Result({ data }) {
  return (
    <div className={`result-card ${data.prediction_raw === 1 ? 'danger' : 'safe'}`}>
      <h3 className="result-title">Screening Result</h3>
      <p className="result-text">{data.prediction}</p>
    </div>
  );
}

export default Result;