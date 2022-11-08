import './style.css'
import '../../../src/reset.css'

import InstagramLogo from '../../assets/logo.png'

export default function NavBar(){
    return(
        <nav>
            <div className="top-menu">
                <div className="top-menu-content">
                    <div className="icon-logo">
                        <div className="icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                        <div className="logo">
                            <img src={InstagramLogo} />
                        </div>
                    </div>

                    <div className="search-bar">
                        <p>Pesquisar</p>
                    </div>
                    <div className="other-pages">
                        <div className="icons">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div className="icons">
                            <ion-icon name="compass-outline"></ion-icon>
                        </div>
                        <div className="icons">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div className="icons">
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-menu-mobile">
                <div className="top-menu-mobile-content">
                    <div className="icon-logo">
                        <div className="icon-mobile">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                    <div className="logo-mobile">
                        <img src={InstagramLogo} />
                    </div>
                    <div className="other-pages">
                        <div className="icons-right">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}