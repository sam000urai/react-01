import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, ALL_DELETE, DELETE_EVENT } from '../actions/index';
import reducer from '../reducers/index';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [comment, setComment] = useState('');
    const addevent_handler = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_EVENT,
            title,
            body,
            comment
        });
        setTitle('');
        setBody('');
        setComment('');
    };

    const deleteevent_handler = (id) => {
        dispatch({
            type: DELETE_EVENT,
            id: id
        });
    };

    const alldelete_handler = (e) => {
        e.preventDefault();
        dispatch({
            type: ALL_DELETE,
            title,
            body,
            comment
        });
        setTitle('');
        setBody('');
        setComment('');
    };



    return (
        <div>
            <div>ComponentB</div>
            <Link to="componentc">ComponentCへ移動</Link>
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={addevent_handler}>
                    イベント作成
                </Button>
                <Button variant="danger" onClick={alldelete_handler}>
                    イベント全削除
                </Button>

            </Form>

            <h1>Table</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>comment</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>{data.comment}</td>
                                <td>
                                    <Button variant="danger" onClick={() => deleteevent_handler(data.id)}>
                                        削除
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default ComponentB;