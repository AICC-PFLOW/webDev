import React from 'react';

import LandingPageV2DesktopImage from 'src/assets/images/Mainpagedesktop1920px_Landing_page_V2___desktop___1920px.png';

import {
  styled
} from '@mui/material/styles';

const MainPageDesktop1920P = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `3742px`,
  width: `1920px`,
});

const LandingPageV2Desktop = styled("img")({
  height: `3742px`,
  width: `1920px`,
  margin: `0px`,
});


function MainPageDesktop() {
  return (
    <MainPageDesktop1920P>
      <LandingPageV2Desktop src={LandingPageV2DesktopImage} loading='lazy' alt={"Landing page V2 / desktop / 1920px"}/>
    </MainPageDesktop1920P>);

  }

export default MainPageDesktop;

  