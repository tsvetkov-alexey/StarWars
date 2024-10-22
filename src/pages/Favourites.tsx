import { CharacterCard } from '@/components/CharacterCard';
import { useState, useEffect } from 'react';

export const Favourites = () => {
  const [favourites, setFavourites] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    setFavourites(savedFavourites);
  }, []);

  const handleRemoveFavourite = (id: string) => {
    const updatedFavourites = favourites.filter((fav) => fav.id !== id);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <>
      <main className="content">
        <section className="section container">
          <header className="section__header">
            <h2 className="section__title">
              <span className="puddle-bg puddle-bg--red">Favourite</span> Characters
            </h2>
          </header>
          <div className="section__favourites">
            {favourites.length > 0 ? (
              favourites.map(({ id, name }) => (
                <CharacterCard
                  key={id}
                  name={name}
                  url={`https://swapi.dev/api/people/${id}/`}
                  onRemoveFavourite={handleRemoveFavourite} // Передаем функцию для удаления
                />
              ))
            ) : (
              <p>No favourite characters yet.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
