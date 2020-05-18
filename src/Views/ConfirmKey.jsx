import React from 'react'
import back from '../img/back.png'

const ConfirmKey = () => {
    return (
        <div>
            <div>
                <img src={back} alt=""/>
                <p>¡Y por último! Tu seguridad</p>
            </div>
            <div>
                <p>Confirma tu clave de acceso</p>
            </div>
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
            <div>
                <button>Finalizar</button>
            </div>
        </div>
    )
}

export default ConfirmKey
