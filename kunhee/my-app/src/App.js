import React from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import './index.css';
import Resume from './main/Resume';
import Company from './main/Company';
import Community from './main/Community';

function App() {
  return (
    <div className='main-container'>
      <div className='landing-page'>
        <Header />
        <Resume />
        <Company />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
