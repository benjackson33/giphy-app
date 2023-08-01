import { useEffect, useState } from "react"


export default function FiveGifs(props) {
    const [searchResult, setSearchResult] = useState([])

        //const APIKEY = 'DEuhRzBv7TVtJuRh1Mfn7GmbH2QiBN9k'
        
        useEffect(() => {
            
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=DEuhRzBv7TVtJuRh1Mfn7GmbH2QiBN9k&q=${props.searchTerm}&limit=5&rating=g`)
                .then(res => res.json())
                .then((data) => {
                    setSearchResult(data.data)
                })
        }, [props.searchTerm])

    return (
        <div>
        <section>
            {searchResult.map(gif => <img key={gif.id} src={gif.images.original.url} />)} 
        </section>
        </div>
        )
    }