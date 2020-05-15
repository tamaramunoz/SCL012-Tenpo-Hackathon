import React, { Fragment } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import nube from '../img/nube-dialogo.png'


const FloatButton = () => {
    return (
        <Fragment>
            <img src={nube} alt="nube-dialogo" />  
            <DropdownButton title='nubecita drop-down' >      
                     
                <Dropdown.Item eventKey="1">Posibles soluciones 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Posibles soluciones 1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Posibles soluciones 1</Dropdown.Item>
                
            </DropdownButton>
            
            
             
            
            

        </Fragment>
    )
}

export default FloatButton
