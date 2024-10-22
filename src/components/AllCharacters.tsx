import { CharacterCard } from './CharacterCard';
import { Loader } from '@/UI/loader';
import { useGetCharactersQuery } from '@/redux/characters/characterService';
import { setCharacters } from '@/redux/characters/slice';
import { selectFilter, setIsFetching } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const AllCharacters = () => {
  const { currentPage } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const { data, error, isFetching } = useGetCharactersQuery(currentPage);
  console.log(data);

  dispatch(setIsFetching(isFetching));

  const characters = isFetching ? (
    <Loader />
  ) : (
    data?.results.map((el, i) => <CharacterCard {...el} id={i + (currentPage - 1) * 10} key={i} />)
  );

  useEffect(() => {
    if (data?.results) {
      dispatch(setCharacters(data.results));
    }
    if (!isFetching) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [data, isFetching]);

  return <section className="section__cards container">{characters}</section>;
};
