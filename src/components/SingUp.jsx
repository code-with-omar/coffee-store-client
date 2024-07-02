import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "./providers/AuthProvider";
import Swal from "sweetalert2";


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
                console.log(result)
                const users = { email, password }
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
        <Container className="mt-5">
            <h2>Please Sing Up </h2>
            <Form onSubmit={handleSingUp}>
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
                <Form.Group className="mb-3" controlId="basicPassword">
                    <Form.Label>Comfiram Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="comfram Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sing Up
                </Button>
            </Form>
        </Container>
    )

};

export default SingUp;