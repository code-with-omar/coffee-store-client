import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";

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
        <Container className="mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-center" style={{ fontFamily: 'cursive', color: '#3d220d' }}>Connect with Us</h2>
            <Form onSubmit={handleContact}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Message" />
                </Form.Group>

                <div className="text-center">
                    <Button variant="outline-dark" type="submit" style={{ fontFamily: 'cursive', borderColor: '#3d220d', color: '#3d220d' }}>
                        Send Message
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default MessageUs;
