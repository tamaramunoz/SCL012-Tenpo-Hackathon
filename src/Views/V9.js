import React from 'react';
import PTenV9 from '../img/PTenV9.png';
import chatBot from '../img/information.png';
import '../css/V9.css'
import { Link } from 'react-router-dom';


const V9 = () => (
    < div className='V9-container'>
            <img src={PTenV9} alt='Pantalla tenpo 9'  className="pTenV9"></img>
           
            <Link to="/chat" ><img src={chatBot} alt='icono de información' className="infoV9"/></Link>
            
    </div>
)

export default V9;
