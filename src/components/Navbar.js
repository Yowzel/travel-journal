import React from "react"
import wander from "./wander.png"

export default function Navbar() {
    return (
        
        <nav class="navbar">
            <img class="wander--logo" src={wander} alt="world"/>
            <p class="nav-description">My Travel Journal</p>
        </nav>
        
    )
}