import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import './App.css';
import Form from './Form';
import Result from './Result';
import Stats from './Stats';
import { fetchStats, submitPrediction } from './api';

function Home() {
  const [prediction, setPrediction] = useState(null);
  const [stats, setStats] = useState({
    total_users: 0,
    autistic: 0,
    non_autistic: 0,
  });

  useEffect(() => {
    fetchStats().then(setStats).catch(console.error);
  }, [prediction]);

  const handleSubmit = async (formData) => {
    try {
      const result = await submitPrediction(formData);
      setPrediction(result);
    } catch (err) {
      console.error('Error submitting data:', err);
      alert('Prediction failed. Please try again later.');
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Check If You Have Autism</h1>
        <p className="subtitle">Fill out the form below to screen for autistic traits</p>
 
        <Form onSubmit={handleSubmit} />

        {prediction && <Result data={prediction} />}

        <Stats stats={stats} />
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Autism Diagnosis Project by integrating Machine Learning and React technology<br />
        Developed by Asthreeta Schaft | Shashwat Mudgal
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router basename="/ASD-Prediction">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;