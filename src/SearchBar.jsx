import { useState } from "react"


export default function SearchBar({storeParams}) {
    const [search, setSearch] = useState('')

    const handleTextChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        storeParams(search.split(',').map(item => item.trim()))
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <textarea value={search} onChange={handleTextChange}></textarea>
                <br />
                <button>Compete</button>
            </form>
        </div>
    )
}