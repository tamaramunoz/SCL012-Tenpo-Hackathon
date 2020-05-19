import React from 'react'
import back from '../img/back.png'
import { Link } from 'react-router-dom';

const ConfirmKey = () => {
    return (
        <div>
            <div>
            <Link to="/createkey"><img src={back} alt="Volver atras"/></Link>
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
