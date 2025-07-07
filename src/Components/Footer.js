import { Component } from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Link from 'react-bootstrap/NavLink'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer" fixed="bottom">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Link href="https://www.linkedin.com/in/mandeep-singh-dhillon/" className="social"><AiOutlineLinkedin /> </Link>
                        <Link href="https://github.com/mandeep1580" className="social"><AiOutlineGithub /> </Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="copyright" > &copy; 2025 Mandeep Dhillon </p>
                    </Col>
                </Row>
            </footer>
        )
    }
}
