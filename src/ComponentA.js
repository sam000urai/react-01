import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Link } from 'react-router-dom';
const ComponentA = () => {
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
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};
export default ComponentA