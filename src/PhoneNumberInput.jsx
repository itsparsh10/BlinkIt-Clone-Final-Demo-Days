// import React, { useState } from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import './PhoneNumberInput.css';

// const PhoneNumberInput = ({ onContinue }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [error, setError] = useState("");

//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 10) {
//       setPhoneNumber(value);
//       setError(value.length === 10 ? "" : "Enter Valid Number");
//     }
//   };

//   const handleGoogleSuccess = (response) => {
//     console.log("Google login successful", response);
//     // Handle login success, possibly by sending the token to your server
//     // After successful Google login, proceed to the OTP verification
//     onContinue();
//   };

//   const handleGoogleFailure = (error) => {
//     console.error("Google login failed", error);
//     setError("Google login failed. Please try again.");
//   };

//   return (
//     <div className="otp-container">
//       <div className="otp-box">
//         <img src='/logo.png' alt="Logo" className="logo" />
//         <h2>India's last minute app</h2>
//         <p>Log in or Sign up</p>
//         <div className="phone-input-container">
//           <span>+91</span>
//           <input
//             type="text"
//             placeholder="Enter mobile number"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//             className="phone-input"
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button
//           className={`continue-btn ${phoneNumber.length === 10 ? 'active' : ''}`}
//           disabled={phoneNumber.length !== 10}
//           onClick={onContinue}
//         >
//           Continue
//         </button>
//         <p className="terms">
//           By continuing, you agree to our <a href="#">Terms of service</a> & <a href="#">Privacy policy</a>
//         </p>
//         <div className="google-login">
//           <GoogleLogin
//             onSuccess={handleGoogleSuccess}
//             onFailure={handleGoogleFailure}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhoneNumberInput;









import React, { useState } from 'react';
import './PhoneNumberInput.css';

const PhoneNumberInput = ({ onContinue }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
      setError(value.length === 10 ? "" : "Enter Valid Number");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <img src='/logo.png' alt="Logo" className="logo" /> {}
        <h2>India's last minute app</h2>
        <p>Log in or Sign up</p>
        <div className="phone-input-container">
          <span>+91</span>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="phone-input"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button
          className={`continue-btn ${phoneNumber.length === 10 ? 'active' : ''}`}
          disabled={phoneNumber.length !== 10}
          onClick={onContinue}
        >
          Continue
        </button>
        <p className="terms">
          By continuing, you agree to our <a href="#">Terms of service</a> & <a href="#">Privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberInput;

