import './style.css'
import '../../../src/reset.css'


export default function Usuario(props) {
    return (
        <div class="sb-profile-info">
            <div>
                <img src={props.icon} />
            </div>
            <div class="profile-user-and-name">
                <h1>{props.userName}</h1>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}