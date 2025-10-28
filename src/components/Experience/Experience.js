import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import drFactoryLogo from "../../Assets/dr-factory-logo.png";
import globalGenesisLogo from "../../Assets/global-genesis-logo.jpeg";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here's my professional journey and the roles I've undertaken.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="experience-card">
            <ExperienceCard
              company="K&E Tech Innovations"
              position="Founder & Project Consultant"
              duration="2025 - Present"
              location="Malaysia"
              type="Self-employed / Founder"
              description="Founded a digital solutions company specializing in web development and digital transformation. Leading end-to-end project delivery from client consultation to deployment, managing both technical implementation and freelance team coordination."
              responsibilities={[
                "Architecting and developing full-stack web applications using modern tech stack",
                "Consulting with clients to gather requirements and propose technical solutions",
                "Managing freelance development teams across multiple concurrent projects",
                "Implementing SEO strategies and analytics tracking for client websites",
                "Handling technical troubleshooting and quality assurance"
              ]}
              achievements={[
                "Successfully delivered multiple landing page websites with WordPress",
                "Built dynamic web systems using React and Firebase backend",
                "Integrated Google Analytics for client performance tracking",
                "Achieved 100% client satisfaction through responsive support"
              ]}
              techStack={["React", "WordPress", "Tailwind CSS", "Firebase", "Git", "Google Analytics"]}
            />
          </Col>

          <Col md={12} className="experience-card">
            <ExperienceCard
              company="Dr.Factory"
              position="CRM Consultant"
              duration="March 2025 - June 2025"
              location="Malaysia"
              type="Full-time Contract"
              companyLogo={drFactoryLogo}
              description="Provided end-to-end CRM consultation services to diverse clients, specializing in system configuration, data migration, and user training to maximize CRM adoption and ROI."
              responsibilities={[
                "Conducting comprehensive CRM needs assessment for clients across industries",
                "Managing complete data migration processes with data integrity validation",
                "Customizing CRM workflows to match client business processes",
                "Delivering hands-on training sessions for end-users and administrators",
                "Providing ongoing support and optimization recommendations"
              ]}
              achievements={[
                "Successfully migrated 500+ customer records with zero data loss",
                "Customized CRM solutions for 5+ different client industries",
                "Achieved 85% user adoption rate through effective training programs",
                "Reduced client onboarding time by 40% through streamlined processes"
              ]}
              techStack={["CRM Systems", "MySQL", "Data Migration", "Excel"]}
            />
          </Col>

          <Col md={12} className="experience-card">
            <ExperienceCard
              company="Global Genesis"
              position="CRM & Cloud Intern"
              duration="September 2024 - January 2025"
              location="Malaysia"
              type="Internship"
              companyLogo={globalGenesisLogo}
              description="Gained hands-on experience in cloud infrastructure and CRM implementation, supporting enterprise clients with Oracle Cloud deployments and customer relationship management solutions."
              responsibilities={[
                "Configuring Oracle Cloud Compute infrastructure for production CRM deployments",
                "Leading database configuration and CRM data migration initiatives",
                "Analyzing customer requirements and proposing cloud-integrated CRM solutions",
                "Participating in client meetings for technical requirement gathering",
                "Supporting sales team with technical presentations and demonstrations"
              ]}
              achievements={[
                "Successfully deployed CRM system on Oracle Cloud Infrastructure for 3 clients",
                "Led data migration project handling 10,000+ customer records",
                "Closed a CRM software deal valued at RM 50,000 through technical consultation",
                "Reduced cloud infrastructure costs by 30% through optimization",
                "Received commendation for exceptional client communication skills"
              ]}
              techStack={["Oracle Cloud", "CRM Systems", "MySQL", "Shell Script"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
