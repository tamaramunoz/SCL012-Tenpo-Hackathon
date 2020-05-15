import React from 'react';
import '../css/ChatDialogue.css'
import n from '../img/n.png'

const ChatDialogue = ({ value }) => (
    <div className='chatDialogue'>
        <img src={n} alt='logo' className='chatDialogue-logo'></img>
        <p className='chatDialogue-bubble'>{value}</p>
    </div>
)
export default ChatDialogue