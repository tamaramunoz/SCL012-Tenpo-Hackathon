import React from 'react'
import '../css/SolutionBox.css'
import n from '../img/n.png'
import one from '../img/number-one.png'
import two from '../img/number-two.png'
import three from '../img/number-three.png'
import wrong from '../img/wrong.png'
import right from '../img/right.png'


const SolutionBox = () => {
    return (
        <div className='solution-box'>
            <img src={n} alt='logo' className='solution-logo'></img>

            <div className='solution-bubble'>
                <div>
                    <img src={one} alt="primera opción" />
                    <p>Recomendamos que tu saldo sea un poco más elevado del pago que quieres realizar ya que algunos comercios cobran un pequeño monto para validar la tarjeta Mastercard. Este cobro será devuelto posteriormente.</p>
                </div>
                <div>
                    <img src={two} alt="primera opción" />
                    <p>Asegurate de escribir correctamente el número de tu tarjeta, fecha de vencimiento o código de verificación.</p>
                </div>
                <div>
                    <img src={three} alt="primera opción" />
                    <p>Exiten sitios web que no aceptan Tarjetas de Prepago. Conoce todos los sitios y comercios donde puedes comprar y pagar con la tarjeta Tenpo Mastercard en <a href="https://www.tenpo.cl/" target="blank">tenpo.cl</a> </p>
                </div>
            </div>
            <div className="solution-results" >
                <p>¿Pudimos ayudarte?</p>
                <img src={wrong} alt="no pudieron solucionar mi problema" />
                <img src={right} alt="si me ayudaron a solucionar mi problema" />
                <p>¡Lo sentimos mucho!</p>
            </div>
        </div>
    )
}

export default SolutionBox
