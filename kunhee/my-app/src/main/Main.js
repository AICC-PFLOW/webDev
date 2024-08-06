import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Main() {
  return (
    <div className="main-container">
      <div className="landing-page">
        <div className="hero-section">
          <div className="block-5">
            <div className="heading">
              <div className="text-block">
                <span className="resume-helper">이력서 작성 도우미</span>
                <span className="time-saving">
                  이력서 쓰는데 시간 버리지 말자! 글을 못써도! 단어가 생각이
                  안나도!
                  <br />
                  AI로 발견하는 나만의 취업 강점 찾기!
                </span>
              </div>
              <Link to="/resume">
                <button className="btn-free-trial">
                  <span className="get-started">Get started</span>
                  <div className="group-6" />
                </button>
              </Link>
            </div>
            <div className="image-container">
              <div className="asset" />
            </div>
          </div>
        </div>
        <div className="work-management">
          <div className="block-7">
            <div className="content">
              <div className="headline">
                <div className="text-block-8">
                  <div className="element" />
                  <span className="company-recommendation-9">회사 추천</span>
                  <span className="chatbot-company">
                    챗봇 AI로 찾는 나를 위한 회사!
                  </span>
                </div>
                <Link to="/company">
                  <button className="btn-get-started">
                    <span className="get-started-a">Get Started</span>
                    <div className="icon">
                      <div className="group-b" />
                    </div>
                  </button>
                </Link>
              </div>
              <div className="image-container-c" />
            </div>
            <div className="content-d">
              <div className="work-together-image">
                <div className="ellipse" />
                <div className="group-e">
                  <div className="ellipse-f" />
                </div>
                <div className="group-10">
                  <div className="ellipse-11" />
                </div>
                <div className="group-12" />
                <div className="ellipse-13" />
                <div className="group-14">
                  <div className="logo-icon-15">
                    <div className="group-16">
                      <div className="group-17">
                        <div className="vector-18" />
                        <div className="vector-19" />
                      </div>
                      <div className="vector-1a" />
                    </div>
                  </div>
                  <div className="rectangle" />
                </div>
                <div className="group-1b">
                  <div className="ellipse-1c" />
                </div>
                <div className="group-1d">
                  <div className="ellipse-1e" />
                </div>
                <div className="group-1f">
                  <div className="ellipse-20" />
                </div>
                <div className="group-21" />
                <div className="group-22">
                  <div className="ellipse-23" />
                </div>
                <div className="group-24">
                  <div className="ellipse-25" />
                </div>
              </div>
              <div className="headline-26">
                <div className="text-block-27">
                  <div className="element-28" />
                  <span className="company-search-29">회사 검색</span>
                  <span className="chatbot-find-company">
                    챗봇으로 내가 원하는 조건에 맞는 회사 찾기!
                    <br />
                  </span>
                </div>
                <Link to="/company">
                  <button className="btn-get-started-2a">
                    <span className="get-start">Get Start</span>
                    <div className="icon-2b">
                      <div className="group-2c" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="customise-needs">
          <div className="block-2d">
            <div className="heading-2e">
              <div className="text-block-2f">
                <div className="element-30" />
                <span className="share-job-story">
                  함께 나누는
                  <br />
                  취업 이야기
                </span>
                <span className="job-community">
                  취업 고민, 면접후기, 근무 후기 등 취업 관련 커뮤니티
                </span>
              </div>
              <Link to="/community">
                <button className="btn-get-started-31">
                  <span className="lets-go">Let’s Go</span>
                  <div className="icon-32">
                    <div className="group-33" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="illustration">
              <div className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
