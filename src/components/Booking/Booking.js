import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { Image } from "react-bootstrap";

// Import company logos
import canonLogo from "../../Assets/company/Canon.png";
import dolbyLogo from "../../Assets/company/Dolby.png";
import pfizerLogo from "../../Assets/company/Pfizer.png";
import gfsLogo from "../../Assets/company/Gordon.png";
import tmobileLogo from "../../Assets/company/T-Mobile.png";
import europolLogo from "../../Assets/company/Europol.png";
import infosysLogo from "../../Assets/company/Infosys.png";

function Booking() {
  return (
    <Container fluid className="booking-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="booking-content">
            <h1 className="heading">Book a Business Appointment</h1>
            <div className="booking-description">
              <p>
                Hi there 👋, my name is Suresh Parimi. I am a freelance Test Automation Expert 
                and Quality Engineering Consultant with 17 years of experience in testing and 
                building end-to-end test automation solutions for both enterprise and startup customers.
              </p>
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
            <div className="calendar-container">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TfLBzxWFuM9qEJMSwtXnJBqW2wrURs1iEkAhxEEWrDlKB5DuGee1W-AJMT58jdQmNnLkK7K14?embedded=true"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule Appointment"
                className="calendar-frame"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Booking; 