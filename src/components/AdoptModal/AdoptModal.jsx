import React from 'react';
import './AdoptModal.css';
import ImageFechar from '../../images/fechar.svg';

function AdoptModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className='adopt-modal__overlay' onClick={onClose}>
      <div className='adopt-modal' onClick={(e) => e.stopPropagation()}>
        <button className='adopt-modal__close-button' onClick={onClose}>
          <img src={ImageFechar} alt='Fechar' className='adopt-modal__close-icon' />
        </button>
        <p className='adopt-modal__success'>Inscrição concluída com sucesso!🐾</p>
      </div>
    </div>
  );
}

export default AdoptModal;
