import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Hero(props){
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-centre py-5">
                    <Col md={10} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                        { props.subTitle && <h1 className="display-4 font-weight-light">{props.subTitle}</h1>}
                    </Col>
                </Row>
            </Container> 
        </Jumbotron>
    );
}
export default Hero;