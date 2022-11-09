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
            {stories.map(story => (
                <Story 
                userName={story.userName} 
                icon={story.icon}
                />
            ))}
            <div className="arrow-icon">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

let stories = [
    {
        id: 1,
        userName: "9gag",
        icon: Ico9gag,
    },
    {
        id: 2,
        userName: "meowed",
        icon: IcoMeowed,
    },
    {
        id: 3,
        userName: "barked",
        icon: IcoBarked,
    },
    {
        id: 4,
        userName: "nathanwpy...",
        icon: IcoNathan,
    },
    {
        id: 5,
        userName: "wawawiwac...",
        icon: IcoWawa,
    },
    {
        id: 6,
        userName: "respondeai",
        icon: IcoResponde,
    },
    {
        id: 7,
        userName: "filomoderna",
        icon: IcoFiloMod,
    },
    {
        id: 8,
        userName: "memeriagour",
        icon: IcoMemeria,
    },
]