import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import ImageFechar from '../../images/fechar.svg';

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setFormData({ email: '', password: '' });
      setSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      setSuccess(true);
      setTimeout(() => {
        onLoginSuccess(storedUser.name);
        localStorage.setItem('loggedUser', storedUser.name);

        setSuccess(false);
        setFormData({ email: '', password: '' });
        onClose();
      }, 1200);
    } else {
      setErrorMessage('E-mail ou senha incorretos!');
    }
  };

  return (
    <div className='login-modal__overlay' onClick={onClose}>
      <div className='login-modal' onClick={(e) => e.stopPropagation()}>
        <button className='login-modal__close-button' onClick={onClose}>
          <img src={ImageFechar} alt='botão fechar' className='login-modal__close-icon' />
        </button>

        {success ? (
          <p className='login-modal__success'>Bem-vindo(a)!</p>
        ) : (
          <form onSubmit={handleSubmit} className='login-modal__form'>
            <h2>Entrar</h2>
            <input
              type='email'
              placeholder='E-mail'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              placeholder='Senha'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />

            {errorMessage && <p className='login-modal__error'>{errorMessage}</p>}

            <button className='login-modal__submit' type='submit'>Entrar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
