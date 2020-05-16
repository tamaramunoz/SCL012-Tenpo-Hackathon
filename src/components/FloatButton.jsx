import React, { Fragment } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import nube from '../img/nube-dialogo.png'


const FloatButton = () => {
    return (
        <Fragment>
            <Dropdown>
                <Dropdown.Toggle className="bg-light" >
                    <img src={nube}
                    alt="tenpo img"/>
                </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Solucion 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Solucion 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Solucion 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        </Fragment>

    )
}

export default FloatButton;

