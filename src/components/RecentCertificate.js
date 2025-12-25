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
                src="/cert/Dicoding Cloud Practitioner Essentials AWS.webp"
                alt="AWS Beginner"
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
                src="/cert/Dicoding Architecting on AWS.webp"
                alt="AWS Intermediate"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>AWS Intermediate</Card.Title>
                <Card.Text className="text-start">
                Mid-level certification in cloud computing technology with output target as solutions architect that refers to AWS' international competency standards.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Dicoding Memulai Pemrograman C.webp"
                alt="C Language Beginner"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>C Language Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification of C programming language material with online IDE using Glot.io and Replit.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Dicoding Memulai Pemrograman Dart.webp"
                alt="Dart Language Beginner"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Dart Language Beginner</Card.Title>
                <Card.Text className="text-start">
                Fundamental certification of C programming language material with online IDE using Glot.io and Replit.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Cisco DevNet Associate.webp"
                alt="Cisco DevNet Associate"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Cisco DevNet Associate</Card.Title>
                <Card.Text className="text-start">
                Cisco verifies the earner of this badge successfully completed the DevNet Associate course, completed 25+ hands-on labs using a virtual lab environment and achieved this student level credential. The holder of this credential has a broad understanding in the areas of Python coding, using Linux, Cisco DevNet, Software Development and Design, Understanding and Using APIs, Network Fundamentals, Application Deployment and Security, Infrastructure and Automation and Cisco Platforms and Development.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
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
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Kodekloud CKA.webp"
                alt="Certified Kubernetes Administrator"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Certified Kubernetes Administrator</Card.Title>
                <Card.Text className="text-start">
                The CKA was created by the Linux Foundation and the Cloud Native Computing Foundation as a part of their ongoing effort to help develop the Kubernetes ecosystem. The exam is online, proctored, performance-based test that requires solving multiple tasks from a command line running Kubernetes.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Kodekloud CKS.webp"
                alt="Certified Kubernetes Security"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Certified Kubernetes Security</Card.Title>
                <Card.Text className="text-start">
                The CKS was created by the Linux Foundation and the Cloud Native Computing Foundation as a part of their ongoing effort to help develop the Kubernetes ecosystem. The exam is online, proctored, performance-based test that requires solving multiple tasks from a command line running Kubernetes.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Kodekloud Docker Training hands-on-lab.webp"
                alt="Docker Training"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Docker Training</Card.Title>
                <Card.Text className="text-start">
                This course introduces Docker to an Absolute Beginner using really simple and easy-to-understand lectures. Followed by demos showing how to set up and get started with Docker. The coding exercises that accompany this course will help practice Docker commands develop on our own images using Dockerfiles and practice Docker Compose.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Kodekloud Kustomize Kubernetes.webp"
                alt="Kustomize Kubernetes"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Kustomize Kubernetes</Card.Title>
                <Card.Text className="text-start">
                Kustomize provides developers a declarative way to create variations in their Kubernetes configs by creating overlays. By using these overlays a list of changes/modifications can be applied to the base configuration. A layered solution like this can be leveraged, the original base configuration can remain untouched.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Kodekloud Learning Linux Basic.webp"
                alt="Learning Linux Basic"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Learning Linux Basic</Card.Title>
                <Card.Text className="text-start">
                In the cloud and DevOps world, many of the new tools are developed and used in Linux environments first before they are made available on Windows. Similarly, automation tools like Ansible are required to be installed in a Linux environment. Even though Ansible can manage windows systems as target machines, a Linux system is required to be the Ansible controller.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Digitalent DevNet Proacademy.webp"
                alt="Digitalent DevNet ProA"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Digitalent DevNet ProA</Card.Title>
                <Card.Text className="text-start">
                DevNet Associate teaches the best practice of modern software development practices and DevOps, to understand them and learn how to use APIs securely, and how to automate network operations using those APIs.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/GCP Managing Cloud Infrastructure with Terraform.webp"
                alt="Manage Cloud with Terraform"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Manage Cloud with Terraform</Card.Title>
                <Card.Text className="text-start">
                Terraform certification is designed to provide an in-depth understanding of cloud-based infrastructure management using Terraform with GCP. Participants will study theory, practice, and direct implementation in managing modern infrastructure. This program aims to print professionals who are able to integrate automation, efficiency, and security in cloud management.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Data Science Brainmatics.webp"
                alt="Data Science"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Data Science</Card.Title>
                <Card.Text className="text-start">
                This training discusses the methods and platforms used in data science. Training also discusses research in the field of data science that has a contribution to knowledge.
                </Card.Text>
            </Card.Body>
          </div>
          </Card>
          </Col>
{/*  */}
{/*  */}
          <Col md={6} className="cert_wrapper">
          <Card className="cert_list">
              {/* IMAGE OPTIMIZED */}
            <div className="cert-img-wrapper">
              <Image
                src="/cert/Cloud Computing Brainmatics.webp"
                alt="Cloud Computing"
                loading="lazy"
                decoding="async"
                className="cert-img"
              />
            </div>
          <div className="bg-dark text-white">
          <Card.Body className="text-center cert_para">
              <Card.Title>Data Science</Card.Title>
                <Card.Text className="text-start">
                Cloud-based server management practices using AWS. Includes case study limitations related to initial configuration in an AWS environment, the use of IAM for AWS security, the implementation of autoscaling using EC2, and the use of Cloud Watch and SNS for AWS monitoring.
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