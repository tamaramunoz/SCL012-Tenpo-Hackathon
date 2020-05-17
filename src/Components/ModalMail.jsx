import React from 'react'
import { Link } from "react-router-dom";
import '../css/ModalMail.css'
import errorImg from '../img/Component-6.png'
import telefonista from '../img/telefonista.png'
import sobre from '../img/sobredos.png'

const ModalMail = () => {
    return (
        <div className="container-modal" >
            <img src={errorImg} alt="error al continuar"  />
            <p className="modal-title">Si el problema persiste comunícate con nosotros</p>

            <div className="info-box" >
                <div className="container-icono" >
                    <img src={telefonista} alt="llamar a tenpo" width={35} />
                </div>
                <div className="body-text">
                    <p>Llámanos al <Link to="/FloatButton">600 360 0355</Link></p>
                    <p> <b>Horarios de atención:</b> Lunes a Viernes 08:00-23:00 hrs. Sábados, Domingos y Festivos 09:00-23:00 hrs.</p>
                </div>
            </div>

            <div className="info-box" >
                <div className="container-icono" >
                    <img src={sobre} alt="enviar mail a tenpo" width={50} />
                </div>
                <div className="body-text">
                    <p>Escríbenos a <a href="mailto:hola@tenpo.cl">hola@tenpo.cl</a></p>
                </div>

            </div>
        </div>
    )
}

export default ModalMail
