import React from 'react';

import Button from '../Button';

// import ButtonLink from '../ButtonLink';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/" >
                <img className="Logo" src={Logo} alt="reactflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;