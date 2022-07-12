import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div align="center">
            <h1>{props.name}'S HOME</h1>
            <h2>
                <Link to="/about">ABOUT</Link>
            </h2>
        </div>
    )
}

export default Home