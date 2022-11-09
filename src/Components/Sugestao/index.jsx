import './style.css'
import '../../../src/reset.css'

export default function Sugestao(props) {
    return (
        <div class="suggested-page">
            <div class="icon-profile-suggested-pages">
                <img src={props.icon} />
            </div>
            <div class="page-text">
                <h1>{props.userName}</h1>
                <h2>{props.follow}</h2>
            </div>
            <div class="seguir">
                <h1>Seguir</h1>
            </div>
        </div>
    )
}