import React from 'react';
import '../css/Chat.css'
import back from '../img/back.png'
import Button from '../Components/Button'
import ChatDialogue from '../Components/ChatDialogue'

export default function Chat() {

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
                    <Button value='Tengo un problema' />
                    <Button value='Quiero dejar un reclamo' />
                    <Button value='Quiero dejar una sugerencia y/o felicitación' />
                </div>
            </div>
        </>
    );
}
