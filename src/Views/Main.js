import React from 'react'
import '../css/Main.css'
import mainScreen from '../img/mainNewUser.png';
import chatBot from '../img/information.png';
import { Link } from 'react-router-dom';

const Main = () => (
    <div className='Main-container'>
        <img src={mainScreen} alt='Pantalla tenpo 9' className="Main-screen"></img>

        <Link to="/chatdos" ><img src={chatBot} alt='icono de información' className="infoV9"/></Link>
    </div>
)

export default Main;
