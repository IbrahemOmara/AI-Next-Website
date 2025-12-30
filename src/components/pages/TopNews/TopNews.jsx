import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./TopNews.css";

const TopNews = ({
  width = "100%",
  height = 800,
  isTransparent = true,
  displayMode = "adaptive",
  colorTheme = "light",
}) => {

  const config = {
    isTransparent,
    displayMode,
    width,
    height,
    colorTheme,
    utm_source: "your-site.com",
    utm_medium: "widget",
    utm_campaign: "timeline",
  };

  const base =
    "https://www.tradingview-widget.com/embed-widget/timeline/?locale=en";

  const src = base + "#" + encodeURIComponent(JSON.stringify(config));

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Top News
          </h2>
          <p className="text-center mb-5 text-muted mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
          <Row className="g-5">
              <div style={{ width: "100%", overflow: "hidden" }}>
                <iframe
                  title="tradingview-timeline"
                  src={src}
                  style={{
                    width: "100%",
                    height: typeof height === "number" ? `${height}px` : height,
                    border: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                />
              </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TopNews;
