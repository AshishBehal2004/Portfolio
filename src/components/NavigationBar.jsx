import React, { Component } from 'react';
import '../NavigationBar.css'
export default function NavigationBar(){
    return(
        <nav>
            <div className='navbar-left'>
                <ul className='nav-links'>
                    <li><a href="#hero">Hero</a></li>
                    <li><a href="#about">Product</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                
            </div>
        </nav>

    );
}
