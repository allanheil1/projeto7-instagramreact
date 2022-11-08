import './style.css'
import '../../../src/reset.css'

export default function BottomMenu() {
    return (
        <div class="bottom-menu-mobile">
        <div class="bottom-menu-mobile-content">
            <div class="icons-bottom-mobile">
                <ion-icon name="home"></ion-icon>
            </div>
            <div class="icons-bottom-mobile">
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <div class="icons-bottom-mobile">
                <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <div class="icons-bottom-mobile">
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div class="icons-bottom-mobile">
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    </div>
    );
}