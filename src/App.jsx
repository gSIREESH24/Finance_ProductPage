import React from 'react';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';

function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>
      <div className="app-container">
        <Navbar />
        <LandingSection />
      </div>
    </>
  );
}

export default App;
