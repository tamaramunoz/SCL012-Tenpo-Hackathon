import React from 'react'
import tenpo from '../img/tenpo.png'
import i from '../img/iIcon.png'
import FPimg from '../img/fingerprint.png'
import '../css/FingerPrint.css'
import { Link } from 'react-router-dom';

const FingerPrint = () => (
    <div className='FP-container'>
        <img src={tenpo} alt='logo'></img>
        <img src={FPimg} alt='Finger print screen' className='FP-image'></img>
        <strong> <p>¿Deseas ingresar usando tu huella o FaceID?</p></strong>
        <p className='FP-subtitle'>Es más fácil y seguro.</p>
        <Link to="/Auth">
            <button className='FP-button1'>AUTORIZAR</button>
        </Link>
        <Link to="/Auth">
            <button className='FP-button2'>NO, PREGUNTAR MÁS TARDE</button>
        </Link>
        <div className='FP-info'>
            <img className='FP-icon' src={i} alt='info icon'></img>
            <p className='FP-infoText'>Todas las huellas registradas en tu dispositivo tendrán acceso a la aplicación</p>
        </div>
    </div >
)

export default FingerPrint;
