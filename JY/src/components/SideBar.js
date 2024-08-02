import React from "react";
//import { Link } from "react-router-dom";

const SideBar = () => {
return (
    <nav className="SideBar">
    <ul className="Step-Section">
    <li className="Step">
      <section className="Step-Link">
        <button className="Num">1</button>
        <span className="Step-Text">탬플릿 정보</span>
      </section>
    </li>
        <li className="Step">
      <section className="Step-Link">
        <button className="Num">2</button>
        <span className="Step-Text">기본정보</span>
      </section>
    </li>
        <li className="Step">
      <section className="Step-Link">
        <button className="Num">3</button>
        <span className="Step-Text">기술정보</span>
      </section>
    </li>
    <li className="Step">
      <section className="Step-Link">
        <button className="Num">4</button>
        <span className="Step-Text">자기소개</span>
      </section>
    </li>
    <li className="Step">
      <section className="Step-Link">
        <button className="Num">5</button>
        <span className="Step-Text">Finalize</span>
      </section>
    </li>
    </ul>
    </nav>
);
};

export default SideBar;