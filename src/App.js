import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import happy from './happy.gif';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [isHovered, setHovered] = useState(false);


  const handleYes = () => {
    setAccepted(true);
  };

  const handleNo = () => {
    const newStyle = {
      position: 'absolute',
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    };
    setNoButtonStyle(newStyle);
  };

  return (
    <div className="App" style={appStyle}>
      {accepted ? (
        <div className="response" style={responseStyle}>
          <img src={happy} alt="happy" style={imageStyle} />
          <p style={responseTextStyle}>Yay! I'm so happy!</p>
        </div>
      ) : (
        <div className="proposal" style={proposalStyle}>
          <img src={happy} alt="happy" style={imageStyle} />
          <p style={proposalTextStyle}>Will you go on a date with me?</p>
          <div className="buttons">
            <button onClick={handleYes} style={yesButtonStyle}>
              Yes
            </button>
            <button onClick={handleNo} style={{ ...noButtonStyle, ...noButtonBaseStyle }}>
              No
            </button>
          </div>
        </div>
      )}

      <div style={madeByStyle}>
      <a
  href="https://github.com/faizan-1320"
  target="_blank"
  rel="noopener noreferrer"
  style={{ ...githubLinkStyle, ...(isHovered ? githubLinkHoverStyle : {}) }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <FontAwesomeIcon icon={faGithub} style={githubIconStyle} />
  Made by Faizan
</a>

      </div>
    </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#fce4ec', // Light Pink background
};

const proposalStyle = {
  textAlign: 'center',
  backgroundColor: '#ffffff', // White background
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  marginBottom: '20px',
};

const responseStyle = {
  textAlign: 'center',
  backgroundColor: '#ffffff', // White background
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
};

const imageStyle = {
  width: '100px',
  borderRadius: '50%',
  marginBottom: '20px',
};

const proposalTextStyle = {
  color: '#333333', // Dark text color
};

const responseTextStyle = {
  color: '#333333', // Dark text color
};

const yesButtonStyle = {
  backgroundColor: '#4caf50', // Green button
  color: '#ffffff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px',
};

const noButtonBaseStyle = {
  backgroundColor: '#ff1744', // Red button
  color: '#ffffff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const madeByStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

// const githubLinkStyle = {
//   color: '#0366d6', // GitHub link color
//   textDecoration: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '16px',
// };

const githubIconStyle = {
  marginRight: '8px',
};
const githubLinkStyle = {
  // ... other styles
  color: '#0366d6', // GitHub link color
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  transition: 'color 0.3s ease-in-out', // Add this line for transition effect
};

const githubLinkHoverStyle = {
  color: '#18416e', // New color for hover effect
};


export default App;
