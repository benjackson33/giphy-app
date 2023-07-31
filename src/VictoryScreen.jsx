export default function VictoryScreen(props) {
    return (
        <div>
            <h2>{props.winner.charAt(0).toUpperCase() + props.winner.slice(1)} win! They are the champions!</h2>
        </div>
    )
}