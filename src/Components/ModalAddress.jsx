import React from 'react'
import { Link } from "react-router-dom";
import '../css/ModalMail.css'
import back from '../img/back.png'
import PhoneKey from '../img/phone-key.png'


const ModalAddress = () => {
    return (
        <div className="container-modal" >
            <div>
                <img src={back} alt="Volver atras" />
            </div>

            <Link to="/address" ><img src={PhoneKey} alt="error al continuar" /></Link>
            
            <div className="text-box" >
                <p>La Unidad de Análisis Financiero (UAF) nos exige conocer todos estos datos de los usuarios que se registren para crear una cuenta.</p>
                <p>Esto es una medida de protección para <b>evitar fraudes y estafas</b>. </p>
            </div>

        </div>
    )
}

export default ModalAddress
