import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import portfolioImg from "../../Assets/Projects/portfolio.png"; // Replace with your portfolio image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is the portfolio project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={portfolioImg}
              isBlog={false}
              title="My Portfolio"
              description="This is my personal portfolio project built with React.js and React-Bootstrap. It showcases my skills, projects, and social links in a modern, responsive design."
              ghLink="https://github.com/SIPHOSETHU2303/Portfolio"
              demoLink="https://your-portfolio-live-link.com" // Replace with your live demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
