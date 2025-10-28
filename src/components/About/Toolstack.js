import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiChatbot, 
  SiFigma, 
  SiNotion, 
  SiPycharm,
  SiXcode,
  SiManjaro
} from "react-icons/si";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">macOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiPycharm fontSize={"24px"} />
        <div className="tech-icons-text">PyCharm</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiXcode fontSize={"24px"} />
        <div className="tech-icons-text">Xcode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiChatbot fontSize={"24px"} />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiChatbot fontSize={"24px"} />
        <div className="tech-icons-text">Claude (Cursor)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiFigma fontSize={"24px"} />
        <div className="tech-icons-text">Figma</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiNotion fontSize={"24px"} />
        <div className="tech-icons-text">Notion</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiManjaro fontSize={"24px"} />
        <div className="tech-icons-text">Manjaro Linux</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
