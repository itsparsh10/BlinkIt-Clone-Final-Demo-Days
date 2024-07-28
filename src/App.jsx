import React, { useState } from 'react';
import PhoneNumberInput from './PhoneNumberInput';
import OtpVerification from './OtpVerification';
import './App.css'; 

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
