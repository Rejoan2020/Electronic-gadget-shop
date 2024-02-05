import React from "react";
import { Container, Row,Col} from "react-bootstrap";

function FormContainer({ children }){
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs = {6} md = {6} className="p-4">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer