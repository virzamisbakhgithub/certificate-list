import { Col, Container, Row, Button} from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
            <Container className="d-flex justify-content-start align-items-center">
                <Row>
                    <Col>
                        <div className="title">Hello,</div>
                        <div className="title_big">I'm Virza Misbakh</div>
                        <div className="title_role">Software Engineer</div>
                        <div className="title_role">From Indonesia</div>
                        <div className="title_para_head">I am a person who loves all things about</div>
                        <div className="title_para">Computer Science and Artificial Intelligence.</div>
                        <div className="title_para">Have qualifications in C#, Python and</div>
                        <div className="title_para">Javascript programming languages.</div>
                        
                        <Container>
                            <Row>
                                <Col>
                                    <div className="intro_button">
                                    <Button className="intro_button__skill">Linkedin Profile</Button>
                                    <Button className="intro_button__event">Contact Me</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro