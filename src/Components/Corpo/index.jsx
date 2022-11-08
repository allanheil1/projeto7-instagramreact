import './style.css'
import '../../../src/reset.css'
import Stories from '../Stories';
import Posts from '../Posts';
import Sidebar from '../Sidebar';

export default function Corpo(){
    return(
        <div className = "main-container">
            <div className = "content-container">
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    );
}

