import React from 'react';
import { Link } from 'react-router-dom';
import PetLogo from '../../images/pet-casa.png';
import './Home.css';

function Home() {
  return (
    <main className='home'>
      <section className='home__intro'>
        <h1 className='home__title'>
          Adote um <span className='home__title-span'>Amigo</span>
        </h1>
        <img
          src={PetLogo}
          alt='Logo de uma casa de pet com dois animais de estimação dentro: um gato e um cachorro'
          className='home-pet_logo'
        />
        <p className='home__subtitle'>
          Mude a vida de um bichinho e ganhe amor em dobro!
        </p>
        <Link to='/pets' className='home__button'>
          Adote agora
        </Link>
      </section>

      <section className='home__about'>
        <h2 className='home__about-title'>Sobre o projeto</h2>
        <p className='home__about-text'>
          Nosso site conecta pessoas dispostas a adotar com ONGs e protetores
          independentes. Aqui você encontra cães e gatos que estão prontos para
          ser recebidos em lares acolhedores e cheios de carinho.
        </p>
      </section>
    </main>
  );
}

export default Home;
