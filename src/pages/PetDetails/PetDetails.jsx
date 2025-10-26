import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdoptModal from '../../components/AdoptModal/AdoptModal';
import './PetDetails.css';

function PetDetails() {
  const { id } = useParams();
  const [isAdoptOpen, setIsAdoptOpen] = useState(false);

  const pets = [
    { id: '1', name: 'Luna', type: 'Gato', age: '2 anos', gender: 'Fêmea', coat: 'Curta', description: 'Luna é uma gatinha tranquila e independente mas muito carinhosa e leal.', image: 'https://images.unsplash.com/photo-1681956271784-87c5332752ad?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170' },

    { id: '2', name: 'Mia', type: 'Gato', age: '1 ano', gender: 'Fêmea', coat: 'Curta', description: 'Mia é uma gatinha independente e gosta de passar tempo sozinha brincando com os objetos que encontra no chão.', image: 'https://cdn2.thecatapi.com/images/bpc.jpg' },

    { id: '3', name: 'Rex', type: 'Cachorro', age: '4 anos', gender: 'Macho', coat: 'Longa', description: 'Rex é um cachorro carinhoso e que adora brincar ao ar livre.', image: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg' },

    { id: '4', name: 'Nina', type: 'Gato', age: '6 meses', gender: 'Fêmea', coat: 'Curta', description: 'Nina é uma gatinha de muita energia e adora escalar obstáculos.', image: 'https://images.unsplash.com/photo-1610954218806-3c40ecbb9f0d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170' },

    { id: '5', name: 'Chico', type: 'Cachorro', age: '3 anos', gender: 'Macho', coat: 'Curta', description: 'Chico é um cachorro brincalhão e adora perseguir brinquedos.', image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170' },

    { id: '6', name: 'Bobby', type: 'Cachorro', age: '2 anos', gender: 'Macho', coat: 'Curta', description: 'Bobby é um cachorro sociável e brincalhão.', image: 'https://images.unsplash.com/photo-1680507729804-742f8e732df6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=880' },

    { id: '7', name: 'Mingau', type: 'Gato', age: '4 meses', gender: 'Macho', coat: 'Longa', description: 'Mingau é um gatinho curioso, apegado e possui uma personalidade tranquila.', image: 'https://images.unsplash.com/photo-1570561447008-9947fbafd30b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170' },
    
    { id: '8', name: 'Pandora', type: 'Cachorro', age: '1 ano', gender: 'Fêmea', coat: 'Curta', description: 'Pandora é uma cachorrinha curiosa e bastante sociável, com uma personalidade alegre.', image: 'https://images.unsplash.com/photo-1673487069586-0ade08b52e0a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=974' },
  ];

  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <section className='pet-details'>
        <p>Informação não disponível</p>
        <Link to='/mais-animais' className='pet-details__back'>← Voltar</Link>
      </section>
    );
  }

  const handleAdoptClick = () => {
    setIsAdoptOpen(true);

    setTimeout(() => setIsAdoptOpen(false), 2000);
  };

  return (
    <section className='pet-details'>
      <img src={pet.image} alt={pet.name} className='pet-details__image' />
      <h2 className='pet-details__name'>{pet.name}</h2>
      <p className='pet-details__info'><span>Tipo:</span> {pet.type}</p>
      <p className='pet-details__info'><span>Idade:</span> {pet.age}</p>
      <p className='pet-details__info'><span>Sexo:</span> {pet.gender}</p>
      <p className='pet-details__info'><span>Pelagem:</span> {pet.coat}</p>
      <p className='pet-details__description'>{pet.description}</p>

      <button className='pet-details__button' onClick={handleAdoptClick}>Quero Adotar</button>
      <Link to='/pets' className='pet-details__back'>← Voltar</Link>

      <AdoptModal isOpen={isAdoptOpen} onClose={() => setIsAdoptOpen(false)} />
    </section>
  );
}

export default PetDetails;
