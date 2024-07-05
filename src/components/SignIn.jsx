import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "./providers/AuthProvider";
import Login from "./../../public/images/more/login.png"
import "./css/singup.css"
import { Link } from "react-router-dom";
const SignIn = () => {
    const { singInUser } = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        singInUser(email, password)
            .then(result => {
                const users = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                //update last logged in database
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <Container className="sign-up-wrap">
            <h2 className="fw-600 font-family font-dark-02 text-center">Please Sing In </h2>
            <Row md={2} className="sing-up-contains">
                <Col className="sing-up-image">
                    <img src={Login} alt="" />
                </Col>
                <Col className="sign-up-form">
                    <Form onSubmit={handleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We will never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <h3 className="fs-16">I have not an account <Link to='/singup' className="sing-up-link">Sing Up</Link></h3>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>

    );
};

export default SignIn;