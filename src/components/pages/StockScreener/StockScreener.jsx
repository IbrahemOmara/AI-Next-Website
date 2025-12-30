import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./StockScreener.css";

const StockScreener = ({
  width = "100%",
  height = 800,
  market = "america",
  showToolbar = true,
  defaultColumn = "overview",
  defaultScreen = "most_capitalized",
  colorTheme = "dark",
  isTransparent = false,
  enableScrolling = true,
}) => {

const config = {
    market,
    showToolbar,
    defaultColumn,
    defaultScreen,
    isTransparent,
    colorTheme,
    width,
    height,
    enableScrolling,
    utm_source: "your-site.com",
    utm_medium: "widget",
    utm_campaign: "screener",
  };

  const base =
    "https://www.tradingview-widget.com/embed-widget/screener/?locale=en";

  const src = base + "#" + encodeURIComponent(JSON.stringify(config));


  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Real-Time Stock Screener for Global Markets
          </h2>
          <p className="text-center mb-5 text-muted mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
          <Row className="g-5">
              <div style={{ width: "100%", overflow: "hidden" }}>
                <iframe
                  title="tradingview-screener"
                  src={src}
                  style={{
                    width: "100%",
                    height: typeof height === "number" ? `${height}px` : height,
                    border: "none",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                  scrolling={enableScrolling ? "yes" : "no"}
                  frameBorder="0"
                />
              </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default StockScreener;
