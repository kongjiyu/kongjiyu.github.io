import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate software engineer pursuing my Bachelor of Software Engineering at TAR UMT with a CGPA of 3.9/4.0.
              With hands-on experience in CRM consulting, cloud infrastructure, and full-stack development,
              I specialize in building scalable web applications and helping businesses optimize their systems.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Java, and Python{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Cloud Infrastructure, and CRM Solutions{" "}
                </b>
              </i>
              — with a focus on creating scalable and user-friendly systems.
              <br />
              <br />
              I'm the founder of <b className="purple">K&E Tech Innovations</b>, where I lead digital transformation projects.
              Whenever possible, I love building projects with modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Next.js</b>, and{" "}
                <b className="purple">Firebase</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
