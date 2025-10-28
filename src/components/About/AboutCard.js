import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Kong Ji Yu</span>{" "}
            from <span className="purple">Malaysia</span>.
            <br />
            I'm currently the{" "}
            <span className="purple">Founder & Project Consultant</span> at{" "}
            <span className="purple">K&E Tech Innovations</span>.
            <br />I'm pursuing my{" "}
            <span className="purple">Bachelor of Software Engineering with Honours</span> at{" "}
            <span className="purple">TAR UMT</span>, maintaining a CGPA of{" "}
            <span className="purple">3.9/4.0</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying Out New Technologies 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Failure can't kill me, it helps me become better!"{" "}
          </p>
          <footer className="blockquote-footer">Kong Ji Yu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
