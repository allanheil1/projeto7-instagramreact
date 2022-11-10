import './style.css'
import '../../../src/reset.css'
import React from 'react'

export default function Post(props) {

    const [BoolBookMarked, setBoolBookMarked] = React.useState(false);
    const [BoolLiked, setBoolLiked] = React.useState(false);
    const [NumberOfLikes, setNumberOfLikes] = React.useState(props.numberOfLikes);

    function likePost(){
        let NumberOfLikesVar = NumberOfLikes;
        setBoolLiked(!BoolLiked);
        if(BoolLiked === false){
            NumberOfLikesVar++;
            setNumberOfLikes(NumberOfLikesVar);
        }else{
            NumberOfLikesVar--;
            setNumberOfLikes(NumberOfLikesVar);
        }
    }

    function tagBookMarked(){
        setBoolBookMarked(!BoolBookMarked);
    }

    return(
    <div className="post">
        <div className="post-header">
            <div className="icon-profile">
                <img src={props.userIcon} />
            </div>
            <h1>{props.userName}</h1>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        <img className="post-photo" src={props.postPhoto} />
        <div className="post-under">
            <div className="post-interact">
                <div className="post-interact-left">
                    <div className="icons" onClick={likePost}>
                        {BoolLiked ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
                    </div>
                    <div className="icons">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div className="icons">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
                <div className="post-interact-right">
                    <div className="icons-right" onClick={tagBookMarked}>
                        {BoolBookMarked ? <ion-icon name="bookmark"></ion-icon> : <ion-icon name="bookmark-outline"></ion-icon>}
                    </div>
                </div>
            </div>
            <div className="post-info">
                <img src={props.likeIcon} />
                <h1>
                    Curtido por
                    <span className="spanClassName"> {props.likedBy}</span> e
                    <span className="spanClassName"
                    > outras {NumberOfLikes} pessoas</span
                    >
                </h1>
            </div>
        </div>
    </div>
    );
}