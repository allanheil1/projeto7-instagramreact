import './style.css'
import '../../../src/reset.css'

export default function Story(props){
    return(
        <div className="single">
            <div className="stories">
                <div className="img-stories">
                    <img src={props.icon} />
                </div>
            </div>
            <div className="stories-text">{props.userName}</div>
        </div>
    );
}