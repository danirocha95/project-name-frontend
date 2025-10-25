import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import FooterLogo from '../../images/pata_transparente.svg';
import PetsImage from '../../images/pet-casa.png'

const Footer = () => {
  return (
    <footer className='footer' id='contato'>
      <div className='footer__content'>
        <div className='footer__logo'>
          <img src={FooterLogo}  alt='Imagem de uma pata contornada com um fundo transparente' className='footer__logo-img' />
          <h2 className='footer__title'>
            Adote<span>Amigo</span>
          </h2>
        </div>

        <div className='footer__right'>
          <div className='footer__links'>
            <a href='#  '>Início</a>
            <a href='/sobre'>Sobre</a>
          </div>

          <div className='footer__socials'>
            <a href='http://instagram.com' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a href='http://facebook.com'target='_blank' aria-label='Facebook'>
              <FaFacebookF />
            </a>
            <a href='https://www.whatsapp.com/?lang=en'target='_blank' aria-label='WhatsApp'>
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className='footer__subtitle-container'>
      <p className='footer__paragraph'>Conectando lares e corações.</p>
      <img src={PetsImage} alt='imagem de um gato e um cachorro unidos por um coração' className='footer__logo-pets'/>
      </div>
      <div className='footer__bottom'>
        <p>&copy; 2025 AdoteAmigo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
