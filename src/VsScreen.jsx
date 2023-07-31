import FiveGifs from "./FiveGifs"

export default function VsScreen() {
    let searchTerm = 'dogs'

    return (
        <div>
            <FiveGifs searchTerm={searchTerm}/>
        </div>
    )
}