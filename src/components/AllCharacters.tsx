import { CharacterCard } from './CharacterCard';
import { Loader } from '@/UI/loader';
import { useCharacters } from '@/hooks/useCharacters';
import { selectCharacters, setCharacters } from '@/redux/characters/slice';
import { selectFilter, setIsFetching } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AllCharacters = () => {
  const { data, isFetching } = useCharacters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsFetching(isFetching));
    if (data) {
      dispatch(setCharacters(data));
    }
    if (!isFetching) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [data, isFetching]);

  const { allGenders, male, female, notAvailableGender } = useSelector(selectFilter);
  const { charactersData } = useSelector(selectCharacters);

  // Фильтрация персонажей по полу
  const filteredCharacters = charactersData?.results?.filter((character) => {
    if (allGenders) return true; // Если выбрано "все", не фильтруем
    if (male && character.gender === 'male') return true;
    if (female && character.gender === 'female') return true;
    if (notAvailableGender && character.gender === 'n/a') return true;
    return false;
  });

  if (isFetching) {
    return <Loader />;
  }

  return (
    <section className="section__cards container">
      {filteredCharacters && filteredCharacters.length > 0 ? (
        filteredCharacters.map((el) => <CharacterCard {...el} key={el.url} />)
      ) : (
        <h3 className="section__cards-none">Oops! There is nothing here</h3>
      )}
    </section>
  );
};
