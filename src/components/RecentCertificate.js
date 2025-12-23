import {Card, Col, Row, Button, Container, Image} from "react-bootstrap"
// import dicodingCert1 from "../assets/cert/Dicoding Cloud Practitioner Essentials AWS.png"
// import dicodingCert2 from "../assets/cert/Dicoding Architecting on AWS.png"
// import dicodingCert3 from "../assets/cert/Dicoding Memulai Pemrograman C.png"
// import dicodingCert4 from "../assets/cert/Dicoding Memulai Pemrograman Dart.png"
// import alibabaCloudCert1 from "../assets/cert/Alibaba Cloud Certified Associate.png"
// import ciscoCert1 from "../assets/cert/Cisco DevNet Associate.png"
// import kodekloudCert1 from "../assets/cert/Kodekloud CKA.png"
// import kodekloudCert2 from "../assets/cert/Kodekloud CKS.png"
// import kodekloudCert3 from "../assets/cert/Kodekloud Docker Training hands-on-lab.png"
// import kodekloudCert4 from "../assets/cert/Kodekloud Kustomize Kubernetes.png"
// import kodekloudCert5 from "../assets/cert/Kodekloud Learning Linux Basic.png"
// import digitalentCert1 from "../assets/cert/Digitalent DevNet Proacademy.png"
// import gcpCert1 from "../assets/cert/GCP Managing Cloud Infrastructure with Terraform.png"
// import brainmaticsCert1 from "../assets/cert/Data Science Brainmatics.png"
// import brainmaticsCert2 from "../assets/cert/Cloud Computing Brainmatics.png"
// import wallstreetCert from "../assets/cert/Wallstreet Devops Fullstack Web Development.png"

const RecentCertificate = () => {
    return (
      <div className="recent_cert_title"> Course Certificate
      <Container className="mt-3">
        <Row>
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Dicoding Architecting on AWS.webp"
                alt="AWS Beginner Certificate"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>AWS Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification in cloud computing with reference to AWS' international competency standards.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Alibaba Cloud Certified Associate.webp"
                alt="AWS Beginner Certificate"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Alibaba Cloud Associate</Card.Title>
                <Card.Text className="text-start">
                Alibaba Cloud Certification Associate. ACA is a certification designed for those who can use Alibaba Cloud Computing products. It covers all of Alibaba Cloud's core products from computing and storage, to networking and security.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
        </Row>
      </Container>
      </div>
            )
}

export default RecentCertificate