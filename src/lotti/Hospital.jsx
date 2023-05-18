import React from 'react';
// import './styles.css';
import Lottie from 'react-lottie';
import animationData from './43035-heartbeat.json';

export default function App() {
    const defaultOptions = {
        loop: true, 
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={70}
          width={70}
        />
      </div>
    );
  }