import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./MarketWatch.css";

const MarketWatch = () => {

  const [active, setActive] = useState(1);

  return (
    <div className="content-section">
      <section className="contact-section py-5">
        <Container>
          <h2 className="section-title my-fw-bolder text-main mb-4 text-center">
            Market Watch
          </h2>
          <Row className="g-5">
              <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
                {/* Buttons */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                  {["Forex Rates", "Forex", "Crypto", "Stocks"].map((label, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i + 1)}
                      style={{
                        padding: "10px 20px",
                        background: active === i + 1 ? "#f2b400" : "#1e1e1e",
                        color: active === i + 1 ? "#000" : "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Widgets */}
                {active === 1 && (
                  <iframe
                    src="https://widget.myfxbook.com/widget/market-quotes.html?symbols=AUDUSD,CADCHF,EURGBP,EURUSD,GBPUSD,NZDUSD,USDCAD,USDCHF,USDJPY,XAUUSD"
                    width="100%"
                    height="450"
                    frameBorder="0"
                  ></iframe>
                )}

                {active === 2 && (
                  <div className="forex">
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22TVC%3AGOLD%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22FX%3AEURUSD%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22FX%3AUSDJPY%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                  </div>
                )}

                {active === 3 && (
                  <div className="crypto">
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22CRYPTO%3AETHUSD%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22CRYPTOCAP%3AXRP%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                  </div>
                )}

                {active === 4 && (
                  <div className="stocks">
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3ANVDA%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AMSFT%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                    <iframe
                      src="https://www.tradingview-widget.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A425%2C%22isTransparent%22%3Afalse%2C%22height%22%3A450%2C%22symbol%22%3A%22NASDAQ%3AGOOGL%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zylostar.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22technical-analysis%22%2C%22page-uri%22%3A%22zylostar.com%2Fmarket-watch%23%22%7D"
                      width="100%"
                      height="450"
                      frameBorder="0"
                    ></iframe>
                  </div>
                )}
              </div>
            </Row>
          </Container>
        </section>
      </div>
  );
};

export default MarketWatch;
