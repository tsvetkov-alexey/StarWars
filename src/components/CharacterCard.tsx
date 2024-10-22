import likeIcon from '@/assets/like.svg';
import likedIcon from '@/assets/liked.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type CharacterCardProps = {
  name: string;
  url: string;
  onRemoveFavourite?: (id: string) => void;
};

export const CharacterCard = ({ name, url, onRemoveFavourite }: CharacterCardProps) => {
  const id = url.replace('https://swapi.dev/api/people/', '').replace('/', '');

  const [liked, setLike] = useState(() => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    return favourites.some((char: { id: string }) => char.id === id);
  });

  const handleLike = () => {
    setLike(!liked);
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');

    if (!liked) {
      favourites.push({ id, name });
    } else {
      favourites = favourites.filter((char: { id: string }) => char.id !== id);
      if (onRemoveFavourite) {
        onRemoveFavourite(id); // Проверяем, передан ли onRemoveFavourite, перед вызовом
      }
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
  };

  return (
    <div className="character-card">
      <div className="character-card__image">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
          className="character-card__image-hero"
          width="260"
          height="358"
          loading="lazy"
        />
        <div className="character-card__image-like" onClick={handleLike}>
          <img
            src={liked ? likedIcon : likeIcon}
            alt="like"
            className="character-card__image-like-icon"
            width="19"
            height="16"
            loading="lazy"
          />
        </div>
      </div>
      <h2 className="character-card__title">{name}</h2>
      <Link to={`/character/${id}`} className="character-card__button button">
        Learn more
      </Link>
    </div>
  );
};
