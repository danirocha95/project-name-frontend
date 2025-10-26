import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PetCard from '../../components/PetCard/PetCard.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import { fetchDogImages, fetchCatImages } from '../../utils/ThirdPartyApi.js';
import './SeeMorePets.css';

function SeeMorePets() {
  const [loading, setLoading] = useState(true);
  const [seeMorePets, setSeeMorePets] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadSeeMorePets();
  }, []);

  async function loadSeeMorePets() {
    setLoading(true);
    try {
      const [dogs, cats] = await Promise.all([
        fetchDogImages(6),
        fetchCatImages(6),
      ]);

      const dogNames = ['Rex', 'Buddy', 'Thor', 'Lola', 'Bella', 'Max', 'Cesar', 'Belinha'];
      const catNames = ['Mimi', 'Luna', 'Simba', 'Oliver', 'Nina', 'Leo', 'Petrucia', 'Maggie'];

      const formattedDogs = dogs.map((dog, index) => ({
        id: `dog-${index}`,
        name: dogNames[Math.floor(Math.random() * dogNames.length)],
        age: `${Math.floor(Math.random() * 10) + 1} anos`,
        image: dog.image,
      }));

      const formattedCats = cats.map((cat, index) => ({
        id: `cat-${index}`,
        name: catNames[Math.floor(Math.random() * catNames.length)],
        age: `${Math.floor(Math.random() * 10) + 1} anos`,
        image: cat.image,
      }));

      setSeeMorePets([...formattedDogs, ...formattedCats]);
    } catch (err) {
      console.error('Erro ao carregar animais:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleShowMore() {
    setLoading(true);
    try {
      const [moreDogs, moreCats] = await Promise.all([
        fetchDogImages(3),
        fetchCatImages(3),
      ]);

      const dogNames = ['Rex', 'Buddy', 'Thor', 'Lola', 'Bella', 'Max', 'Cesar', 'Belinha'];
      const catNames = ['Mimi', 'Luna', 'Simba', 'Oliver', 'Nina', 'Leo', 'Petrucia', 'Maggie'];

      const formattedDogs = moreDogs.map((dog, index) => ({
        id: `dog-more-${index}`,
        name: dogNames[Math.floor(Math.random() * dogNames.length)],
        age: `${Math.floor(Math.random() * 10) + 1} anos`,
        image: dog.image,
      }));

      const formattedCats = moreCats.map((cat, index) => ({
        id: `cat-more-${index}`,
        name: catNames[Math.floor(Math.random() * catNames.length)],
        age: `${Math.floor(Math.random() * 10) + 1} anos`,
        image: cat.image,
      }));

      setSeeMorePets((prev) => [...prev, ...formattedDogs, ...formattedCats]);
      setVisibleCount((prev) => prev + 3);
    } catch (err) {
      console.error('Erro ao carregar mais animais:', err);
    } finally {
      setLoading(false);
    }
  }

  const filteredPets = seeMorePets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visiblePets = filteredPets.slice(0, visibleCount);

  return (
    <section className='see-more-pets__pets'>
      <h2 className='see-more-pets__title'>Conheça os Pets que ganharam um novo lar 🐾</h2>
      <p className='see-more-pets__subtitle'>
        Aqui você encontra uma galeria de bichinhos que ganharam lares seguros e com carinho, deixando pra trás a rua e o abandono.
      </p>

      <input
        type='text'
        className='see-more-pets__search'
        placeholder='Buscar pet pelo nome'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='see-more-pets__list'>
        {visiblePets.length > 0 ? (
          visiblePets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <p className='see-more-pets__no-results'>Nada encontrado 😿</p>
        )}
      </div>

      {visibleCount < filteredPets.length || seeMorePets.length < 20 ? (
        <button
          className='see-more-pets__show-more'
          onClick={handleShowMore}
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Mostrar mais'}
        </button>
      ) : null}

      <Link to='/pets' className='see-more-pets__back'>← Voltar</Link>

      <div className={`see-more-pets__overlay ${loading ? 'active' : ''}`}>
        {loading && <Preloader />}
      </div>
    </section>
  );
}

export default SeeMorePets;
