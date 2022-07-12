import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div align="center">
            <h1>ABOUT</h1>
            <h2>
                <Link to="/">{props.name}'S HOME</Link>
            </h2>
        </div>
    )
}

export default About