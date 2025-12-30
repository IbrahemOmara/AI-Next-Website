import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = ({ text,to}) => (
  <section className="cta-section py-5 text-center text-white bg-root">
    <Container>
      <h2 className="cta-title my-fw-bolder mb-3">
        
      Don't Wait,
      Invest in Your Future
      Start Your Journey with AI-NextToday!
      </h2>
      <p className="cta-subtitle fs-5 my-fw-bold mb-4">
        Join AI NEXT Academy today — and experience how artificial intelligence can revolutionize the way you trade.
      </p>

      <Link to={to}>
        <Button className="px-5 py-2 banner-btn">{text}</Button>
      </Link>
    </Container>
  </section>
);

export default CallToAction;
