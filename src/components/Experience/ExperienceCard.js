import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard(props) {
  return (
    <Card className="quote-card-view" style={{ marginBottom: "20px" }}>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <Card.Title style={{ color: "#c770f0", fontSize: "1.5em", marginBottom: "5px" }}>
              {props.position}
            </Card.Title>
            <h5 style={{ color: "white", marginBottom: "5px" }}>
              {props.company} • {props.type}
            </h5>
            <p style={{ color: "#a6a6a6", fontSize: "0.9em" }}>
              {props.duration} • {props.location}
            </p>
          </div>
          {/* Company logo or placeholder */}
          {props.companyLogo ? (
            <img 
              src={props.companyLogo} 
              alt={`${props.company} logo`}
              style={{ 
                width: "80px", 
                height: "80px", 
                objectFit: "contain",
                borderRadius: "8px",
                backgroundColor: "white",
                padding: "5px"
              }}
            />
          ) : (
            <div 
              style={{ 
                width: "80px", 
                height: "80px", 
                backgroundColor: "#1a1a2e",
                border: "2px dashed #623686",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8em",
                color: "#623686",
                textAlign: "center",
                padding: "5px"
              }}
            >
              Company Logo
            </div>
          )}
        </div>

        <Card.Text style={{ textAlign: "justify", marginBottom: "15px" }}>
          {props.description}
        </Card.Text>

        {props.responsibilities && (
          <>
            <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Key Responsibilities:</h6>
            <ul style={{ textAlign: "left" }}>
              {props.responsibilities.map((item, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {props.achievements && (
          <>
            <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Achievements:</h6>
            <ul style={{ textAlign: "left" }}>
              {props.achievements.map((item, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Tech Stack Badges */}
        {props.techStack && (
          <div style={{ marginTop: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {props.techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#623686",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.85em",
                  fontWeight: "500",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
