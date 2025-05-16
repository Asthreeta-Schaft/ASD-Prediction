import React, { useState } from 'react';
import './App.css';

const initialState = {
  a1: '',
  a2: '',
  a3: '',
  a4: '',
  a5: '',
  a6: '',
  a7: '',
  a8: '',
  a9: '',
  a10: '',
  age: '',
  sex: '',
  jaundice: '',
  autism: '',
};

const questions = {
  a1: "Do you look at the person who call out your name?",
  a2: "Do you point out to the things you are interested in?",
  a3: "Do you bring objects like toys or gadgets to show someone?",
  a4: "Do you try to copy someone when they do certain things (like, clapping, laughing, waving)?",
  a5: "Do you respond when someone called your name?",
  a6: "Do you sometimes pretend something (or some situation) is fine or upsetting?",
  a7: "Do you use simple gestures (like, wave goodbye)?",
  a8: "Do you make eye contact with people (are you comfortable in making eye contact)?",
  a9: "Do you show interest in other people?",
  a10: "Do you smile back when someone smiles at you?",
};

function Form({ onSubmit }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Autism Questionnaire</h2>

      <div className="form-grid">
        {Object.entries(questions).map(([key, label]) => (
          <div className="form-group" key={key}>
            <label className="form-label">{label}</label>
            <select
              className="form-input"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0">Yes</option>
              <option value="1">No</option>
            </select>
          </div>
        ))}

        {/* Additional Info */}
        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-input"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender (m/f)</label>
          <input
            type="text"
            name="sex"
            className="form-input"
            value={formData.sex}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Were you diagnosed with Jaundice at birth?</label>
          <select
            name="jaundice"
            className="form-input"
            value={formData.jaundice}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Does someone in your immediate family have autism?</label>
          <select
            name="autism"
            className="form-input"
            value={formData.autism}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
      </div>

      <button type="submit" className="form-button">Predict</button>
    </form>
  );
}

export default Form;