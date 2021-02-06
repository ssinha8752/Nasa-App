import React from 'react'
import backgroundVideo from '../assets/Rocket.mp4'
import '../Components/Header.css'
import {useHistory} from 'react-router-dom';

function Header() {
  const history = useHistory();
  function handleOnClick(){
     history.push('/login');
  }
  return (
    <div>
      <video autoPlay loop muted id='video' style={{position:'fixed',zIndex:-1,width:'100%', opacity:1}}>
      <source src={backgroundVideo} type='video/mp4'/>
      </video>
      <div style={{color:"white", textAlign:"center", paddingTop:"5%", fontSize:'50px', fontWeight:700}}>WELCOME TO THE SPACE</div>
      <div class="content">
            <div class="text">Explore It..</div>
            <form action="#">
                <div class="field">
                    <span class="fa fa-user"></span>
                    <input type="text" placeholder="Your name" required/>
                </div>
                <button className="btn" onClick={handleOnClick}>Lets Start</button>
            </form>
        </div>
    </div>
  );
}

export default Header;
