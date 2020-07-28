import React from 'react';
import { FooterBase } from './styles';
import image from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/romuloqaz/">
        <img height="50px" src={image} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por 
        {' '}
        <a href="https://github.com/romuloqaz/">
          Romulo Pereira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
