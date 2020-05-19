import React from 'react'
import tenpo from '../img/tenpo.png'
import menuIcon from '../img/squares.png'
import charge from '../img/cargarIcon.png'
import get from '../img/retirarIcon.png'
import history from '../img/clockIcon.png'
import pay from '../img/cuentaIcon.png'
import transfer from '../img/cobrarIcon.png'
import paypal from '../img/paypal.png'
import pig from '../img/pigIcon.png'
import '../css/MainView.css'
import { Link } from 'react-router-dom';

const MainView = () => (
    <>
        <div className='Main-colored'>
            <div className='Main-Header'>
                <img src={tenpo} alt='logo' className='Main-tenpo'></img>
                <img src={menuIcon} alt='Menuicon' className='Main-menuIcon'></img>
            </div>
            <p className='Main-subtitle'><strong>TU PLATA DISPONIBLE</strong></p>
            <p className='Main-moneyAmount'>$0</p>
        </div>
        <div className='Main-sections'>
            <div className='Main-chargeDiv'>
                <img src={charge} alt='charge money' className='Main-charge'></img>
                <p><span>Cargar</span> <span>Plata</span></p>
            </div>
            <div className='Main-getDiv'>
                <img src={get} alt='get money' className='Main-get'></img>
                <p><span>Retirar</span> <span>Plata</span></p>
            </div>
            <div className='Main-HistoryDiv'>
                <img src={history} alt='history' className='Main-history'></img>
                <p>Historial</p>
            </div>
        </div>
        <p className='Main-advice'>Comienza a pagar con Tenpo ¡Carga plata! ></p>
        <div class="row row-cols-2">
            <div className='Main-payDiv'>
                <img src={pay} alt='pay bills' className='Main-section'></img>
                <p><span>Pago de</span> <span>cuentas</span></p>
            </div>
            <div className='Main-payDiv'>
                <img src={pay} alt='recharge' className='Main-section'></img>
                <p>Recargas</p>
            </div>
            <div className='Main-payDiv'>
                <img src={transfer} alt='pay and get paid' className='Main-section'></img>
                <p><span>Cobrar y</span> <span>pagar</span></p>
            </div>
            <div className='Main-payDiv'>
                <img src={paypal} alt='PayPal' className='Main-section'></img>
                <p>PayPal</p>
            </div>
            <div className='Main-payDiv'>
                <img src={pig} alt='Pocket' className='Main-section'></img>
                <p>Bolsillo</p>
            </div>
        </div>
        <div className='row row-cols-3 footer'>
            <p>Tu plata</p>
            <p>Tarjeta</p>
            <p>Ayuda</p>
        </div>

    </>
)

export default MainView;
