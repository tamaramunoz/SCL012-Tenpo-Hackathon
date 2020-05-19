import React from 'react';
import back from '../img/back.png';
import contGoogle from '../img/contGoogle.png';
import contCorreo from '../img/contCorreo.png';
import CMF from '../img/CMF.png';
import CED from '../img/CED.png';
import SEC from '../img/SEC.png';
import { Link } from 'react-router-dom';
import '../css/BienvenidaCuatro.css'


const BienvenidaCuatro = () => (

    < div className='BT4-container'>
        <Link to="/BienvenidaTres">
        <img src={back} alt="flecha hacia atras" className="back"></img></Link>
        <h5 className="listo"> ¿Estás List@? </h5>
        <p>Antes de seguir queremos contarte que:</p>
        
        <div className="textContainer4">
                <div className="textPlace">
                    <img src={CMF} alt="logo CMF" className="iconBC"></img>
                    <p><strong>Estamos regulados</strong> por la CMF, abriremos una cuenta digital a tu nombre.</p>

                </div>
                <div className="textPlace">
                    <img src={CED} alt="logo Cedula" className="iconBC"></img>
                    <p><strong>¡Ten tu cédula a mano!</strong> vamos a necesitar algunos datos personales como tu <strong>RUT y N° de serie.</strong></p>
                </div>
            
                <div className="textPlace">
                    <img src={SEC} alt="logo Seguridad" className="iconBC"></img>
                    <p> Recuerda que tu plata en  <strong>Tenpo siempre esta segura.</strong></p>
                </div>   
        </div>
        <div className="containerButonB4">
            <p><strong>¡Empecemos validando tu correo!</strong></p>
            <div className="buttonPlace">
                <Link to="/BienvenidaCinco">
                <img src={contGoogle} alt="continuarConGoogle" className="Cont"></img></Link>
                <Link to="/BienvenidaCinco">
                <img src={contCorreo} alt="continuarCorreo" className="Cont"></img></Link>
            </div>
        </div>


    </div>




)
export default BienvenidaCuatro;






