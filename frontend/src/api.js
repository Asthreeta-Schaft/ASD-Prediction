import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000'; // Flask backend

/**
 * Submit form data to the /predict endpoint
 * @param {Object} formData - The form input object
 * @returns {Object} response from Flask API
 */
export async function submitPrediction(formData) {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, formData);
    return response.data;
  } catch (error) {
    console.error('Prediction API error:', error);
    throw new Error(
      error.response?.data?.error || 'Failed to submit prediction.'
    );
  }
}

/**
 * Fetch statistics from the /stats endpoint
 * @returns {Object} stats: total users, autistic, non-autistic
 */
export async function fetchStats() {
  try {
    const response = await axios.get(`${BASE_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error('Stats API error:', error);
    throw new Error('Failed to fetch statistics.');
  }
}