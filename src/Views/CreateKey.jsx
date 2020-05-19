import React from 'react'
import back from '../img/back.png'
import '../css/CreateKey.css'
import { Link } from 'react-router-dom';

const CreateKey = () => {
    return (
        <div className="key-container" >
            <div className="key-header">
                <Link to="/address" ><img src={back} alt="Volver atras"/></Link>
                <p>¡Y por último! Tu seguridad</p>
            </div>
            <div className="key-body">
                <p className="key-body-title" >Crea tu clave de accesos de 4 dígitos</p>
                <p>Con ella podrás ingresar de forma segura.</p>
            </div>
            <div className="key-inputs">
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
                <input type="password" maxLength="1" />
            </div>
            <div className="key-button">
               <Link to="/confirmkey"><button>Continuar</button></Link>
            </div>
            
        </div>
    )
}

export default CreateKey
