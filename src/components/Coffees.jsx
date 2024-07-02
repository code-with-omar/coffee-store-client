import { Button, Card, Col, Row } from "react-bootstrap";
import View from "../../public/images/view.png"

import Edit from "../../public/images/edit.png"
import Del from "../../public/images/delete.png"
import { Link, } from "react-router-dom";
import Swal from "sweetalert2";


const Coffees = ({ coffee }) => {
    const { _id, name, nameOfChef, supplier, taste, category, details, photo } = coffee

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                        <Link to={`update/${_id}`}><img src={Edit} /></Link>
                        <Link to="/view"><img src={View} /></Link>
                        <Link onClick={() => handleDelete(_id)}><img src={Del} /></Link>
                    </Col>

                </Row>
            </Card >
        </Col >
    );
};

export default Coffees;