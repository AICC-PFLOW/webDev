import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="block">
        <div className="logo">
          <div className="logo-1">
            <div className="logo-icon">
              <div className="group">
                <div className="group-2">
                  <div className="vector" />
                  <div className="vector-3" />
                </div>
                <div className="vector-4" />
              </div>
            </div>
            <span className="pflow">PFLOW</span>
          </div>
        </div>
        <div className="menu">
          <div className="nav-menu">
            <div className="products">
              <Link to="/resume">
                <span className="resume-writing">이력서 작성</span>
              </Link>
            </div>
            <div className="solutions">
              <Link to="/chatbot">
                <span className="company-recommendation">회사 추천</span>
              </Link>
            </div>
            <div className="resources">
              <Link to="/chatbot">
                <span className="company-search">회사 검색 </span>
              </Link>
            </div>
            <div className="pricing">
              <Link to="/community">
                <span className="community">커뮤니티</span>
              </Link>
            </div>
          </div>
          <button className="btn">
            <div className="btn-login">
              <Link to="/login">
                <span className="login">Login</span>
              </Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
