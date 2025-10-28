import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCard";
import tarumtLogo from "../../Assets/tarumt-logo.jpg";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white" }}>
          My academic journey and achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="education-card">
            <EducationCard
              institution="Tunku Abdul Rahman University of Management and Technology (TAR UMT)"
              degree="Bachelor of Software Engineering with Honours"
              duration="June 2025 - Present"
              location="Kuala Lumpur, Malaysia"
              status="Currently Enrolled"
              gpa="N/A (Just Started)"
              universityLogo={tarumtLogo}
              highlights={[
                "Continuing from Diploma in Computer Science",
                "Focus on advanced software engineering principles",
                "Expected graduation: 2027"
              ]}
            />
          </Col>

          <Col md={12} className="education-card">
            <EducationCard
              institution="Tunku Abdul Rahman University of Management and Technology (TAR UMT)"
              degree="Diploma in Computer Science"
              duration="June 2023 - May 2025"
              location="Kuala Lumpur, Malaysia"
              status="Completed"
              gpa="3.9 / 4.0"
              universityLogo={tarumtLogo}
              coursework={[
                "Data Structures and Algorithms",
                "Object-Oriented Programming (Java)",
                "Web Development (HTML, CSS, JavaScript)",
                "Database Management Systems (MySQL)",
                "Software Engineering Principles",
                "Mobile Application Development",
                "Computer Architecture and Assembly"
              ]}
              achievements={[
                "Maintained Dean's List throughout diploma program",
                "Excellence in academic performance (CGPA 3.9/4.0)",
                "Completed multiple industry-relevant projects",
                "Strong foundation in full-stack development"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
