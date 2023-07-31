import { useState } from "react"
import FiveGifs from "./FiveGifs"
import './VsScreen.css'
import VictoryScreen from "./VictoryScreen"

export default function VsScreen({searchTerm1, searchTerm2, removeElement}) {
    const [winner, setWinner] = useState(null)

    function handleButton1(){
        removeElement(1)
    }

    function handleButton2(){
        removeElement(0)
    }
    
    const handleWinner= (selectedWinner) => {
        setWinner(selectedWinner)
    }

    const handleClosePopup = () => {
        setWinner(null)
    }

return (
    <div className="vs-screen">
        <div className="vs-item">
            <h2>{searchTerm1}</h2>
            <FiveGifs searchTerm={searchTerm1} />
            {!winner && (
                <button onClick={() => handleWinner(searchTerm1)}>
                    Pick {searchTerm1}
                </button>
            )}
        </div>
        <div className="vs-item">
            <h3>VS</h3>
        </div>
        <div className="vs-item">
            <h2>{searchTerm2}</h2>
            <FiveGifs searchTerm={searchTerm2} />
            {!winner && (
                <button onClick={() => handleWinner(searchTerm2)}>
                    Pick {searchTerm2}
                </button>
            )}
        </div>
        {winner && <VictoryScreen winner={winner} onClose={handleClosePopup}/>}
    </div>
)}