import React, { useState, useEffect } from 'react';
import SplashScreen from './../Screen/splash';

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : children;
};

export default LoadingScreen;
