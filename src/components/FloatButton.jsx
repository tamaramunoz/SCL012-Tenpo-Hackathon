import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap'
import nube from '../img/nube-dialogo.png';
import Chat from '../Views/Chat';



const FloatButton = () => {
    return (
        <Fragment>
            <Dropdown>
                <Dropdown.Toggle className="bg-light" >
                    <img src={nube}
                    alt="tenpo img"/>
                </Dropdown.Toggle>

            <Dropdown.Menu>
                <Chat />
            </Dropdown.Menu>
        </Dropdown>

        </Fragment>

    )
}

export default FloatButton

