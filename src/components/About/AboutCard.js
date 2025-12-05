import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "0" }}>
            Hi everyone! I’m <span className="purple">Siphosethu Rululu</span>{" "}
            from <span className="purple">South Africa</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span>.
            <br />
            I hold certificates in{" "}
            <span className="purple">
              Data Science, Business Administration, and Accounting Science
            </span>.
            <br />
            <br />
            I am passionate about building digital solutions, improving user
            experience, and learning technologies that make life easier.
          </p>

          <p style={{ textAlign: "justify", marginTop: "10px" }}>
            My journey in tech is built on curiosity, continuous learning, and
            the desire to bring ideas to life through meaningful software.
          </p>

          <ul style={{ marginTop: "10px" }}>
            <li className="about-activity">
              <ImPointRight /> Building Projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Siphosethu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
