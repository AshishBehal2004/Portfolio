import React, { Component, useEffect, useState } from 'react';
import './NavigationBar.css'
export default function NavigationBar(){

    const [toggle, setToggle ] = useState(false);
    

    function scrolling(){
        const scroll_value = window.scrollY;
        if(scroll_value > 50){
            setToggle(true);
        }
        else{
            setToggle(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', scrolling);
        return () => removeEventListener('scroll',scrolling);
    },[])
    
    return(
        <nav id="navBar" className={toggle ? "navBar visible " : "navBar hidden"}>
            <div className="logo">AB</div>
            <div className='navbar-left'>
                <ul className='nav-links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>                
            </div>
        </nav>

    );
}
