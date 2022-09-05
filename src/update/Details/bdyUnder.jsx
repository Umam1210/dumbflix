import { Card, Col, Container, Row } from "react-bootstrap";
import img from "../../image/japan.png";
import csslide from "./slideDetails.module.css";
import video1 from "../../video/video1.mp4";

function BdyUnder() {
  return (
    <div style={{ background: "black", paddingTop: "50px" }}>
      <Container>
        <Row style={{ width: "100%", paddingBottom: "20px" }}>
          <Col className="d-flex" md={8}>
            <Card
              style={{
                width: "100%",
                border: "none",
                background: "black",
                color: "white",
              }}
            >
              <Card.Body className="p-2 d-flex" style={{ width: "100%" }}>
                <div>
                  <img src={img} alt="" />
                </div>
                <div className={csslide.leftSlide}>
                  <Card.Title style={{ fontSize: "48px" }}>
                    The Witcher
                  </Card.Title>
                  <div className="d-flex w-6 ">
                    <p className="pt-4 mx-4">2017</p>
                    <span
                      className="px-3 m-4  border border-secondary  rounded"
                      style={{
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      TV Series
                    </span>
                  </div>
                  <Card.Text className="mt-4 m-0">
                    It is based on the book series of the same name by Polish
                    writer Andrzej Sapkowski. The Witcher follows the story of
                    Geralt of Rivia, a solitary monster hunter, who struggles to
                    find his place in a world where people often prove more
                    wicked than monsters and beasts.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className={csslide.vdSlide}>
            <Card className={csslide.conSlide}>
              <video src={video1} alt="" className={csslide.image1} />
              <p>The Witcher : Episode 1</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BdyUnder;
