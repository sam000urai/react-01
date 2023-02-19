import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

function ComponentC() {
    const [comments, setComments] = useState([]);

    const handleClick = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
    };

    return (
        <div>
            <div>
                <Link to="/">ComponentAへ移動</Link>
            </div>
            <div>
                <Link to="/components/componentb">ComponentBへ移動</Link>
            </div>
            <Button onClick={handleClick}>Get Data</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment => (
                        <tr key={comment.id}>
                            <td>{comment.postId}</td>
                            <td>{comment.id}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ComponentC;
