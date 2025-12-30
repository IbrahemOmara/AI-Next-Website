import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./StockHeatmap.css";

const StockHeatmap = ({
  width = "100%",
  height = 800,
  dataSource = "SPX500",
  grouping = "sector",
  blockSize = "market_cap_basic",
  blockColor = "change",
  colorTheme = "dark",
  locale = "en",
  hasTopBar = true,
  isDataSetEnabled = true,
  isZoomEnabled = true,
  hasSymbolTooltip = true,
  isMonoSize = false,
  utm_source = "your-site.com",
  utm_medium = "widget",
  utm_campaign = "stock-heatmap",
}) => {


  const config = {
    exchanges: [],
    dataSource,
    grouping,
    blockSize,
    blockColor,
    symbolUrl: "",
    colorTheme,
    hasTopBar,
    isDataSetEnabled,
    isZoomEnabled,
    hasSymbolTooltip,
    isMonoSize,
    width,
    height,
    utm_source,
    utm_medium,
    utm_campaign,
  };


  // Build iframe src: base + encoded config in hash
  const base = "https://www.tradingview-widget.com/embed-widget/stock-heatmap/?locale=" + encodeURIComponent(locale);
  const hash = "#" + encodeURIComponent(JSON.stringify(config));
  const src = base + hash;

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Stock Heatmap
          </h2>
          <p className="text-center mb-5 text-muted mx-auto">
            Have a question or need help? Our support team is available 24/7.
          </p>
          <Row className="g-5 mt-2">
            <div className="stock-heatmap-wrapper" style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              <iframe
                title="TradingView Stock Heatmap"
                src={src}
                style={{
                  width: "100%",
                  height: typeof height === "number" ? `${height}px` : height,
                  border: "0",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                loading="lazy"
              />
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default StockHeatmap;
