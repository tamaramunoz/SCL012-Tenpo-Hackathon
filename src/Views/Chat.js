import React, { Fragment, useState } from 'react';
import '../css/Chat.css'
import back from '../img/back.png'
import Button from '../components/Button'
import ChatDialogue from '../components/ChatDialogue'


const Chat = () => {

    const [activeButton, setActiveButton] = useState(false)

    const onClicking = () => {
        console.log('hice click');
        setActiveButton(true)
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
                                <Button value='Compras con mi tarjeta' />
                                <Button value='Pagos de cuenta' />
                            </Fragment>
                        ) : null
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Chat
