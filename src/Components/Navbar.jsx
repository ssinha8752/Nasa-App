import React from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Navbar(){
    return(
        <div style={{display: 'flex'}}>
        <ul>
        <Link to='/'><div style={{fontSize:'20px', color:'black', width:'10px'}}><span class="fa fa-home" style={{width:'10%'}}></span></div></Link>
        </ul>
        <ul>
        <div style={{fontWeight:700, fontSize:'20px'}}>Have a look at the dynamic picture of the day</div>
        </ul>
        </div>
    )
}

export default Navbar;
