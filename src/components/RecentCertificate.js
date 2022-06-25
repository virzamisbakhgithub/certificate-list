import {Card, Col, Row, Button, Container, Image} from "react-bootstrap"
import dicodingCert1 from "../assets/cert/Dicoding Cloud Practitioner Essentials AWS.png"
import dicodingCert2 from "../assets/cert/Dicoding Architecting on AWS.png"
import dicodingCert3 from "../assets/cert/Dicoding Memulai Pemrograman C.png"
import dicodingCert4 from "../assets/cert/Dicoding Memulai Pemrograman Dart.png"
import brainmaticsCert1 from "../assets/cert/Data Science Brainmatics.png"
import brainmaticsCert2 from "../assets/cert/Cloud Computing Brainmatics.png"
import courseraCert1 from "../assets/cert/Coursera Beginning SQL.png"
import courseraCert2 from "../assets/cert/Coursera Figma Dashboard.png"
import wallstreetCert from "../assets/cert/Wallstreet Devops Fullstack Web Development.png"

const RecentCertificate = () => {
    return (
      <div className="recent_cert_title"> Course Certificate
      <Container className="mt-3">
        <Row>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={dicodingCert1} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>AWS Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification in cloud computing with reference to AWS' international competency standards.
                </Card.Text>
                <a href="https://www.dicoding.com/certificates/JMZV2VJEQZN9" target="_blank">
                  <Button className="btn-cert">Check Credentials</Button>
                </a>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={dicodingCert2} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>AWS Intermediate</Card.Title>
                <Card.Text className="text-start">
                Mid-level certification in cloud computing technology with output target as solutions architect that refers to AWS' international competency standards.
                </Card.Text>
                <a href="https://www.dicoding.com/certificates/1RXYM4D49XVM" target="_blank">
                  <Button>Check Credentials</Button>
                </a>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={dicodingCert3} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>C Language Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification of C programming language material with online IDE using Glot.io and Replit.
                </Card.Text>
                <a href="https://www.dicoding.com/certificates/L4PQMDL82ZO1" target="_blank">
                  <Button>Check Credentials</Button>
                </a>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={dicodingCert4} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Dart Language Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification of C programming language material with IDE IntelliJ IDEA and online IDE using DartPad.
                </Card.Text>
                <a href="https://www.dicoding.com/certificates/L4PQ3MJ04PO1" target="_blank">
                  <Button>Check Credentials</Button>
                </a>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={brainmaticsCert1} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Data Science</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button>Check Credentials</Button>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={brainmaticsCert2} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Cloud Computing</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button>Check Credentials</Button>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={courseraCert1} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>SQL Beginner</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button>Check Credentials</Button>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={courseraCert2} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Figma Beginner</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button>Check Credentials</Button>
            </Card.Body>
          </div>
          </Card>
          </Col>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
          <Image src={wallstreetCert} />
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Fullstack Web Development</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              <Button>Check Credentials</Button>
            </Card.Body>
          </div>
          </Card>
          </Col>
        </Row>
      </Container>
      </div>
            )
}

export default RecentCertificate