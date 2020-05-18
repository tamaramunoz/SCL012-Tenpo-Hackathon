import React from 'react'
import back from '../img/back.png'

const EnterAddress = () => {
    return (
        <div>
            <div>
                <img src={back} alt="" />
                <p>¡Un poco más y estamos listos!</p>
            </div>
            <div>
                <p>Ingresa tu dirección</p>
                <p>Todos tus datos son confidenciales</p>
            </div>
            <div>
                <input type="text" placeholder="Región" />
                <input type="text" placeholder="Comuna" />
                <input type="text" placeholder="Dirección" />
            </div>
            <div>
                <button>Continuar</button>
            </div>
        </div>
    )
}

export default EnterAddress
