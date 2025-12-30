import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './Courses.css'
import planPic from "../../../assets/Next-logo/wave-dots-indicator-600x450.png"
import CallToAction from '../../CallToAction/CallToAction'

export default function OppenheimerScanner() {
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
          
          <Card.Body>
            <Card.Title className="fs-3 mb-3" style={{textAlign:"center"}}>Oppenheimer Scanner</Card.Title>
            <Card.Text style={{ whiteSpace: "pre-line",textAlign:"right"}}>
              <div className="plan-details">
                <ul>
                  <li>
                    Designed specifically for gold traders, this scanner operates not on traditional technical analysis but on an advanced Heiken Ashi-based algorithm.                  </li>
                  <li>
                    It dynamically draws market “boxes” based on candle behavior; when a breakout occurs, the system instantly generates a trading signal — often multiple times per day.                  </li>
                  <li>
                    Each setup includes:<br></br>Clear entry point, stop loss, and two profit targets
                      <ul>
                        <li>
                          Target 1: 1:1 risk/reward
                        </li>
                        <li>
                          Target 2: 1:2.5 risk/reward
                        </li>
                      </ul>
                  </li>
                  <li>
                    Current Release: Version 1.0
                  </li>
                  <li>
                    Next: Version 2.0 in development — with enhanced precision, faster response time, and adaptive risk management.                  </li>
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

          <Card.Img
            variant="top"
            src={
              
              planPic
            }
            alt="OppenheimerScanner"
            className="mb-3 rounded custom-course-image"
          />
        </Card>
      </div>
    </div>
  );
}
