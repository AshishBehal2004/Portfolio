
import React, { Component } from 'react';

export default function NavigationBar(){
    return(
        <nav>
            <div className='navbar-left'>
                <ul className='nav-links'>
                    <li><a href="./Hero">Hero</a></li>
                    <li><a href="./Product">Product</a></li>
                    <li><a href="./Experience">Experience</a></li>
                    <li><a href="./Skills">Skills</a></li>
                    <li><a href="./Project">Project</a></li>
                    <li><a href="./Contact">Contact</a></li>
                    
                </ul>
            </div>
        </nav>

    );
}
