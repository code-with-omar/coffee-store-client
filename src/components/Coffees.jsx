import { Card, Col, Row } from "react-bootstrap";
import View from "../../public/images/view.png"

import Edit from "../../public/images/edit.png"
import Del from "../../public/images/delete.png"
import { Link, } from "react-router-dom";


const Coffees = ({ coffee }) => {
    const { name, nameOfChef, supplier, taste, category, details, photo } = coffee
    console.log(coffee)
    return (

        <Col >
            <Card>
                <Row>
                    <Col>
                        {
                            <img src={photo} />
                        }
                    </Col>
                    <Col>
                        <p>Name: {name}</p>
                        <p>Chef: {nameOfChef}</p>
                        <p>Test: {taste}</p>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Link to="/edit"><img src={Edit} /></Link>
                        <Link to="/view"><img src={View} /></Link>
                        <Link to="/delete"><img src={Del} /></Link>
                    </Col>

                </Row>
            </Card >
        </Col >
    );
};

export default Coffees;