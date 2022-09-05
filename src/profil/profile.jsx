import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img1 from "../iconPro/img1.png";
import img2 from "../iconPro/img2.png";
import img3 from "../iconPro/img3.png";
import img4 from "../iconPro/img4.png";
import img5 from "../iconPro/img5.png";
import img6 from "../iconPro/img6.png";
import profile from "../../src/iconPro/pf1.png";
import pcs from "./profile.module.css";
function Profile() {
  return (
    <Container style={{ background: "red" }} className={pcs.container}>
      <Row className={pcs.diva}>
        <div className={pcs.divb}>
          <Col className={pcs.divc}>
            <div>
              <h2>Personal info</h2>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img3} alt="" />
              </div>
              <div>
                <h5>Radif Ganteng</h5>
                <span>Full name</span>
              </div>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5>radifgans@gmail.com</h5>
                <span>Email</span>
              </div>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img5} alt="" />
              </div>
              <div>
                <h5>Active</h5>
                <span>Status</span>
              </div>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img1} alt="" />
              </div>
              <div>
                <h5>Male</h5>
                <span>Gender</span>
              </div>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img6} alt="" />
              </div>
              <div>
                <h5>0812-8623-8911</h5>
                <span>Mobile phone</span>
              </div>
            </div>
            <div className={pcs.dive}>
              <div className={pcs.divf}>
                <img src={img4} alt="" />
              </div>
              <div>
                <h5>Perumahan Permata Bintaro Residence C-3</h5>
                <span>Address</span>
              </div>
            </div>
          </Col>
          <Col className={pcs.cdp}>
            <Card
              style={{
                width: "18rem",
                background: "#1F1F1F",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={profile} />
              <Button
                variant="danger"
                style={{ marginTop: "20px", marginLeft: "0" }}
              >
                Change Photo Profile
              </Button>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default Profile;
