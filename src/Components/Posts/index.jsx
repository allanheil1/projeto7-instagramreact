import './style.css'
import '../../../src/reset.css'
import Post from '../Post'
import IcoMeowed from '../../assets/icomeowed.png'
import FotoGato from '../../assets/fotogato.png'
import IcoBarked from '../../assets/icobarked.png'
import FotoCachorro from '../../assets/fotocachorro.png'
import IcoAdorable from '../../assets/icoadorableanimals.png'
import IcoResponde from '../../assets/icorespondeai.png'

let posts = [
    {
        id: 1,
        userName: "meowed",
        userIcon: IcoMeowed,
        postPhoto: FotoGato,
        likeIcon: IcoResponde,
        likedBy: "respondeai", 
        numberOfLikes: "101.523"
    },
    {
        id: 1,
        userName: "barked",
        userIcon: IcoBarked,
        postPhoto: FotoCachorro,
        likeIcon: IcoAdorable,
        likedBy: "adorable_animals", 
        numberOfLikes: "00.159"
    },
    {
        id: 1,
        userName: "meowed2",
        userIcon: IcoMeowed,
        postPhoto: FotoGato,
        likeIcon: IcoResponde,
        likedBy: "respondeai2", 
        numberOfLikes: "104.988"
    }
]

export default function Posts() {
    return (
        <div className="post-container">
            {posts.map(post => (
                <Post
                    key={post.id}
                    userName={post.userName}
                    userIcon={post.userIcon} 
                    postPhoto={post.postPhoto}
                    likeIcon={post.likeIcon}
                    likedBy={post.likedBy} 
                    numberOfLikes={post.numberOfLikes}
                />
            ))}
        </div>
     );
}

