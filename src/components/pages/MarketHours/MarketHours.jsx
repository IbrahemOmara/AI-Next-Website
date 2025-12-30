import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./MarketHours.css";

const MarketHours = ({ width = "100%", height = "600px" }) => {

  const src = "https://widget.myfxbook.com/widget/market-hours.html";

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Market Hours
          </h2>
          <p className="text-center mb-5 text-muted mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
          <Row className="g-5">
              <div style={{ width: "100%", overflow: "hidden" }}>
                <iframe
                  title="market-hours"
                  src={src}
                  style={{
                    width: width,
                    height: height,
                    border: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                  scrolling="no"
                  frameBorder="0"
                />
              </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MarketHours;
