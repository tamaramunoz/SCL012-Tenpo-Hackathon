import React from 'react'
import tenpo from '../img/tenpo.png'
import '../css/V1.css'
import { Link } from 'react-router-dom';

const V1 = () => (
    <div className='V1-container'>
        <img src={tenpo} alt='primera vista de aplicación' className='V1-tenpo'></img>
        <p className='V1-welcome'>
            <span><strong>¡Hola!</strong></span>
            <span>Te damos la</span>
            <span>bienvenida</span>
        </p>
        <div className='V1-buttonDiv'>
            <button className='V1-button1'>CREAR UNA CUENTA</button>
            <Link to="/V2">
                <button className='V1-button2'>INICIAR SESIÓN</button>
            </Link>
        </div>
        <p className='V1-footer'>Iniciar sesión con <strong>Tenpo Paypal</strong></p>

    </div>
)

export default V1;

