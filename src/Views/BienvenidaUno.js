import React from 'react';
import BT1 from '../img/BT1.png';
import { Link } from 'react-router-dom';
import points1 from '../img/points1.png';
import CYA from '../img/CYA.png'
import '../css/BienvenidaUno.css'

const BienvenidaUno = () => (
    < div className='BT1-container'>
        <img src={BT1} alt="img Bienvenida a tenpo" className="imgBT1 "></img>
        <p className="yaTengoCuenta">YA TENGO CUENTA > </p>

        <div className="containerPlaceBT1">
            
            <img src={points1} alt="imagen con puntos de scroll" className="pointsBT1"></img>

            <div className="textContent">
                <div>
                    <h5 className="bienvenidoTenpo"> Hola! Bienvenido a Tenpo </h5>
                    <p className="textoIntermedio"> Tu nueva <strong> cuenta digital  GRATIS. </strong>¡Ábrela en solo 3 minutos y maneja tu plata como quieras desde tu celular! </p>

                </div>
                <div>          
                    <Link to="/BienvenidaDos">     
                    <img src={CYA} alt="button crea tu cuenta" className="CYAButton"/> 
                    </Link>
                    <p className="paypal">Registrate con <strong> Multicaja Paypal </strong> </p>
                </div>
            </div>
          
        
        </div>

    </div>
)

export default BienvenidaUno;