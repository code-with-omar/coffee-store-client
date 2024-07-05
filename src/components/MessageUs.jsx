import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import './css/messageus.css'
const MessageUs = () => {
    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const contactMessage = { name, email, messageUser:message };
        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactMessage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'We find your message',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
        form.reset()
    }

    return (
        <Container className="message-wrap" >
            <h2 className="message-heading font-dark-02 font-family fw-400 fs-45">Connect with Us</h2>
            <Form onSubmit={handleContact} className="message-form ">
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Name" required/>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Message" required/>
                </Form.Group>

                <div className="">
                    <Button variant="outline-dark" type="submit" className="message-btn fs-24 font-family fw-400">
                        Send Message
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default MessageUs;
