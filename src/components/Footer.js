import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Footer.css'


const Footer = (props) => {
    let location = useLocation()

    function renderFooter() {
        if (location.pathname === '/') return

        return (
            <div className='d-flex w-100 theme-d3'>
                <div id='copyright-label' className='ms-4 my-3'>
                    Copyright © 2022 Samuel La
                </div>
            </div>
        )
    }

    return renderFooter()
}

export default Footer