import React from 'react';
import BT3 from '../img/BT3.png';
//import { Link } from 'react-router-dom';
import points3 from '../img/points3.png';
import CYA from '../img/CYA.png'
import '../css/BienvenidaUno.css'

const Bienvenidatres = () => (
    < div className='BT1-container'>
        <img src={BT3} alt="img Bienvenida a tenpo" className="imgBT1 "></img>
        <p className="yaTengoCuenta">YA TENGO CUENTA > </p>

        <div className="containerPlaceBT1">
            
            <img src={points3} alt="imagen con puntos de scroll" className="pointsBT1"></img>

            <div className="textContent">
                <div>
                    <h5 className="bienvenidoTenpo"> Obtén tu tarjeta Tenpo Mastercard GRATIS </h5>
                    <p className="textoIntermedio"> Comienza a comprar sin comisiones en ecommerce y en tus apps favoritas como Rappi, Amazon, Netflix, Uber y muchas más.</p>

                </div>
                <div>               
                   
                    <img src={CYA} alt="button crea tu cuenta" className="CYAButton"/> 
                  
                    <p className="paypal">Registrate con <strong> Multicaja Paypal </strong> </p>
                </div>
            </div>
          
        
        </div>

    </div>
)

export default Bienvenidatres;