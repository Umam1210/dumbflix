import "../css/card1.css"
import { Card, Col, Row } from 'react-bootstrap';
import image from '../image/Rectangle 6.jpg'
import image1 from '../image/p3.png'
import image2 from '../image/game.png'
import image3 from '../image/money.png'
import image4 from '../image/japan.png'
import image5 from '../image/arrow.png'
import image6 from '../image/thegodfather.png'
import image7 from '../image/batman.png'
import image8 from '../image/avenger.png'
import image9 from '../image/joker-1.png'
import image10 from '../image/parasite.png'
import image11 from '../image/chernobyl.png'


function Card1() {
  return (
    <div className="bg-dark">
      <h4 className="ms-3 ">TV Series</h4>
      
      <Row xs={1} md={6} className="g-4 m-2">
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image1} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">Persona 3 The Movie</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image2} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">Game Of Thrones</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image3} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">Money Heist</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image4} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">Touch</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image5} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">Arrow</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
    </Row>
    <h4 className="ms-3">Movies</h4>
    <Row xs={1} md={6} className="g-4 m-2">
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image6} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image7} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image8} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image9} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image10} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
        <Col>
          <Card className="ms-3 bg-dark mb-4 border border-0">
            <Card.Img variant="top" src={image11} className="rounded-2" />
              <Card.Title className="text-white ms-0 mt-2">The Witcher</Card.Title>
              <Card.Text className="text-white ms-0 mt-0">2019</Card.Text>
          </Card>
        </Col>  
    </Row>
      
     
    </div>
  )
}

export default Card1;