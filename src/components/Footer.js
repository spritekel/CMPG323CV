import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Container from 'react-bootstrap/Container';



function Footer(){
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        SPRITE is the name and hacking is my game.
                    </Col>
                    <img src="https://tryhackme-badges.s3.amazonaws.com/SpritePop.png" alt="TryHackMe"/>
                    <img src="http://www.hackthebox.eu/badge/image/200250" alt="Hack The Box"/>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made with love by Kelvin Popovic
                    </Col>
                </Row>
            </Container>            
        </footer>
    );
}
export default Footer;