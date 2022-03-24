import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

import './404.scss'

class NotFound404 extends React.Component{
    
    render(){
        return(
            <Container style={{height: "100vh"}}>
                <Row className="row-center text-center">
                    <Col md={4}>
                        <img src="/extraordinary.svg" alt="Antique Slot Machine Artwork" className="image404"/>
                    </Col>
                    <Col md={4}>
                        <h1>{"404"}</h1>
                        <p>Uh-oh... It looks like the page you're looking for ain't here, chief!</p>
                        <Button variant="danger" href="/">Go Back Home</Button>
                    </Col>
                    <Col md={4}>
                        <img src="/extraordinary.svg" alt="Antique Slot Machine Artwork" className="image404"/>
                    </Col>
                </Row>
            </Container>
        );
    }  
}

export default NotFound404