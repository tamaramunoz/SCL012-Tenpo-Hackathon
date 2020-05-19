import React from 'react'
import back from '../img/back.png'
import { Link } from 'react-router-dom';

const CreateKey = () => {
    return (
        <div>
            <div>
                <Link to="address" ><img src={back} alt="Volver atras"/></Link>
                <p>¡Y por último! Tu seguridad</p>
            </div>
            <div>
                <p>Crea tu clave de accesos de 4 dígitos</p>
                <p>Con ella podrás ingresar de forma segura.</p>
            </div>
            <div>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
            <div>
               <Link to="/confirmkey"><button>Continuar</button></Link>
            </div>
            
        </div>
    )
}

export default CreateKey
