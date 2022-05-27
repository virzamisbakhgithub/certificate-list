import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="light">
                <Container>
                    <Navbar.Brand>My Certificate List</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="navbar_menu">Recent Certificate</Nav.Link>
                        <Nav.Link className="navbar_menu">About Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar