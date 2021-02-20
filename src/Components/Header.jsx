import React, { useState } from 'react'
import backgroundVideo from '../assets/Rocket.mp4'
import '../Components/Header.css'
import {useHistory} from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

function Header() {
  const history = useHistory();
  
  function handleOnClick(){
    history.push('/login');
 }
 
 function handleOnChange(e){
  console.log(e.target.value)
  setName({[e.target.name]:e.target.value })
 }

 const [name,setName] = useState({name:''})

  return (
    <div>
      <video autoPlay loop muted id='video' style={{position:'absolute', zIndex:-1, top:'0px', left:'0px', height:'100%', width:'100%', objectFit:'cover', opacity:'1'}}>
      <source src={backgroundVideo} type='video/mp4'/>
      </video>
      <div style={{color:"white", textAlign:"center", paddingTop:"5%", fontSize:'50px', fontWeight:700}}>WELCOME TO THE SPACE</div>
      <div class="content">
            <div className="text">Explore It..</div>
            <form action="#">
                <div className="field">
                    <span class="fa fa-user"></span>
                    <input type="text" placeholder="Your name" name='name' required onChange={handleOnChange} value={name.name}/>
                </div>
                <button className="btn" onClick={handleOnClick}>Lets Start</button>
            </form>    
        </div> 
        <div class="signature">Made by Shubham &copy;</div>
    </div>
  );
}

export default connect()(Header);
