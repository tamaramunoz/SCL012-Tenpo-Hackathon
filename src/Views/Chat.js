import React, { useState } from 'react';
import '../css/Chat.css'
import back from '../img/back.png'
import Button from '../components/Button'
import ChatDialogue from '../components/ChatDialogue'

export default function Chat() {

    const [activeButton, setActiveButton] = useState(false)

    const onClicking = () => {
        console.log('hice click');
        setActiveButton(true)
    }

    return (
        <>
            <div className='chat-header'>
                <img className='chat-arrow' src={back} alt='Go Back'></img>
                <h3>ATENCIÓN AL CLIENTE TENPO</h3>
            </div>
            <div className='chat-container'>
                <ChatDialogue value='Hola, encantados de comunicarnos contigo' />
                <ChatDialogue value='¿En qué te podemos ayudar? Por favor selecciona una categoría' />
                <div className='chat-options'>
                    <Button value='Necesito información' />
                    <button className="button-button" onClick={() => onClicking(activeButton)}>Tengo un problema</button>
                        {
                            activeButton ? (<button className="button-button" > hola</button>) : null
                        }
                    
                    
                    <Button value='Quiero dejar un reclamo' />
                    <Button value='Quiero dejar una sugerencia y/o felicitación' />
                </div>
            </div>
        </>
    );
}
