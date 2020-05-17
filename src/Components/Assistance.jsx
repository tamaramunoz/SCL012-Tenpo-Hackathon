import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap'
import nube from '../img/information.png';
import ModalMail from './ModalMail';

const Assistance = () => {
    return (
        <Fragment>
            <Dropdown>
                <Dropdown.Toggle className="bg-light" >
                    <img src={nube}
                    alt="tenpo img"
                    width={50}
                    />
                </Dropdown.Toggle>

            <Dropdown.Menu>
                <ModalMail />
            </Dropdown.Menu>
        </Dropdown>

        </Fragment>

    )
}

export default Assistance;
