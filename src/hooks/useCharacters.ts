import {
  useGetCharactersQuery,
  useSearchCharactersQuery,
} from '@/redux/characters/characterService';
import { selectFilter } from '@/redux/filter/slice';
import { useSelector } from 'react-redux';

export const useCharacters = () => {
  const { currentPage, search: searchTitle } = useSelector(selectFilter);
  if (searchTitle) {
    return useSearchCharactersQuery({ search: searchTitle, page: currentPage });
  }
  return useGetCharactersQuery(currentPage);
};
