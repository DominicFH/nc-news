import React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/articles" className="nav-button">
                        Articles Page
                    </Link>
                </li>
                <li>
                    <Link to="/users" className="nav-button">
                        Users Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;