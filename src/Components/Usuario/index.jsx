import './style.css'
import '../../../src/reset.css'
import IcoCatana from '../../assets/icocatanacomics.png'

export default function Usuario() {
    return (
        <div class="sb-profile-info">
            <div>
                <img src={IcoCatana} />
            </div>
            <div class="profile-user-and-name">
                <h1>catanacomics</h1>
                <h2>Catana</h2>
            </div>
        </div>
    );
}