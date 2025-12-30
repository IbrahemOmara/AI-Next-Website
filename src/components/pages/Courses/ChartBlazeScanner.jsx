import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './Courses.css'
import planPic from "../../../assets/Next-logo/wave-dots-indicator-600x450.png"
import CallToAction from '../../CallToAction/CallToAction'

export default function ChartBlazeScanner() {
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
            alt=" ChartBlazeScanner"
            className="mb-3 rounded custom-course-image"
          />
          <Card.Body>
            <Card.Title className="fs-3 mb-3" style={{textAlign:"center"}}> ChartBlaze Scanner</Card.Title>
            <Card.Text style={{ whiteSpace: "pre-line",textAlign:"right"}}>
              <div className="plan-details">
                <ul>
                  <li>
                    For traders who value automation and accuracy.
                  </li>
                  <li>
                    ChartBlaze is designed for users who prefer working with currency pairs but lack time for continuous monitoring.
                  </li>
                  <li>
                    The scanner automates pending orders across multiple pairs and performs best on lower timeframes (like M5).
                  </li>
                  <li>
                    It identifies high-probability buy and sell reversal zones through complex mathematical models that calculate reaction points daily, weekly, monthly, and yearly — across all instruments.
                  </li>
                  <li>
                    What makes it exceptional:
                    <ul>
                      <li>Auto-updates reversal levels across all timeframes</li>
                      <li>Based on advanced formulas beyond manual calculation</li>
                      <li>Ideal for traders seeking a set-and-forget system</li>
                    </ul>
                  </li>
                  <li>
                    Current Release: Version 1.0
                  </li>
                  <li>
                    Next: Version 2.0 under active development with expanded pair coverage and AI-based optimization.
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
