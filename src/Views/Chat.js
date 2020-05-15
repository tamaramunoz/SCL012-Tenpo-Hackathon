import React from 'react';
import '../Chat.css'
import back from '../img/back.png'
import n from '../img/n.png'
import Button from '../Components/Button'


function Chat() {
    return (
        <>
            <div className='chat-header'>
                <img className='chat-arrow' src={back} alt='back Arrow'></img>
                <h3>ATENCIÓN AL CLIENTE TENPO</h3>
            </div>
            <div className='chat-container'>
                <div className='chat-dialoge'>
                    <img src={n} alt='logo' className='chat-logo'></img>
                    <p className='chat-bubble'>Hola, encantados de comunicarnos contigo.</p>
                </div>
                <div className='chat-dialoge'>
                    <img src={n} alt='logo' className='chat-logo'></img>
                    <p className='chat-bubble'>¿En qué te podemos ayudar? Por favor selecciona una categoría</p>
                </div>
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

export default Chat;