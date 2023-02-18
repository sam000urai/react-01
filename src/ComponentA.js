import 'bootstrap/dist/css/bootstrap.min.css';
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
        </div >
    );
};
export default ComponentA