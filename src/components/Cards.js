import React from "react"
import pin from "./pin.png"

export default function Card(props) {

    return (
        <div className="card">
          <img src={props.item.imageUrl} className="card--image" alt="bottom"/>
          <div className="card--stats">
              <span>
                <img class="pin--logo" src={pin} alt="pin"/>
              </span>   
              <span class="cards--location">{props.item.location}</span>
              <span>
                <a className="gray" href={props.item.googleMapsUrl}>View On Google Maps</a>
              </span>
              <h1 class="cards--destination">{props.item.title}</h1>
              <p class="cards--date">{props.item.startDate} - {props.item.endDate}</p>
              <p class="cards--description">{props.item.description}</p>
          </div>
      </div>
    )
}