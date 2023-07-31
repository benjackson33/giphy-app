import FiveGifs from "./FiveGifs"

export default function VsScreen({searchTerm1, searchTerm2, removeElement}) {

    function handleButton1(){
        removeElement(1)
    }

    function handleButton2(){
        removeElement(0)
    }
    

    return (
        <div>
            <h2>{searchTerm1 + ' vs ' + searchTerm2}</h2>
            <button onClick={handleButton1}>{searchTerm1} are the best!</button>
            <button onClick={handleButton2}>{searchTerm2} are better!</button>
            <FiveGifs searchTerm={searchTerm1}/>
            <FiveGifs searchTerm={searchTerm2}/>
        </div>
    )
}