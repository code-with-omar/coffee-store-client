// import { Button } from "bootstrap";
import { Col, Form, Row, Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const nameOfChef = form.nameOfChef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffee = { name, nameOfChef, supplier, taste, category, details, photo }
        console.log(coffee)
        form.reset()
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully uploaded',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <Container className="mt-5">

            <div className="p-4 border rounded bg-light">
                <h2 className="mb-4 text-center">Add New Coffee</h2>
                <p className="text-center mb-4">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here
                </p>
                <Form onSubmit={handleAddCoffee}>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter coffee name" required />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeChef">
                                <Form.Label>Chef</Form.Label>
                                <Form.Control type="text" name="nameOfChef" placeholder="Enter coffee chef" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeSupplier">
                                <Form.Label>Supplier</Form.Label>
                                <Form.Control type="text" name="supplier" placeholder="Enter coffee supplier" required />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeTaste">
                                <Form.Label>Taste</Form.Label>
                                <Form.Control type="text" name="taste" placeholder="Enter coffee taste" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" name="category" placeholder="Enter coffee category" required />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="coffeeDetails">
                                <Form.Label>Details</Form.Label>
                                <Form.Control type="text" name="details" placeholder="Enter coffee details" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="coffeePhoto" className="mb-4">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter photo URL" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Add Coffee
                    </Button>
                </Form>
            </div>
        </Container>

    );
};

export default AddCoffee;