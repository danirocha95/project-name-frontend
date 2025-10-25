import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/pata_transparente.svg';
import RegisterModal from '../RegisterModal/RegisterModal';
import LoginModal from '../LoginModal/LoginModal';
import UserIcon from '../../images/user-icon.svg';
import MenuIcon from '../../images/menu.svg'; 
import CloseIcon from '../../images/fechar.svg';

function Header() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) setUser(loggedUser);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    setUser(null);
  };

  return (
    <header className='header'>
      
      <div className='header__logo'>
        <img src={logo} alt='Logo do site' className='header__logo-img' />
        <h1>Adote<span>Amigo</span></h1>
      </div>

    <nav className={`header__nav  ${isMenuOpen ? 'open' : ''}`}>
      <ul className='header__list'>
        <li><Link to='/' onClick={closeMenu}>Início</Link></li>
        <li><Link to='/mais-animais' onClick={closeMenu}>Pets adotados</Link></li>
        <li><Link to='/sobre' onClick={closeMenu}>Sobre</Link></li>

        {user && (
          <li className='header__mobile-logout'>
            <button onClick={() => { handleLogout(); closeMenu(); }}>Sair</button>
          </li>
        )}
      </ul>
    </nav>

     <div className='header__buttons'>

        {!user && (
          <button className='register-modal__submit' onClick={() => setIsRegisterOpen(true)}>
            Inscrever-se
          </button>
        )}

        {user && (
          <>
            <span>Olá, {user}</span>
            <img src={UserIcon} alt='icone de usuário' className='header__welcome-img' />
            <button onClick={handleLogout}>Sair</button>
          </>
        )}

          <button className='header__hamburger-button' onClick={toggleMenu}>
            <img
              src={isMenuOpen ? CloseIcon : MenuIcon}
              alt={isMenuOpen ? 'Fechar menu' : 'Menu'}
              className='header__hamburger-icon'
            />
          </button>
        </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(name) => setUser(name)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
        }}
      />
    </header>
  );
}

export default Header;
