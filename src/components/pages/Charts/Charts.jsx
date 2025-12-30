import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Charts.css";

const Charts = () => {

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Charts
          </h2>
          <Row className="g-5">
              <div style={{ width: "100%", height: "800px" }}>
                <iframe
                  src="https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A800%2C%22symbol%22%3A%22TVC%3AGOLD%22%2C%22interval%22%3A%22D%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22withdateranges%22%3Atrue%2C%22hide_side_toolbar%22%3Afalse%2C%22allow_symbol_change%22%3Atrue%2C%22watchlist%22%3A%5B%22FX%3AEURUSD%22%2C%22TVC%3AGOLD%22%2C%22BITSTAMP%3ABTCUSD%22%2C%22CRYPTO%3AETHUSD%22%2C%22TVC%3ADXY%22%2C%22CAPITALCOM%3AUS30%22%2C%22NASDAQ%3AMSFT%22%5D%2C%22show_popup_button%22%3Atrue%2C%22popup_width%22%3A%221000%22%2C%22popup_height%22%3A%22650%22%2C%22support_host%22%3A%22https%3A%2F%2Fwww.tradingview.com%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22advanced-chart%22%2C%22page-uri%22%3A%22zylostar.com%2Fcharts%22%7D"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  allowTransparency="true"
                  scrolling="no"
                ></iframe>
              </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Charts;
