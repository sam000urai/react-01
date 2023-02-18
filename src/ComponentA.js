import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React from 'react';
import { Link } from 'react-router-dom';

const ComponentA = () => {
    const tableData = [
        { id: 1, name: 'aaa', Date: 19921123 },
        { id: 2, name: 'bbb', Date: 19921124 },
        { id: 3, name: 'ccc', Date: 19921125 },
        { id: 4, name: 'ddd', Date: 19921126 },
        { id: 5, name: 'eee', Date: 19921127 }
    ];

    return (
        <div>
            <div>
                <div><h1>Menu</h1></div>
                <p>
                    <div>
                        <span> ● <Link to="/">Home</Link></span>
                    </div>
                    <br />
                    <div>
                        <span> ● <Link to="componentb" >ComponentB</Link></span>
                    </div>
                    <br />
                    <div>
                        <span> ●   <Link to="componentC" >ComponentC</Link></span>
                    </div>
                    <br />
                </p>
            </div >
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.Date}</td>
                                <td>-</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ComponentA;
