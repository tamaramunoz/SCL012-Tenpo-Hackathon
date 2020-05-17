import React from 'react'
import '../css/ModalMail.css'
import errorImg from '../img/Component-6.png'

const ModalMail = () => {
    return (
        <div className="container-modal" >
            <img src={errorImg} alt="error al continuar" />
            <p className="modal-title">Si el problema persiste comunícate con nosotros</p>

            <div className="info-box" >
                <p>Llámanos al 600 360 0355</p>
                <p> <b>Horarios de atención:</b> Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p>
            </div>

            <div className="info-box" >
                <p>Escríbenos a hola@tenpo.cl</p>
            </div>
        </div>
    )
}

export default ModalMail
