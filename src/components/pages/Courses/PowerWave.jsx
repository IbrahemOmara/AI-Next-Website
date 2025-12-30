import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './Courses.css'
import planPic from "../../../assets/Next-logo/wave-dots-indicator-600x450.png"
import CallToAction from '../../CallToAction/CallToAction'

export default function PowerWave() {
  const navigate = useNavigate();

  // هنا بنعمل Scroll لفوق لما المكون يحمل
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  return (
    <div className="content-course">
      <div className="container py-5 mt-5 ">
        <Button
          variant="secondary"
          onClick={() => navigate(-1)}
          className="mb-4 mt-5"
        >
          ⬅ Back
        </Button>

        <Card className="shadow p-4 course-card-details">
          <Card.Img
            variant="top"
            src={
              
              planPic
            }
            alt="PowerWave"
            className="mb-3 rounded custom-course-image"
          />
          <Card.Body>
            <Card.Title className="fs-3 mb-3" style={{textAlign:"center"}}>Power Wave</Card.Title>
            <Card.Text style={{ whiteSpace: "pre-line",textAlign:"right"}}>
              <div className="plan-details">
                <ul>
                  <li>
                    PowerWave identifies market trends and overall quality across multiple currency pairs with exceptional clarity. 
                  </li>
                  <li>
                    It detects macro-level movements and provides directional insights that improve timing and confidence in volatile conditions.
                  </li>
                  <li>
                    PowerWave offers a complete copy-and-paste trading system, running 24/7 with four auto-generated targets across all pairs. 
                  </li>
                  <li>
                    Users can easily customize stop sizes, filter trades, and choose between swing or scalping modes, thanks to flexible configuration options.
                  </li>
                  <li>
                    Unlike predictive systems, PowerWave’s algorithm tracks live market flow — making it extremely reliable during news events and high-volatility periods.
                  </li>
                  <li>
                    Version 3.0 is currently live, with Version 4.0 under development, promising even smarter adaptability.
                  </li>
                </ul>
              </div>
            </Card.Text>

            <ul className="list-unstyled mb-3">
            
              <li>
                <strong>Price:</strong>{" "}
                { (
                  <span className="text-decoration-line-through text-muted me-2">
                    0000 EGP
                  </span>
                )}
                <span className="fw-bold text-success" style={{fontSize:"1.5em"}}>1600 EGP</span>
              </li>
            </ul>

                <CallToAction 
                  text={"Subscribe"}
                  to={"/contact-us"}
                />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
