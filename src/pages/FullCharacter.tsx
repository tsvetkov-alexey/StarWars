import { selectCharacters } from '@/redux/characters/slice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const FullCharacter = () => {
  const { id } = useParams<{ id: string }>();
  const { charactersData } = useSelector(selectCharacters);
  const [homeworldName, setHomeworldName] = useState<string | null>(null);

  if (!id) {
    return <div>Character ID not found</div>;
  }

  const character = charactersData?.results.find((char) => char.url.includes(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const response = await fetch(character.homeworld);
        const planetData = await response.json();
        setHomeworldName(planetData.name);
      } catch (error) {
        console.error('Failed to fetch homeworld:', error);
      }
    };

    fetchHomeworld();
  }, [character.homeworld]);

  return (
    <>
      <main className="content">
        <section className="section container">
          <div className="full-character">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
              width="400"
              height="550"
              loading="lazy"
              className="full-character__image"
            />
            <div className="full-character__info">
              <h3 className="full-character__info-title">{character.name}</h3>
              <ul className="full-character__info-text">
                <li className="full-character__info-item">Gender: {character.gender}</li>
                <li className="full-character__info-item">Height: {character.height}</li>
                <li className="full-character__info-item">Mass: {character.mass}</li>
                <li className="full-character__info-item">Hair color: {character.hair_color}</li>
                <li className="full-character__info-item">Eye color: {character.eye_color}</li>
                <li className="full-character__info-item">
                  Homeworld: {homeworldName || 'Loading...'}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
