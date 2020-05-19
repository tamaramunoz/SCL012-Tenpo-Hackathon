import React from 'react'
import { Link } from "react-router-dom";
import '../css/Phone.css'
import phone from '../img/phone.png'
import camera from '../img/camera.png'
import keyboard from '../img/keyboard.png'

const Phone = () => {
    return (
        <div>
            <div className="banner-phone">
                <div className="phone" >
                    <p>Teléfono</p>
                    <p>Más</p>
                </div>
                <div className="options">
                    <p>Registro</p>
                    <p>Favoritos</p>
                    <p>Contactos</p>
                </div>
            </div>
            <div className="visor">
                <p>600 360 0355</p>
            </div>
            <div className="numbers" >
                <table className="numb-group" >
                    <tr className="numb" >
                        <th><button>1</button></th>
                        <th><button>2</button></th>
                        <th><button>3</button></th>
                    </tr>
                    <tr className="numb" >
                        <th><button>4</button></th>
                        <th><button>5</button></th>
                        <th><button>6</button></th>
                    </tr>
                    <tr className="numb" >
                        <th><button>7</button></th>
                        <th><button>8</button></th>
                        <th><button>9</button></th>
                    </tr>
                    <tr className="numb" >
                        <th><button>*</button></th>
                        <th><button>0</button></th>
                        <th><button>#</button></th>
                    </tr>
                    <tr className="icons-group">
                        <th><img src={camera} alt="video llamada" width={35} /></th>
                        <th><Link to="/modalmail"><img src={phone} alt="llamar" width={60} /></Link></th>
                        <th><img src={keyboard} alt="ocultar teclado" width={35} /></th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Phone
