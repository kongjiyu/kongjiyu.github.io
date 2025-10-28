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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Dotivra - AI Documentation Platform"
              description="A comprehensive React-based documentation platform with AI-powered content generation and rich text editing. Features multi-provider authentication (Email, Google, GitHub), TipTap editor, Mermaid diagrams, and real-time document management with Firebase."
              ghLink="https://github.com/kongjiyu/dotivra"
              techStack={[
                "React 19",
                "TypeScript",
                "Vite",
                "Firebase",
                "TipTap",
                "Tailwind CSS v4",
                "Mermaid.js",
                "Radix UI"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Clinic Management System"
              description="Full-stack clinic management web application with Jakarta EE backend. Features patient records, doctor scheduling, medicine inventory, comprehensive analytics with Chart.js, and PDF export. Fully containerized with Docker for easy deployment."
              ghLink="https://github.com/kongjiyu/ClinicManagementSystem"
              techStack={[
                "Java 17",
                "Jakarta EE",
                "JAX-RS",
                "JPA/Hibernate",
                "MySQL",
                "Tailwind CSS",
                "Chart.js",
                "Docker"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Samseng Webstore"
              description="Modern Jakarta EE-based e-commerce platform with comprehensive product management, shopping cart, order processing, and promotion system. Features role-based access control, image uploads, and Docker deployment with Caddy reverse proxy."
              ghLink="https://github.com/kongjiyu/samseng-webstore"
              techStack={[
                "Jakarta EE",
                "JAX-RS",
                "JPA/Hibernate",
                "PostgreSQL",
                "Tailwind CSS",
                "Docker",
                "Caddy",
                "Maven"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Inventory Management System"
              description="Java desktop application for managing product inventory with stock tracking, supplier management, and order processing. Features low stock alerts, report generation, and custom file-based persistence demonstrating strong OOP principles."
              ghLink="https://github.com/kongjiyu/InventoryManagementSystem"
              techStack={[
                "Java",
                "Swing",
                "OOP",
                "File I/O",
                "JSON"
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Academic Performance Management System"
              description="C-based student performance tracking system with GPA calculation, course grade management, and performance analytics. Features menu-driven interface, file-based persistence, and efficient sorting/searching algorithms."
              ghLink="https://github.com/kongjiyu/Academic-Performance-Management-System-APMS-"
              techStack={[
                "C",
                "Data Structures",
                "Algorithms",
                "File I/O",
                "GCC"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
