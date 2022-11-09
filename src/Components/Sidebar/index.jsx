import './style.css'
import '../../../src/reset.css'
import IcoCatana from '../../assets/icocatanacomics.png'
import Usuario from '../Usuario';
import Sugestoes from '../Sugestoes';


export default function Sidebar() {
    return (
        <div class = "sidebar">
            <Usuario icon={IcoCatana} userName="catanacomics" name = "Catana"/>
            <Sugestoes/>
            <div class="sb-about">
                <h1>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
                    • Localizações • Contas mais relevantes • Hashtags • Idioma
                </h1>
                <h2>© 2021 INSTAGRAM DO FACEBOOK</h2>
            </div>
        </div>
    );
}