import React from 'react';
import '../css/Button.css'


const Button = ({value, onClick}) => {

    
    return (
        <div>
            <button className='button-button'
                onClick={(event) => { onClick(event) }}>
                {value}
            </button>
        </div>
    )
}

export default Button
