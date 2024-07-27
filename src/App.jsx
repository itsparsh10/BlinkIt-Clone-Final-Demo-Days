import React, { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import OtpVerification from './OtpVerification';
import './App.css'; // Ensure this file includes styling for both screens

const App = () => {
  const [isOtpScreen, setIsOtpScreen] = useState(false);

  return (
    <div className="App">
      {isOtpScreen ? (
        <OtpVerification />
      ) : (
        <PhoneNumberInput onContinue={() => setIsOtpScreen(true)} />
      )}
    </div>
  );
};

export default App;
