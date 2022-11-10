import './style.css'
import '../../../src/reset.css'
import React from 'react'

export default function Usuario(props) {

    const [UserName, setUserName] = React.useState(props.userName);
    const [Name, setName] = React.useState(props.name);
    const [UserIcon, setUserIcon] = React.useState(props.icon);

    function changeName(){
        const newUserName = prompt("Insira aqui seu nome de usuário");
        const newName = prompt("Insira aqui seu nome");
        if (!newName && !newUserName) {
            changeName();
          } else {
            setUserName(newUserName);
            setName(newName);
          }
    }

    function changeIcon(){
        const newIcon = prompt("Insira aqui o endereço de sua nova foto");
        if (!newIcon) {
            alert("Insira um endereço válido");
          } else {
            setUserIcon(newIcon);
          }
    }

    return (
        <div class="sb-profile-info">
            <div>
                <img src={UserIcon} onClick={changeIcon}/>
            </div>
            <div class="profile-user-and-name">
                <h1>{UserName}</h1>
                <h2>{Name}</h2>
            </div>
            <div class="edit-user-button" onClick={changeName}>
                <ion-icon name="create-outline"></ion-icon>
            </div>
        </div>
    );
}