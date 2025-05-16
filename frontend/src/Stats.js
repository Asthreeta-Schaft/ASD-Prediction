import React, { useEffect, useState } from 'react';
import './App.css';

function Stats() {
  const [stats, setStats] = useState({
    total_users: 6076,
    autistic: 1804,
    non_autistic: 4271
  });

  useEffect(() => {
    fetch('http://127.0.0.1:5000/stats')
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setStats(data);
        }
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        // Keep default values if fetch fails
      });
  }, []);

  return (
<div className="stats">
  <h3 className="section-title">Live Diagnosis Stats</h3>
  <div className="stats-column">
    <div className="stat-card">
      <p className="stat-number">{stats.total_users}</p>
      <p className="stat-label">Total Users</p>
    </div>
    <div className="stat-card red">
      <p className="stat-number">{stats.autistic}</p>
      <p className="stat-label">With Autism</p>
    </div>
    <div className="stat-card green">
      <p className="stat-number">{stats.non_autistic}</p>
      <p className="stat-label">Without Autism</p>
    </div>
  </div>
</div>
  );
}

export default Stats;