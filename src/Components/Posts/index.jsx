import './style.css'
import '../../../src/reset.css'

import IcoMeowed from '../../assets/icomeowed.png'
import FotoGato from '../../assets/fotogato.png'
import IcoBarked from '../../assets/icobarked.png'
import FotoCachorro from '../../assets/fotocachorro.png'
import IcoAdorable from '../../assets/icoadorableanimals.png'
import IcoResponde from '../../assets/icorespondeai.png'
import FotoGato2 from '../../assets/fotogato2.png'

export default function Posts() {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-header">
                    <div className="icon-profile">
                        <img src={IcoMeowed} />
                    </div>
                    <h1>meowed</h1>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <img className="post-photo" src={FotoGato} />
                <div className="post-under">
                    <div className="post-interact">
                        <div className="post-interact-left">
                            <div className="icons">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div className="icons">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </div>
                            <div className="icons">
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="post-interact-right">
                            <div className="icons-right">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="post-info">
                        <img src={IcoResponde} />
                        <h1>
                            Curtido por
                            <span className = "spanClassName"> respondeai</span> e 
                            <span className = "spanClassName"
                            > outras 101.523 pessoas</span
                            >
                        </h1>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                    <div className="icon-profile">
                        <img src={IcoBarked} />
                    </div>
                    <h1>barked</h1>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <img className="post-photo" src={FotoCachorro} />
                <div className="post-under">
                    <div className="post-interact">
                        <div className="post-interact-left">
                            <div className="icons">
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                            <div className="icons">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </div>
                            <div className="icons">
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="post-interact-right">
                            <div className="icons-right">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="post-info">
                        <img src={IcoAdorable} />
                        <h1>
                            Curtido por
                            <span className = "spanClassName"> adorable_animals</span> e
                            <span className = "spanClassName"
                            > outras 99.159 pessoas</span
                            >
                        </h1>
                    </div>
                </div>
            </div>
            <div className="post-last">
                <div className="post-header">
                    <div className="icon-profile">
                        <img src={IcoMeowed} />
                    </div>
                    <h1>meowed</h1>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <img className="post-photo" src={FotoGato2} />
            </div>
        </div>
            );
}