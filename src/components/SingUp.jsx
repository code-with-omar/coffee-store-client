import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "./providers/AuthProvider";
import Swal from "sweetalert2";
import Login from "./../../public/images/more/login.png"
import "./css/singup.css"
import { Link } from "react-router-dom";
const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSingUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const confirmPassword = form.confirmPassword.value;
        createUser(email, password)
            .then(result => {
                console.log(result);
                const createAt = result.user?.metadata?.creationTime
                console.log(createAt)
                const users = { email, createAt: createAt }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-middle",
                                icon: "success",
                                title: "Sign Up successfull",
                                confirmButtonText: 'Okay',

                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
        form.reset()
    }
    return (
        <Container className="sign-up-wrap">
            <h2 className="fw-600 font-family font-dark-02 text-center">Please Sing Up </h2>
            <Row md={2} className="sing-up-contains">
                <Col className="sing-up-image">
                    <img src={Login} alt="" />
                </Col>
                <Col className="sign-up-form">
                    <Form onSubmit={handleSingUp}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <h3 className="fs-16">I you have an account <Link to='/signin' className="sing-up-link">Sing in</Link></h3>
                        <Button variant="primary" type="submit">
                            Sing Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

};

export default SingUp;