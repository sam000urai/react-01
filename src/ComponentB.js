import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const ComponentB = () => {
    const navigate = useNavigate()
    const backPage = () => {
        navigate("/")
    }
    return (
        <div>
            <div><h1>ComponentB</h1>
                <button onClick={backPage}>ホームへ戻る</button>
            </div>
            <div>ComponentC</div>
            <Link to="/componentC" >ComponentCへ移動</Link>
        </div>
    )
}
export default ComponentB