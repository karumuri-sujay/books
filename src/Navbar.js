import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import './Search.css';

function Navbar(){
    return(
        <div>
            <ul className="lists-items">
                <Link to="/" className="nav"><li><a href="/">Home</a></li></Link>
                <Link to="/search" className="nav"><li><a href="/search">Search</a></li></Link>
            </ul>
        </div>
    )
}

export default Navbar;