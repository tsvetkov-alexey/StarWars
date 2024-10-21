import like from '@/assets/like.svg';
import luke from '@/assets/1.png';

export const CharacterCard = () => {
  return (
    <div className="character-card">
      <div className="character-card__image">
        <img 
          src={luke}
          alt="" 
          className="character-card__image-hero"
          width="260" height="358" loading="lazy"
        />
        <div className="character-card__image-like">
          <img 
            src={like}
            alt="like" 
            className="character-card__image-like-icon"
            width="19" height="16" loading="lazy"
          />
        </div>
      </div>
      <h2 className="character-card__title">Luke Skywalker</h2>
      <button className="character-card__button button" type="button">Learn more</button>
    </div>  
  )
}
