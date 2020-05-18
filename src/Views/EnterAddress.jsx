import React from 'react'
import '../css/Address.css'
import back from '../img/back.png'


const EnterAddress = () => {
    return (
        <div className="address-container" >
            <div className="address-header" >
                <img src={back} alt="volver atras" />
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
                <button>Continuar</button>
            </div>
        </div>
    )
}

export default EnterAddress
