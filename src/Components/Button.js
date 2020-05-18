import React from 'react';
import '../css/Button.css'

const Button = ({value}) => {

    return (
        <div>
            <button className='button-button'>
                {value}
            </button>
        </div>
    )
}

export default Button
