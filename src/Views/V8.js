import React from 'react';
import iV8 from '../img/iV8.png';
import chatBot from '../img/information.png'
import '../css/V8.css'
import { Link } from 'react-router-dom';


const V8 = () => (
    < div className='V8-container'>

        <div className="containerPlace8">
            <img src={iV8} alt="iconoLoSentimos" className="iV8"></img>
            <h5 className="sorryV8">Ouch!</h5>
            <h4 className="sorryV8">Lo sentimos mucho </h4>
            <p className="pV8">Falló la conexión con el sistema por lo que no se pudo completar el inicio de sesión.</p>
            <p className="pV8">Puedes reintentar o volver en algunos minutos.</p>

            <div className="btnsV8">
                <button className="btnV8a" ><Link to="/" > <span className="buttonCancel">Cancelar</span> </Link></button>
                <button className="btnV8b"><Link to="/loading"><span className="buttonRestart">Reintentar</span></Link></button>
            </div>

        </div>
        <div className="iNub8">
            <Link to="/ModalMail" > <img src={chatBot} alt="más información" /> </Link>
        </div>

    </div>
)

export default V8;