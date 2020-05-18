import React from 'react';
import ComponentT from '../img/ComponentT.png';
import '../css/V7.css'
import { Link } from 'react-router-dom';

const V7 = () => (
    < div className='V7-container'>
        <div className="containerPlace">
            <Link to="/V8">
            <img src={ComponentT} alt='logoTenpo'  className="logoTenpo"></img>
            </Link>
            <h3>Ingresando a Tenpo...</h3>
        </div>    
    </div>
)

export default V7;