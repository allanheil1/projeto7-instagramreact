import './style.css'
import '../../../src/reset.css'
import Story from '../Story'
import Ico9gag from '../../assets/ico9gag.png'
import IcoMeowed from '../../assets/icomeowed2.png'
import IcoBarked from '../../assets/icobarked2.png'
import IcoNathan from '../../assets/iconathanwpylestrangeplanet.png'
import IcoWawa from '../../assets/icowawawiwacomics.png'
import IcoResponde from '../../assets/icorespondeai2.png'
import IcoFiloMod from '../../assets/icofilomoderna.png'
import IcoMemeria from '../../assets/icomemeriagourmet.png'

export default function Stories() {
    return (
        <div className="stories-container">
            <Story userName="9gag" icon={Ico9gag}/>
            <Story userName="meowed" icon={IcoMeowed}/>
            <Story userName="barked" icon={IcoBarked}/>
            <Story userName="nathanwpy..." icon={IcoNathan}/>
            <Story userName="wawawiwac..." icon={IcoWawa}/>
            <Story userName="respondeai" icon={IcoResponde}/>
            <Story userName="filomoderna" icon={IcoFiloMod}/>
            <Story userName="memeriagour" icon={IcoMemeria}/>
            <div className="arrow-icon">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}