import React from 'react';
import BT2 from '../img/BT2.png';
import { Link } from 'react-router-dom';
import points2 from '../img/points2.png';
import CYA from '../img/CYA.png'
import '../css/BienvenidaUno.css'

const BienvenidaDos = () => (
    < div className='BT1-container'>
        <img src={BT2} alt="img Bienvenida a tenpo" className="imgBT1 "></img>
        <p className="yaTengoCuenta">YA TENGO CUENTA > </p>

        <div className="containerPlaceBT1">
            
            <img src={points2} alt="imagen con puntos de scroll" className="pointsBT1"></img>

            <div className="textContent">
                <div>
                    <h5 className="bienvenidoTenpo"> Te recordamos tus pagos </h5>
                    <p className="textoIntermedio"> Con Tenpo paga tus cuentas y así podrás estar al día  <strong>  ¡Lo que siempre esperastes!</strong> </p>

                </div>
                <div>       
                    <Link to="/BienvenidaTres">         
                    <img src={CYA} alt="button crea tu cuenta" className="CYAButton"/> 
                    </Link>
                    <p className="paypal">Registrate con <strong> Multicaja Paypal </strong> </p>
                </div>
            </div>
          
        
        </div>

    </div>
)

export default BienvenidaDos;