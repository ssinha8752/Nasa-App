import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './Landing.css'
import wallpaper from "../assets/landing.jpg";

function Landing(){

    const [photoData, setPhotoData] = useState(null)

    useEffect (()=>{
        fetchPhoto();

        async function fetchPhoto(){
            const res= await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=zQQigcCrtZ7mcVM1M3IHYjNajMcKLum3oGgf0ulz'
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;
    return (
        <div>
        <Navbar/>
        <div className="nasa-pic image">
        <img 
            src={photoData.url}
            alt={photoData.title}
        />
        <div style={{color:"white", height:'50%'}}>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
        <p className="note">( Please note that the Dynamic picture pf the day changes according to the US time  )
        <br/><br/>* Loading of the picture depends on the Internet connection
        </p>
        </div>
        </div>
        </div>
    );
}

export default Landing;