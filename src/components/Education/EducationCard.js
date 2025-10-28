import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function EducationCard(props) {
  return (
    <Card className="quote-card-view" style={{ marginBottom: "20px" }}>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "15px" }}>
          <div style={{ flex: 1 }}>
            <Card.Title style={{ color: "#c770f0", fontSize: "1.5em", marginBottom: "5px" }}>
              {props.degree}
            </Card.Title>
            <h5 style={{ color: "white", marginBottom: "5px" }}>
              {props.institution}
            </h5>
            <p style={{ color: "#a6a6a6", fontSize: "0.9em" }}>
              {props.duration} • {props.location}
            </p>
            <p style={{ color: "#c770f0", fontSize: "0.95em", fontWeight: "bold" }}>
              {props.status} {props.gpa && `• GPA: ${props.gpa}`}
            </p>
          </div>
          {/* University logo or placeholder */}
          {props.universityLogo ? (
            <img 
              src={props.universityLogo} 
              alt={`${props.institution} logo`}
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
              University Logo
            </div>
          )}
        </div>

        {props.coursework && (
          <>
            <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Relevant Coursework:</h6>
            <ul style={{ textAlign: "left" }}>
              {props.coursework.map((course, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {course}
                </li>
              ))}
            </ul>
          </>
        )}

        {props.achievements && (
          <>
            <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Achievements:</h6>
            <ul style={{ textAlign: "left" }}>
              {props.achievements.map((achievement, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {achievement}
                </li>
              ))}
            </ul>
          </>
        )}

        {props.highlights && (
          <>
            <h6 style={{ color: "#c770f0", marginTop: "15px" }}>Highlights:</h6>
            <ul style={{ textAlign: "left" }}>
              {props.highlights.map((highlight, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {highlight}
                </li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
