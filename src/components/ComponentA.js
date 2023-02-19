import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const ComponentA = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect が呼び出されました。');
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res, 'res check')
            })
    }, []);

    return (
        <div>
            <p>
                <div><h1>Menu</h1></div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/components/componentb">ComponentB</Link>
                <br />
                <Link to="/components/componentc">ComponentC</Link>
                <br />
                <div>count : {count}</div>
            </p>
        </div>
    );
};
export default ComponentA;