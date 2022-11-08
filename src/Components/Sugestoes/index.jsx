import './style.css'
import '../../../src/reset.css'
import IcoBadVibes from '../../assets/icobadvibes.png'
import IcoChibirDart from '../../assets/icochibirdart.png'
import IcoRazoes from '../../assets/icorazoes.png'
import IcoAdorable from '../../assets/icoadorableanimals2.png'
import IcoCuteCats from '../../assets/icocutecats.png'

export default function Sugestoes() {
    return (
        <div class="sb-suggestions">
                <div class="sb-suggestions-header">
                    <h1>Sugestões para você</h1>
                    <h2>Ver tudo</h2>
                </div>
                <div class="sb-suggestions-pages">
                    <div class="suggested-page">
                        <div class="icon-profile-suggested-pages">
                            <img src={IcoBadVibes} />
                        </div>
                        <div class="page-text">
                            <h1>bad.vibes.memes</h1>
                            <h2>Segue você</h2>
                        </div>
                        <div class="seguir">
                            <h1>Seguir</h1>
                        </div>
                    </div>
                    <div class="suggested-page">
                        <div class="icon-profile-suggested-pages">
                            <img src={IcoChibirDart} />
                        </div>
                        <div class="page-text">
                            <h1>chibirdart</h1>
                            <h2>Segue você</h2>
                        </div>
                        <div class="seguir">
                            <h1>Seguir</h1>
                        </div>
                    </div>
                    <div class="suggested-page">
                        <div class="icon-profile-suggested-pages">
                            <img src={IcoRazoes} />
                        </div>
                        <div class="page-text">
                            <h1>razoesparaacreditar</h1>
                            <h2>Novo no instagram</h2>
                        </div>
                        <div class="seguir">
                            <h1>Seguir</h1>
                        </div>
                    </div>
                    <div class="suggested-page">
                        <div class="icon-profile-suggested-pages">
                            <img src={IcoAdorable} />
                        </div>
                        <div class="page-text">
                            <h1>adorable_animals</h1>
                            <h2>Segue você</h2>
                        </div>
                        <div class="seguir">
                            <h1>Seguir</h1>
                        </div>
                    </div>
                    <div class="suggested-page">
                        <div class="icon-profile-suggested-pages">
                            <img src={IcoCuteCats} />
                        </div>
                        <div class="page-text">
                            <h1>smallcutecats</h1>
                            <h2>Segue você</h2>
                        </div>
                        <div class="seguir">
                            <h1>Seguir</h1>
                        </div>
                    </div>
                </div>
            </div>
    );
}