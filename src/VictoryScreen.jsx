import React from "react"
import './VictoryScreen.css'

export default function VictoryScreen({ winner, onClose }) {
    return (
        <div className="popup-container">
          <div className="popup">
            <h2>{winner.charAt(0).toUpperCase() + winner.slice(1)} win! They are the champions!</h2>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      )
    }