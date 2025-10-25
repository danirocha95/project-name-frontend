import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../../components/PetCard/PetCard.jsx';
import './Pets.css';

function Pets() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  const pets = [
    { id: 1, name: 'Luna', age: '2 anos', image: 'https://images.unsplash.com/photo-1681956271784-87c5332752ad?...' },
    { id: 2, name: 'Mia', age: '1 ano', image: 'https://cdn2.thecatapi.com/images/bpc.jpg' },
    { id: 3, name: 'Rex', age: '4 anos', image: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg' },
    { id: 4, name: 'Nina', age: '6 meses', image: 'https://images.unsplash.com/photo-1610954218806-3c40ecbb9f0d?...' },
    { id: 5, name: 'Chico', age: '3 anos', image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?...' },
    { id: 6, name: 'Bobby', age: '4 anos', image: 'https://images.unsplash.com/photo-1680507729804-742f8e732df6?...' },
    { id: 7, name: 'Mingau', age: '4 meses', image: 'https://images.unsplash.com/photo-1570561447008-9947fbafd30b?...' },
    { id: 8, name: 'Pandora', age: '1 ano', image: 'https://images.unsplash.com/photo-1673487069586-0ade08b52e0a?...' },
  ];

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visiblePets = filteredPets.slice(0, visibleCount);

  return (
    <section className='pets'>
      <h2 className='pets__title'>Animais para Adoção 🐕‍🦺</h2>

      <input
        type='text'
        placeholder='Buscar pet pelo nome'
        className='pets__search'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setVisibleCount(3);
        }}
      />

      <div className='pets__list'>
        {visiblePets.length > 0 ? (
          visiblePets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <p className='pets__no-results'>Nenhuma informação encontrada 🐾</p>
        )}
      </div>

      {visibleCount < filteredPets.length && (
        <button
          className='pets__show-more-button'
          onClick={() => setVisibleCount((prev) => prev + 3)}
        >
          Mostrar mais
        </button>
      )}
      <Link to='/' className='pets__back'>← Voltar</Link>
    </section>
  );
}

export default Pets;
