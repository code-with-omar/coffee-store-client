import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (_id) => {
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
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The user has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== _id);
                            setUsers(remainingUsers);
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "User could not be deleted.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: "An error occurred while deleting the user.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <Container className="mt-5">
            <h2>Total Users {users.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Email</th>
                        <th>Create Time</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt || "N/A"}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;
