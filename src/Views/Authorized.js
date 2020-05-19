import React from 'react'
import checkCell from '../img/checkCell.png'
import '../css/Authorized.css'
import { Link } from 'react-router-dom';

const Auth = () => (
    <div className='Auth-container'>
        <img src={checkCell} alt='checkPass' className='Auth-img'></img>
        <strong> <p className='Auth-title'>
            ¡Genial Camila Rojas Serantoni!
        </p></strong>
        <p className='Auth-subtitle'>¡Ya puedes empezar a disfrutar de Tenpo</p>
        <Link to="/Main">
            <button className='Auth-button'>COMENZAR</button>
        </Link>
    </div>
)

export default Auth;
