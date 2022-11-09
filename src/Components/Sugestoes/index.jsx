import './style.css'
import '../../../src/reset.css'
import Sugestao from '../Sugestao'
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
                    <Sugestao icon={IcoBadVibes} userName="bad.vibes.memes" follow="Segue você"/>
                    <Sugestao icon={IcoChibirDart} userName="chibirdart" follow="Segue você"/>
                    <Sugestao icon={IcoRazoes} userName="razoesparaacreditar" follow="Novo no Instagram"/>
                    <Sugestao icon={IcoAdorable} userName="adorable_animals" follow="Segue você"/>
                    <Sugestao icon={IcoCuteCats} userName="smallcutecats" follow="Segue você"/>
                </div>
            </div>
    );
}