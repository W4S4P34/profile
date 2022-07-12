import React from 'react'
// import { Link } from 'react-router-dom'

import Dialogue from './components/Dialogue'

import './index.css'

const Intro = (props) => {
    return (
        <div id='intro-dialogue-container' className='container-fluid'>
            <Dialogue />
        </div>
    )
}

export default Intro