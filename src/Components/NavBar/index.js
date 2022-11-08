import '../../../src/style.css'

import InstagramLogo from '../../arquivos1/logo.png'

export function NavBar(){
    return(
        <nav>
            <div class="top-menu">
                <div class="top-menu-content">
                    <div class="icon-logo">
                        <div class="icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                        <div class="logo">
                            <img src={InstagramLogo} />
                        </div>
                    </div>

                    <div class="search-bar">
                        <p>Pesquisar</p>
                    </div>
                    <div class="other-pages">
                        <div class="icons">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="icons">
                            <ion-icon name="compass-outline"></ion-icon>
                        </div>
                        <div class="icons">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="icons">
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-menu-mobile">
                <div class="top-menu-mobile-content">
                    <div class="icon-logo">
                        <div class="icon-mobile">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                    <div class="logo-mobile">
                        <img src={InstagramLogo} />
                    </div>
                    <div class="other-pages">
                        <div class="icons-right">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}