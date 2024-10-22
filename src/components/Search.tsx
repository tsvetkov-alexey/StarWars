import searchIcon from '@/assets/search-icon.svg';
import { setSearch } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { useState } from 'react';

export const Search = () => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(value));
  };

  return (
    <div className="section__search">
      <form className="section__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type in character’s name..."
          className="section__form-input"
        />
        <img
          src={searchIcon}
          width="42"
          height="42"
          loading="lazy"
          className="section__form-image"
        />
        <button
          className="section__form-button button button--transparent hidden-mobile"
          type="button">
          Search
        </button>
      </form>
    </div>
  );
};
