import './style.css'
import '../../../src/reset.css'
import Sugestao from '../Sugestao'
import IcoBadVibes from '../../assets/icobadvibes.png'
import IcoChibirDart from '../../assets/icochibirdart.png'
import IcoRazoes from '../../assets/icorazoes.png'
import IcoAdorable from '../../assets/icoadorableanimals2.png'
import IcoCuteCats from '../../assets/icocutecats.png'

let sugestoes = [
    {
        id: 1,
        icon: IcoBadVibes,
        userName: 'bad.vibes.memes',
        follow: 'Segue você',
    },
    {
        id: 1,
        icon: IcoChibirDart,
        userName: 'chibirdart',
        follow: 'Segue você',
    },
    {
        id: 1,
        icon: IcoRazoes,
        userName: 'razoesparaacreditar',
        follow: 'Novo no Instagram',
    },
    {
        id: 1,
        icon: IcoAdorable,
        userName: 'adorable_animals',
        follow: 'Segue você',
    },
    {
        id: 1,
        icon: IcoCuteCats,
        userName: 'smallcutecats',
        follow: 'Segue você',
    },
]

export default function Sugestoes() {
    return (
        <div class="sb-suggestions">
            <div class="sb-suggestions-header">
                <h1>Sugestões para você</h1>
                <h2>Ver tudo</h2>
            </div>
            <div class="sb-suggestions-pages">
                {sugestoes.map(sugestao => (
                    <Sugestao
                        icon={sugestao.icon}
                        userName={sugestao.userName}
                        follow={sugestao.follow}
                    />
                ))}
            </div>
        </div>
    );
}

