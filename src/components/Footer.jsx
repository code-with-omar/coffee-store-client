import { Col, Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import MessageUs from "./MessageUs";
import './css/footer.css'

const Footer = () => {
    return (
        <Container fluid className="footer-wrap">
            <Container>
                <Row ms={1} md={2}>
                    <Col>
                        <Contact></Contact>
                    </Col>
                    <Col>
                        <MessageUs></MessageUs>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;