import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiGlobe,
  FiBarChart2,
  FiSettings,
  FiDollarSign,
  FiUsers,
  FiClock,
} from "react-icons/fi";
import "./WhyIncomes.css";
import icon1 from '../../assets/Gif/conflict.png'
import icon2 from '../../assets/Gif/web.png'
import icon3 from '../../assets/Gif/business.png'
import icon4 from '../../assets/Gif/money.png'
import icon5 from '../../assets/Gif/dashboard.png'
import icon6 from '../../assets/Gif/arrow.png'


const reasons = [
  {
    icon: icon4,
    text: "Interactive Learning Experience",
  },
  {
    icon: icon5,
    text: "Track Your Progress & Achievements",
  },
  {
    icon: icon3,
    text: "Seamless Mobile Learning",
  },
  {
    icon: icon2,
    text: "Actionable Insights & Resources",
  },
  {
    icon: icon1,
    text: "Community & Support ",
  },
  {
    icon: icon6,
    text: "Follow System ",
  },
];

const WhyIncomes = () => (
  <section className="why-section py-5">
    <Container>
      <h2 className="section-title text-center mb-5 glow-animate ">Empower Your Learning Journey with<br></br>
AI-Next's Powerful Features
</h2>
      <Row className="g-4">
        {reasons.map((item, i) => (
          <Col md={4} sm={6} xs={12} key={i}>
            <div className="why-card text-center p-4 shadow-sm h-100">
              <img src={item.icon} alt="gif icon"></img>
              <p className="why-text fs-6  mt-3">{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default WhyIncomes;
