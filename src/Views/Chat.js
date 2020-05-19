import React, { Fragment, useState } from 'react';
import '../css/Chat.css'
import back from '../img/back.png'
import Button from '../components/Button'
import ChatDialogue from '../components/ChatDialogue'
import SolutionBox from '../components/SolutionBox';
import wrongIcon from '../img/wrong.png'
import rightIcon from '../img/right.png'
import { Link } from 'react-router-dom';


const Chat = () => {

    const [activeButton, setActiveButton] = useState(false)
    const [cardProblem, setCardProblem] = useState(false)
    const [cantBuy, setCantBuy] = useState(false)
    const [wrong, setWrong] = useState(false)

    const onClicking = () => {
        setActiveButton(true)
    }

    const onClickOption = () => {
        setCardProblem(true)
    }

    const onClickProblem = () => {
        setCantBuy(true)
    }

    const onClickWrong = () => {
        setWrong(true)
    }


    return (
        <Fragment>
            <div className='chat-header'>
                <Link to="/V9" > <img className='chat-arrow' src={back} alt='Go Back' /></Link>
                <p className="chat-title" >ATENCIÓN AL CLIENTE TENPO</p>
            </div>

            <div className='chat-container'>
                <ChatDialogue value='Hola CATALINA, encantados de comunicarnos contigo' />
                <ChatDialogue value='¿En qué te podemos ayudar? Por favor selecciona una categoría' />

                <div className='chat-options'>
                    <Button value='Necesito información' />
                    <button className="button-button" onClick={() => onClicking(activeButton)}>Tengo un problema</button>
                    <Button value='Quiero dejar un reclamo' />
                    <Button value='Quiero dejar una sugerencia y/o felicitación' />

                    {
                        activeButton ? (
                            <Fragment>
                                <ChatDialogue value='Lo sentimos CATALINA ¿De qué se trata el problema? Selecciona una opción para poder ayudarte ' />
                                <div className="sorry-container" >
                                    <Button value='Cargar plata a Tenpo' />
                                    <Button value='Sacar plata' />
                                    <button className="button-button" onClick={() => onClickOption(cardProblem)}>Compras con mi tarjeta</button>
                                    <Button value='Pagos de cuenta' />
                                    <Button value='Recargas de servicios' />
                                    <Button value='Diferencias en saldo' />
                                    <Button value='Otro' />
                                </div>
                            </Fragment>
                        ) : null
                    }
                    {
                        cardProblem ? (
                            <Fragment>
                                <ChatDialogue value='Cuéntanos en detalle lo que te sucedió para poder ayudarte mejor' />
                                <Button value='Compré y me salió tarjeta rechazada' />
                                <button className="button-button" onClick={() => onClickProblem(cantBuy)}>No puedo comprar con mi tarjeta Tenpo</button>
                            </Fragment>
                        ) : null
                    }
                    {
                        cantBuy ? (
                            <Fragment>
                                <SolutionBox />
                                <div className="solution-results" >
                                    <p>¿Pudimos ayudarte?</p>
                                    <div className="solution-icons" >
                                        <button className="icon-button" onClick={() => onClickWrong(wrong)}><img src={wrongIcon} alt="no pudieron solucionar mi problema" /></button>
                                        <Link to='/V9' ><button className="icon-button"><img src={rightIcon} alt="si me ayudaron a solucionar mi problema" /></button></Link>
                                    </div>
                                    <p>¡Lo sentimos mucho!</p>
                                </div>
                            </Fragment>
                        ) : null
                    }
                    {
                        wrong ? (
                            <Fragment>
                                <ChatDialogue value="Ya recibimos información de tu problema y estamos trabajando para solucionarlo. Nos contactaremos contigo lo antes posible." />
                                <ChatDialogue value="Tu número de reclamos es 15678. Adicionalmente enviaremos una copia a tu correo." />
                                <div className="backtostart-container" >
                                    <Link to='/V9' ><button className="backtostart" >Volver al inicio</button></Link>
                                </div>
                            </Fragment>
                        ) : null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Chat
