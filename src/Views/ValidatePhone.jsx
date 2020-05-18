import React from 'react'
import back from '../img/back.png'

const ValidatePhone = () => {
    return (
        <div>
            <div>
                <img src={back} alt=""/>
            </div>
            <div>
                <p>Valida tu celular</p>
                <p>Ingresa el código que te enviamos por SMS al +56 910101001</p>
                <input type="text" placeholder="código de 6 dígitos" />
                <button>Puedes solicitar un nuevo código en 24 seg...</button>
            </div>
            
        </div>
    )
}

export default ValidatePhone
