import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){
    return(
        <div>
        <ul>
        <Link to='/'><div><i className="fab fa-accessible-icon"></i></div></Link>
        </ul>
        </div>
    )
}

export default Navbar;
