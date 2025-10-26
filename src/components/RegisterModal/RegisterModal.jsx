import React, { useState, useEffect } from 'react';
import './RegisterModal.css';
import ImageFechar from '../../images/fechar.svg';

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('As senhas não coincidem!');
      return;
    }

    
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser && storedUser.email === formData.email) {
      setErrorMessage('E-mail já cadastrado!');
      return;
    }

   
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        onClose();
      }, 1500);
    }, 500);
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='register-modal__overlay' onClick={onClose}>
      <div className='register-modal' onClick={(e) => e.stopPropagation()}>
        <button className='register-modal__close-button' onClick={onClose}>
          <img src={ImageFechar} alt='botão fechar' className='register-modal__close-icon' />
        </button>

        {success ? (
          <p className='register-modal__success'>Cadastro concluído com sucesso!</p>
        ) : (
          <>
            <h2 className='register-modal__title'>Inscrever-se</h2>
            <form className='register-modal__form' onSubmit={handleSubmit}>
              <label>
                <input
                  type='text'
                  placeholder='Nome'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type='email'
                  placeholder='E-mail'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type='password'
                  placeholder='Senha'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type='password'
                  placeholder='Confirmar senha'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
              {errorMessage && <p className='register-modal__error'>{errorMessage}</p>}

            <div className='register-modal__button-container'>
            <button type='submit' className='register-modal__submit'>
            Inscrever-se
            </button>
            <button
                type='button'
                onClick={onSwitchToLogin}
                className='register-modal__link'
              >
                ou login
            </button> 
            </div>
            </form>
          </>   
        )}
      </div>
    </div>
  );
}

export default RegisterModal;
