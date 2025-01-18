import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Activities from "./Activities";
import QuoteSection from "./QuoteSection";

// Import company logos
import canonLogo from "../../Assets/company/Canon.png";
import dolbyLogo from "../../Assets/company/Dolby.png";
import pfizerLogo from "../../Assets/company/Pfizer.png";
import gfsLogo from "../../Assets/company/Gordon.png";
import tmobileLogo from "../../Assets/company/T-Mobile.png";
import europolLogo from "../../Assets/company/Europol.png";
import infosysLogo from "../../Assets/company/Infosys.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>
              <h1 className="heading-name">
                I'm <strong className="main-name">Suresh Parimi</strong>
                <br />
                <span className="location">
                  from Amsterdam, The Netherlands
                </span>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Add Company Experience Section */}
      <Container fluid className="company-experience-section">
        <Container>
          <Row>
            <Col md={12} className="company-content">
              <div className="company-description">
                <p>
                  Some of my well-known enterprise customers include Canon-Europe, Dolby.io, 
                  Pfizer, Gordon Food Services, T-Mobile, Europol, and Infosys. I have also worked with 
                  fast-paced startups in the healthcare and fintech domains.
                </p>
                <div className="company-logos">
                  <Image src={canonLogo} alt="Canon Europe" className="company-logo" />
                  <Image src={dolbyLogo} alt="Dolby.io" className="company-logo" />
                  <Image src={pfizerLogo} alt="Pfizer" className="company-logo" />
                  <Image src={gfsLogo} alt="Gordon Food Services" className="company-logo" />
                  <Image src={tmobileLogo} alt="T-Mobile" className="company-logo" />
                  <Image src={europolLogo} alt="Europol" className="company-logo" />
                  <Image src={infosysLogo} alt="Infosys" className="company-logo" />
                </div>
                <p>
                  My diverse experience across both enterprise and startup environments has equipped me 
                  with unique insights and adaptable strategies. This versatility allows me to deliver 
                  tailored testing solutions that drive quality and efficiency, regardless of the 
                  organization's size or industry.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Activities />
      <QuoteSection />
      <Home2 />
    </section>
  );
}

export default Home;
