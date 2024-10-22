import { CharacterCard } from './CharacterCard';
import { Loader } from '@/UI/loader';
import { useCharacters } from '@/hooks/useCharacters';
import { selectCharacters, setCharacters } from '@/redux/characters/slice';
import { setIsFetching } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AllCharacters = () => {
  const { data, error, isFetching } = useCharacters();
  const dispatch = useAppDispatch();

  dispatch(setIsFetching(isFetching));

  useEffect(() => {
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

  const { charactersData } = useSelector(selectCharacters);

  const characters = isFetching ? (
    <Loader />
  ) : (
    charactersData?.results.map((el, i) => <CharacterCard {...el} key={i} />)
  );

  return <section className="section__cards container">{characters}</section>;
};
