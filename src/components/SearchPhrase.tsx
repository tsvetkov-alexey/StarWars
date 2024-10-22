import { selectFilter } from '@/redux/filter/slice';
import { useSelector } from 'react-redux';

export const SearchPhrase = () => {
  const { search } = useSelector(selectFilter);
  return (
    <div className="section__search-phrase">
      <h3 className="section__search-title">
        You are looking for: <span className="puddle-bg puddle-bg--red">{search}</span>
      </h3>
    </div>
  );
};
