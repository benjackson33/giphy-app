import { useState } from "react"
import FiveGifs from "./FiveGifs"
import './VsScreen.css'
import VictoryScreen from "./VictoryScreen"

export default function VsScreen({searchTerm1, searchTerm2, removeElement}) {
    

    function handleButton1(){
        removeElement(1)
    }

    function handleButton2(){
        removeElement(0)
    }
    
    // const handleWinner= (selectedWinner) => {
    //     setWinner(selectedWinner)
    // }

return (
    <div className="vs-screen">
        <div className="vs-item">
            <h2>{searchTerm1}</h2>
                <button onClick={handleButton1}>
                    Pick {searchTerm1}
                </button>
            <FiveGifs searchTerm={searchTerm1} />
        </div>
        <div className="vs-item">
            <h3>VS</h3>
        </div>
        <div className="vs-item">
            <h2>{searchTerm2}</h2>
                <button onClick={handleButton2}>
                    Pick {searchTerm2}
                </button>
            <FiveGifs searchTerm={searchTerm2} />

        </div>
        {/* {winner && <VictoryScreen winner={winner} onClose={handleClosePopup}/>} */}
    </div>
)}