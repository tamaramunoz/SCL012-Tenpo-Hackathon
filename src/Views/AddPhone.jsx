import React from 'react'
import '../css/AddPhone.css'
import back from '../img/back.png'

const AddPhone = () => {
    return (
        <div className="addphone-container" >
            <div className="addphone-header" >
                <img src={back} alt="Volver atras" />
                <p>¡VAMOS NO FALTA NADA!</p>
            </div>
            <div className="addphone-body" >
                <p className="addphone-body-title"  >Ingresa tu celular</p>
                <p>Te enviaremos un mensaje con un código para validar tu número.</p>
            </div>
            <div className="addphone-inputs"  >
                <input type="text" placeholder="+56 | Ingresa tu número" />
            </div>
            <div className="addphone-button" >
                <button>Validar por Whatsapp</button>
                <button>Validar por SMS</button>
            </div>
        </div>
    )
}

export default AddPhone
