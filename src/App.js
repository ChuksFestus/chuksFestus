import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0; margin: 0;
  }
  *,*::before, *::after {
    box-sizing: border-box
  }
  body {
    background: linear-gradient(90deg, #5C02FF 0%, #21005C 102.56%);
    font-family: 'Rubik', sans-serif;
    min-height: calc(100vh - calc(43px + 43px));
    min-width: calc(100vw - calc(29px + 29px))
  }
`;

const Container = styled.main`
  margin: 43px 29px;
  @media screen and (max-width: 425px) {
    margin: 16px;
  }
  background: #f8f8f8;
  display: grid;
  place-items: center;
  img {
    width: 274px;
    height: 208.26px;
    margin-top: 90px;
    @media screen and (max-width: 425px) {
      width: 254px;
      height: 188.26px;
    }
  }
  h1 {
    color: #052e40;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    padding-bottom: 63px;
    padding-top: 63px;
    @media screen and (max-width: 425px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  h3 {
    color: #052e40;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    @media screen and (max-width: 425px) {
      font-size: 20px;
      text-align: center;
    }
  }
  .line {
    background: linear-gradient(
      90deg,
      rgba(92, 2, 255, 0.3) 0%,
      rgba(33, 0, 92, 0.3) 102.56%
    );
    width: 344px;
    height: 11px;
    margin-top: -15px;
    @media screen and (max-width: 425px) {
      width: 250px;
      height: 11px;
    }
  }
  a {
    width: 489px;
    text-align: left;
    padding: 16px;
    margin-bottom: 33px;
    text-decoration: none;
    @media screen and (max-width: 425px) {
      width: 250px;
    }
    :hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
        0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    }
    .company {
      color: #21005c;
      font-size: 24px;
      line-height: 28px;
      @media screen and (max-width: 425px) {
        font-size: 18px;
      }
    }
    .dist {
      padding-top: 8px;
      color: #323232;
      font-size: 18px;
      line-height: 21px;
      @media screen and (max-width: 425px) {
        font-size: 16px;
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <img
          src="https://chuksfestus.netlify.app/static/media/chuksfestus.6541a324.png"
          alt="chuks festus"
        />
        <h1>
          Hi, I’m Chuks Festus. <br />
          UI Designer & Frontend developer
        </h1>
        <div style={{ paddingBottom: 63 }}>
          <h3>Projects I’ve worked on</h3>
          <div className="line"></div>
        </div>
        <a
          href="https://www.elephant.healthcare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="company">Elephant healthcare</p>
          <p className="dist">
            Elephant healthcare is a cloud-based SaaS medical application to be
            used in the most challenging areas of the world by medical
            practitioners
          </p>
        </a>
        <a
          href="https://secoura.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="company">Secoura</p>
          <p className="dist">
            Secoura is a cyber security company whose mission is to provide
            advanced cybersecurity analytics to organisations.
          </p>
        </a>
        <a
          href="https://suregifts.com.ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="company">Suregifts</p>
          <p className="dist">
            Suregifts is an online platform to create and distributes vouchers
            for retail payments in Africa. In their own words "We retail Gift
            Cards for merchants and different brand"
          </p>
        </a>
        <a href="https://busha.co/" target="_blank" rel="noopener noreferrer">
          <p className="company">Busha</p>
          <p className="dist">
            Busha is the easiest place to buy, sell, and manage your
            cryptocurrency portfolio
          </p>
        </a>
        <a
          href="https://seamlesshr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="company">SeamlessHr</p>
          <p className="dist">
            End-to-End HR Software for Hiring, Training and Managing Top Talent
            in Nigeria. Covers Payroll, Leave, Performance, Onboarding & More
          </p>
        </a>
        <a
          href="https://www.slatecube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="company">Slatecube</p>
          <p className="dist">
            AI-powered platforms for learning and workforce development.
          </p>
        </a>
      </Container>
      <GlobalStyle />
    </div>
  );
}

export default App;
