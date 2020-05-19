import React from 'react';
import '../css/BienvenidaCinco.css';
import back from '../img/back.png';
import writeUs from '../img/writeUs.png'
import serieNum from '../img/serieNum.png';
import seguir from '../img/seguir.png';
import { Link } from 'react-router-dom';



const BienvenidaCinco = () => (
    <div className="BT5-container">
        <div className="atras">
            <Link to="/BienvenidaCuatro" ><img src={back} alt="Volver atras" /></Link>
            <p><strong class="comencemos" >COMENCEMOS</strong> CON TUS DATOS</p>
        </div>
        <div className="text-placeB5">
            <h5 className="listo"> Ingresa tu RUT y N° de documento o serie</h5>
            <p>¡Recuerda! Abrir tu cuenta en Tenpo es seguro y gratis. </p>
        </div>
        <div className="inputPlace">
            <p>Rut</p>
            <input type="text"></input>
        </div>
        <div className="inputPlace">
            <p>N° de documento o serie</p>
            <input type="text"></input>
        </div>

        <div className="cedula">

            <img className="write" src={writeUs} alt="" />
            <div className="textCedula">
                <img className="iconBienvenidaCedula" src={serieNum} alt="numero de serie, cédula" />
                <div>
                    <p> Este número lo puedes ver en tu cédula de identidad</p>
                    <p className="textb"> ¿Dónde lo encuentro ?</p>
                </div>
            </div>
        </div>

        <div class="col-auto my-1">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                <label class="form-check-label" for="autoSizingCheck2">
                    Acepto conforme los <span className="textb" >términos y condiciones del servicio</span>
                </label>
            </div>
        </div>
        <Link to="/addphone" ><img src={seguir} alt="seguir" /></Link>
    </div>
)

export default BienvenidaCinco;