import './style.css'
import '../../../src/reset.css'
import Post from '../Post'
import IcoMeowed from '../../assets/icomeowed.png'
import FotoGato from '../../assets/fotogato.png'
import IcoBarked from '../../assets/icobarked.png'
import FotoCachorro from '../../assets/fotocachorro.png'
import IcoAdorable from '../../assets/icoadorableanimals.png'
import IcoResponde from '../../assets/icorespondeai.png'

export default function Posts() {
    return (
        <div className="post-container">
            <Post userName="meowed" 
            userIcon={IcoMeowed} 
            postPhoto={FotoGato}
            likeIcon={IcoResponde}
            likedBy="respondeai" 
            numberOfLikes="101.523"/>

            <Post userName="barked" 
            userIcon={IcoBarked} 
            postPhoto={FotoCachorro}
            likeIcon={IcoAdorable}
            likedBy="adorable_animals" 
            numberOfLikes="99.159"/>

            <Post userName="meowed2" 
            userIcon={IcoMeowed} 
            postPhoto={FotoGato}
            likeIcon={IcoAdorable}
            likedBy="adorable_animals2" 
            numberOfLikes="97.523"/>
        </div>
            );
}