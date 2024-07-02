import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers)
    return (
        <Container className="mt-5">
            <h2>Total Users {users.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Create time</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;