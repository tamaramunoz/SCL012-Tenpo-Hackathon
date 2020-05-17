import React from 'react'
import '../css/Phone.css'

const Phone = () => {
    return (
        <div>
            <div className="banner-phone">
                <div className="phone" >
                    <p>Teléfono</p>
                    <p>Más</p>
                </div>
                <div className="options">
                    <p>Registro</p>
                    <p>Favoritos</p>
                    <p>Contacto</p>
                </div>
            </div>
            <div className="visor">
                <p>600 360 0355</p>
            </div>
            <div className="numbers" >
                <table>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                    <tr>
                        <th>*</th>
                        <th>0</th>
                        <th>#</th>
                    </tr>
                    <tr>
                        <th>cam</th>
                        <th>call</th>
                        <th>hide</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Phone
