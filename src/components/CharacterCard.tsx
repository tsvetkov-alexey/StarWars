import like from '@/assets/like.svg';
import { Character } from '@/redux/characters/types';

export const CharacterCard = ({ name, id }: Character) => {
  return (
    <div className="character-card">
      <div className="character-card__image">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}
          alt=""
          className="character-card__image-hero"
          width="260"
          height="358"
          loading="lazy"
        />
        <div className="character-card__image-like">
          <img
            src={like}
            alt="like"
            className="character-card__image-like-icon"
            width="19"
            height="16"
            loading="lazy"
          />
        </div>
      </div>
      <h2 className="character-card__title">{name}</h2>
      <button className="character-card__button button" type="button">
        Learn more
      </button>
    </div>
  );
};
