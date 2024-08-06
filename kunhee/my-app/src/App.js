import React from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import './index.css';
import Main from './main/Main';
import Resume from './main/Resume';
import Company from './main/Company';
import Community from './main/Community';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
