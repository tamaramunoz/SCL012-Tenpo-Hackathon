import React from 'react';
import '../css/Button.css'

const Button = ({ value, onClick }) => (
    
    <button className='button-button'
        onClick={(event) => { onClick(event) }}>
        {value}
    </button>
)
export default Button;