import React from 'react';
import './LoginSuccess.css'; // Import the CSS file

const LoginSuccess = () => {
  return (
    <div className="login-success-container">
      <div className="success-message">
        <div className="checkmark">✓</div>
        <p>Successfully logged in!</p>
      </div>
    </div>
  );
};

export default LoginSuccess;
