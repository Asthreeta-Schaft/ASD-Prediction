import React from 'react';
import './App.css';

function About() {
  return (
  < div className='about-container'>
    <div className="about">
      <h1>About This Project</h1>
      
      <p>
        <strong>Autism Spectrum Disorder (ASD)</strong> is a complex neurodevelopmental condition characterized by challenges with social interaction, communication, and restricted or repetitive behaviors. It affects individuals differently and to varying degrees, making early and accurate detection both crucial and challenging. The rising prevalence of autism worldwide demands proactive efforts in accessible diagnosis and awareness.
      </p>

      <p>
        <strong>Why research in this field matters:</strong> Despite growing awareness, many individuals—especially in low-resource or under-informed environments—remain undiagnosed or misdiagnosed. Timely screening and intervention can significantly enhance developmental outcomes. Integrating machine learning with digital platforms offers a scalable and effective solution to support early-stage screening.
      </p>

      <p>
        <strong>What this project achieves:</strong> This web-based application enables users to complete a concise screening questionnaire. Using a trained machine learning model, the system provides instant predictive feedback on the likelihood of ASD traits, while also logging anonymous data to refine future accuracy. The platform also presents live statistics, offering real-time insights into the growing dataset.
      </p>

      <p>
        <strong>Our Machine Learning and UI/UX approach:</strong> We employed a hybrid machine learning model built on a <em>Random Forest Classifier</em>, trained on a curated autism screening dataset. Label encoding and preprocessing pipelines were applied to prepare categorical inputs. The frontend, built with React.js, ensures a clean, responsive, and accessible interface with attention to user-friendliness and device compatibility. Features like a dynamic stats dashboard and slide-in menu navigation offer both functionality and visual engagement.
      </p>

      <p>
        <strong>Following the Base Research Paper:</strong> This project strictly aligns with and builds upon the paper titled <em>"A Hybrid Machine Learning Model for Accurate Autism Diagnosis"</em>. The methodology outlined in the base research has been thoroughly implemented, tested, and refined to ensure both the scientific validity and real-world usability of our application.
      </p>

      <p>
        <strong>Developer Acknowledgment:</strong> This project is developed by Shashwat Mudgal, a postgraduate student pursuing his Master of Engineering, as part of an academic and research-oriented endeavor to merge Artificial Intelligence with socially impactful healthcare solutions.
      </p>

      <p>
        <strong>Base Paper:</strong> You can access the original research paper that guided this project here: <br />
        <a 
          href={`${process.env.PUBLIC_URL}/A%20Hybrid%20Machine%20Learning%20Model%20for%20Accurate%20Autism%20Diagnosis.pdf`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          A Hybrid Machine Learning Model for Accurate Autism Diagnosis (PDF)
        </a>
      </p>
      
    </div>

    <footer className="footer">
        &copy; {new Date().getFullYear()} Autism Diagnosis Project by integrating Machine Learning and React technology<br />
        Developed by Asthreeta Schaft | Shashwat Mudgal
    </footer>

  </div>
  );
}

export default About;