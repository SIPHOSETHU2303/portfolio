import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are all the projects I have worked on across software engineering, 
          web development, APIs, and machine learning.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Portfolio Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="My Portfolio"
              description="My personal portfolio built with React.js showcasing my skills, experience, and projects."
              ghLink="https://github.com/SIPHOSETHU2303/Portfolio"
              demoLink="https://your-portfolio-live-link.com"
            />
          </Col>

          {/* Team JB3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Team JB3 Project"
              description="A collaborative software engineering project built as part of a team using modern development practices."
              ghLink="https://github.com/SIPHOSETHU2303/Team--JB3"
            />
          </Col>

          {/* HealthConnect */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="HealthConnect App"
              description="A health-focused web application for booking checkups, medication collection, and skill exchange for elderly users."
              ghLink="https://github.com/SIPHOSETHU2303/HealthConnect"
            />
          </Col>

          {/* About Me API */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="About Me API"
              description="A simple REST API that returns personal profile details using Node.js and Express.js."
              ghLink="https://github.com/SIPHOSETHU2303/Aboutme-API"
            />
          </Col>

          {/* JB2 Machine Learning Project - Kabongo */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="JB2 Classification - Kabongo"
              description="A machine learning classification project analyzing dataset patterns using Python."
              ghLink="https://github.com/Kabongo2024/JB2-Classification-project"
            />
          </Col>

          {/* JB2 Machine Learning Project - Amos */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="JB2 Classification - Amos"
              description="A data science classification project using ML algorithms such as KNN, Decision Trees, and SVM."
              ghLink="https://github.com/AmosMaps/JB2-Classification-project"
            />
          </Col>

          {/* Team MM5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Team MM5 Project"
              description="A team project integrating frontend and backend features to solve a real-world problem."
              ghLink="https://github.com/amkelenokrala/Team_MM5"
            />
          </Col>

          {/* Team J3 Python Final Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Team J3 Python Final Project"
              description="Python final project focusing on algorithms, problem-solving, and data structures."
              ghLink="https://github.com/Sharonramapuputla/Team-J3-Python-final-project"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
