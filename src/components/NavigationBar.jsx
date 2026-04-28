import React, { Component } from 'react';
import '../NavigationBar.css'
export default function NavigationBar(){
    return(
        <nav id="navBar">
            <div className='navbar-left'>
                <ul className='nav-links'>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>

                
            </div>
        </nav>

    );
}
