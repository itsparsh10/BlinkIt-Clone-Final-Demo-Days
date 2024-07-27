import React, { useState, useEffect } from 'react';
import './OtpVerification.css'; // Ensure this file includes styling for OTP input

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [counter, setCounter] = useState(30);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleResend = () => {
    setOtp(new Array(4).fill("")); // Optional: Clear OTP inputs on resend
    setCounter(30); // Reset the counter to 30 seconds
  };

  const handleBack = () => {
    window.location.reload();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="otp-container">
      <div className="otp-box">
        <div className="otp-header">
          <button className="back-button" onClick={handleBack}>&larr;</button>
          <h2>OTP Verification</h2>
        </div>
        <p>We have sent a verification code to <br/> +91-8989921458</p>
        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              className="otp-input"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          ))}
        </div>
        <p>
          Resend Code {counter > 0 ? `(in ${counter} secs)` : ''}
        </p>
        {counter === 0 && (
          <button className="resend-button" onClick={handleResend}>
            Resend
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
