import './style.css'
import '../../../src/reset.css'
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
        <div>
            <div className="stories-container">
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={Ico9gag} />
                        </div>
                    </div>
                    <div className="stories-text">9gag</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoMeowed} />
                        </div>
                    </div>
                    <div className="stories-text">meowed</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoBarked} />
                        </div>
                    </div>
                    <div className="stories-text">barked</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoNathan} />
                        </div>
                    </div>
                    <div className="stories-text">nathanwpy...</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoWawa} />
                        </div>
                    </div>
                    <div className="stories-text">wawawiwac...</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoResponde} />
                        </div>
                    </div>
                    <div className="stories-text">respondeai</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoFiloMod} />
                        </div>
                    </div>
                    <div className="stories-text">filomoderna</div>
                </div>
                <div className="single">
                    <div className="stories">
                        <div className="img-stories">
                            <img src={IcoMemeria} />
                        </div>
                    </div>
                    <div className="stories-text">memeriago</div>
                </div>
                <div className="arrow-icon">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>
    );
}