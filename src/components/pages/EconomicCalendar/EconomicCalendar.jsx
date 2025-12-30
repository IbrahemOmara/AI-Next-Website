import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./EconomicCalendar.css";

const EconomicCalendar = ({
  width = "100%",
  height = "600px",
  lang = "en",
  impacts = "2,3", // Medium + High impact
  symbols = "AUD,CAD,CHF,CNY,EUR,GBP,JPY,NZD,USD",
}) => {


  const src = `https://widget.myfxbook.com/widget/calendar.html?lang=${lang}&impacts=${impacts}&symbols=${symbols}`;




  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Economic Calendar
          </h2>
          <p className="text-center mb-5 text-muted mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
          <Row className="g-5 mt-2">
            <div style={{ width: "100%", overflow: "hidden" }}>
              <iframe
                title="economic-calendar"
                src={src}
                style={{
                  width: width,
                  height: height,
                  border: "none",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
                allowTransparency="true"
                scrolling="no"
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default EconomicCalendar;
