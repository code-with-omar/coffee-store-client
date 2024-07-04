
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const View = () => {
    const coffeeLoading = useLoaderData()
    const [coffee, setCoffee] = useState(coffeeLoading)
    const { _id, name, nameOfChef, supplier, taste, category, details, photo } = coffee

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <img src={photo} alt="Coffee Cup" className="img-fluid" />
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Niceties</Card.Title>
                            <Card.Text>
                                <strong>Name:</strong>{name} <br />
                                <strong>Chef:</strong> {nameOfChef} <br />
                                <strong>Supplier:</strong> {supplier} <br />
                                <strong>Taste:</strong> {taste} <br />
                                <strong>Category:</strong> {category} <br />
                                <strong>Details:</strong> {details}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default View;