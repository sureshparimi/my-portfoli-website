import React, { useState, useEffect } from "react";

function FadingText() {
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Quality & Ops Engineering Leader",
    "Test Automation Architect",
    "Azure DevOps Engineer",
    "MLOps Learner"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFadeClass("fade-in");
      }, 1000); // Wait for fade out animation to complete
      
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fading-text-container">
      <span className={`fading-text ${fadeClass}`}>
        {texts[currentText]}
      </span>
    </div>
  );
}

export default FadingText; 