import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){
    return(
        <div>
        <ul>
        <Link to='/'><div style={{fontSize:'30px', color:'black', width:'10px'}}><span class="fa fa-home" style={{width:'10%'}}></span></div></Link>
        </ul>
        </div>
    )
}

export default Navbar;
