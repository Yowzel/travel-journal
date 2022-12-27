import React from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import data from "./data"


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = data.map(item => {
        return (
            <Cards
                key = {item.id}
                item = {item}
            />
        )

    }) 

    return (
        <div>
            <Navbar/>
            <section>
                {cards}
            </section>
        </div>
        
        
             
    )
}