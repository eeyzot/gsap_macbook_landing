import React, { useRef } from 'react'
import { useEffect } from 'react';

const Hero = () => {

        
    const videoRef = useRef();

    useEffect( () => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);




    return (
    
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="Macbook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

        </section>
    )
}

export default Hero