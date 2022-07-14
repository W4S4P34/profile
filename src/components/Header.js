import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../images/logo.png'


const Header = (props) => {
    let location = useLocation()

    function renderHeader() {
        if (location.pathname === '/') return

        return (
            <nav className="navbar theme-d3">
                <div className="d-flex flex-row w-100">
                    <Link className='navbar-brand ms-4 text-reset text-decoration-none' to='/home'>
                        <img
                            src={Logo}
                            alt='logo'
                            width='19.5' height='28.5'
                            className='me-2 align-text-center' />
                        SAMUEL'S PORTFOLIO
                    </Link>
                </div>
            </nav>
        )
    }

    return renderHeader()
}

export default Header