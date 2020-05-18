import React from 'react'
import back from '../img/back.png'

const CreateKey = () => {
    return (
        <div>
            <div>
                <img src={back} alt=""/>
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
                <button>Continuar</button>
            </div>
            
        </div>
    )
}

export default CreateKey
