import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){
    return(
        <div>
        <ul>
        <Link to='/'><div style={{fontSize:'50px', color:'black'}}><span class="fa fa-home"></span></div></Link>
        </ul>
        </div>
    )
}

export default Navbar;
