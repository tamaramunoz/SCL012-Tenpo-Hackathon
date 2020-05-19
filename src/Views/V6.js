import React from 'react'
import circle4 from '../img/4circle.png'
import backspace from '../img/backspace.png'
import '../css/V2.css'
import back from '../img/backWhite.png'
import { Link } from 'react-router-dom';

const V6 = () => (
    <div className='V2-div'>
        <div className='V2-arrowDiv'>
            <Link to="/">
                <img className='V2-arrow' src={back} alt='Go Back'></img>
            </Link>
        </div>
        <div className='V2-main'>
            <p className='V2-header'>
                <span><strong>Ingresa la clave de acceso de</strong></span>
                <span>correo@gmail.com</span></p>
            <img src={circle4} alt='blank circles' className='V2-circles'></img>
            <Link to="/V7">
                <div className='V2-password'>
                    <button className='V2-number one'>1</button>
                    <button className='V2-number two'>2</button>
                    <button className='V2-number three'>3</button>
                    <button className='V2-number four'>4</button>
                    <button className='V2-number five'>5</button>
                    <button className='V2-number six'>6</button>
                    <button className='V2-number seven'>7</button>
                    <button className='V2-number eight'>8</button>
                    <button className='V2-number nine'>9</button>
                    <button className='V2-number empty'>0</button>
                    <button className='V2-number cero'>0</button>
                    <button className='V2-number back2'>
                        <img src={backspace} alt='backspace' className='V2-backspace'></img>
                    </button>
                </div>
            </Link>
            <div className='V2-footerDiv'>
                <p className='V2-footer'>¿olvidaste tu clave?</p>
            </div>
        </div >
    </div>
)

export default V6;