import { Link } from 'react-router-dom';
import './PetCard.css';

function PetCard({ pet }) {
  return (
    <article className='pet-card'>
      <img src={pet.image} alt={pet.name} className='pet-card__image' />
      <h3 className='pet-card__name'>{pet.name}</h3>
      <p className='pet-card__type'>{pet.type}</p>
      <p className='pet-card__age'>{pet.age}</p>
      <Link to={`/pets/${pet.id}`} className='pet-card__button'>Ver mais</Link>
    </article>
  );
}

export default PetCard;
