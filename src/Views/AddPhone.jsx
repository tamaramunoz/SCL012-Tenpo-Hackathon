import React from 'react'
import back from '../img/back.png'

const AddPhone = () => {
    return (
        <div>
            <div>
                <img src={back} alt="Volver atras"/>
                <p>¡VAMOS NO FALTA NADA!</p>
            </div>
            <div>
                <p>Ingresa tu celular</p>
                <p>Te enviaremos un mensaje con un código para validar tu número.</p>
                <input type="text"/>
                <button>Validar por Whatsapp</button>
                <button>Validar por SMS</button>
            </div>
        </div>
    )
}

export default AddPhone
