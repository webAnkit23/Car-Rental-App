import React from 'react'
import './Card.css'
export default function Card({person}) {
  return (
    <div className="card_section">
        <div className="card_container">
            <img src={person.image}></img>
            <div className="person_info">
            <h3>{person.name}</h3>
            <p>{person.title}</p>
            </div>
        </div>
    </div>
  )
}
