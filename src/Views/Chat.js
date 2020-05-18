import React, { Fragment, useState } from 'react';
import '../css/Chat.css'
import back from '../img/back.png'
import Button from '../components/Button'
import ChatDialogue from '../components/ChatDialogue'
import SolutionBox from '../components/SolutionBox';


const Chat = () => {

    const [activeButton, setActiveButton] = useState(false)
    const [cardProblem, setCardProblem] = useState(false)
    const [cantBuy, setCantBuy] = useState(false)

    const onClicking = () => {
        setActiveButton(true)
    }

    const onClickOption = () => {
        setCardProblem(true)
    }

    const onClickProblem = () => {
        setCantBuy(true)
    }

    return (
        <Fragment>
            <div className='chat-header'>
                <img className='chat-arrow' src={back} alt='Go Back'></img>
                <h3>ATENCIÓN AL CLIENTE TENPO</h3>
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
                                <Button value='Cargar plata a Tenpo' />
                                <Button value='Sacar plata' />
                                <button className="button-button" onClick={() => onClickOption(cardProblem)}>Compras con mi tarjeta</button>
                                <Button value='Pagos de cuenta' />
                                <Button value='Recargas de servicios' />
                                <Button value='Diferencias en saldo' />
                                <Button value='Otro' />
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
                            </Fragment> 
                        ) : null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Chat
