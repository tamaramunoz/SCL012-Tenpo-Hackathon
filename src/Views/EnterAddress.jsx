import React from 'react'
import '../css/Address.css'
import back from '../img/back.png'
import { Link } from 'react-router-dom'


const EnterAddress = () => {
    return (
        <div className="address-container" >
            <div className="address-header" >
                <Link to="/validate"><img src={back} alt="volver atras" /></Link> 
                <p>¡Un poco más y estamos listos!</p>
            </div>
            <div className="address-body" >
                <p className="address-body-title" >Ingresa tu dirección</p>
                <p>Todos tus datos son confidenciales</p>
            </div>
            <div className="address-inputs" >
                <input type="text" placeholder="Región" />
                <input type="text" placeholder="Comuna" />
                <input type="text" placeholder="Dirección" />
            </div>
            <div className="address-button" >
                <Link to="createkey"><button>Continuar</button></Link>
            </div>
        </div>
    )
}

export default EnterAddress
