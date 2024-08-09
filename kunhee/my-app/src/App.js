import React from "react";
import Header from "./main/Header";
import Footer from "./main/Footer";
import "./index.css";
import Resume from "./main/Resume";
import Company from "./main/Company";
import Community from "./main/Community";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Resume />
      <Company />
      <Community />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
