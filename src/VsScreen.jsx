import FiveGifs from "./FiveGifs"

export default function VsScreen({searchTerm1, searchTerm2}) {
    

    return (
        <div>
            <h2>{searchTerm1 + ' vs ' + searchTerm2}</h2>
            <button>{searchTerm1} are the best!</button>
            <button>{searchTerm2} are better!</button>
            <FiveGifs searchTerm={searchTerm1}/>
            <FiveGifs searchTerm={searchTerm2}/>
        </div>
    )
}