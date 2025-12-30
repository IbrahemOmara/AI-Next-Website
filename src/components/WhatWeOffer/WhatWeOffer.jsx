import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";
import { FaChalkboardTeacher, FaVideo } from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import "./WhatWeOffer.css";
import icon1 from  '../../assets/Gif/business (3).png'
import icon2 from  '../../assets/Gif/business (2).png'
import icon3 from  '../../assets/Gif/usiness-and-finance.png'
import icon4 from  '../../assets/Gif/swing-trading.png'
import icon5 from  '../../assets/Gif/exchange.png'

const items = [
  {
    title: " business Track",
    desc: "",
    icon: icon1,
  },
  {
    title: "exchange",
    desc: "",
    icon: icon5,
  },
  {
    title: "business",
    desc: "",
    icon: icon2,
  },
  {
    title: "swing-trading",
    desc: "",
    icon: icon4,
  },
  {
    title: "usiness-and-finance",
    desc: "",
    icon: icon3,
  },
];

const WhatWeOffer = () => (
  <section className="offer-section py-5">
    <Container>
      <h2 className="section-title text-center mb-5 glow-animate">
        Structured learning paths
      </h2>

      <h4 className="lead mt-3 text-center ">
        Our library of courses caters to all skill levels,skill levels from
        beginner to advanced,
      </h4>
      <p className="lead mt-2 mb-5 text-center ">
        providing a structured path to ensure a strong foundation before
        tackling complex topics.
      </p>
      <Row className="g-4">
        {items.map((item, index) => (
          <Col md={3} key={index}>
            <div className="offer-card   p-4 text-center ">
              <img  src={item.icon} alt="gif"></img>
              <h5 className="offer-title mb-2  mt-3">{item.title}</h5>
              <p className="offer-desc">{item.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default WhatWeOffer;
