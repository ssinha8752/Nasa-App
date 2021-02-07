import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './Landing.css'

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
        <span>
        <Navbar/>
        <div className="nasa-pic">
        <img 
            src={photoData.url}
            alt={photoData.title}
        />
        <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
        </div>
        </div>
        </span>
    );
}

export default Landing;