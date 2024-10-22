import filter from '@/assets/filter.svg';
import { useGenderFilter } from '@/hooks/useGenderFilter';
import { selectFilter } from '@/redux/filter/slice';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export type PopupClick = MouseEvent & {
  composedPath(): Node[];
};

export const Filter = () => {
  const [open, setOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const { allGenders, male, female, notAvailableGender } = useSelector(selectFilter);
  const { handleGenderChange } = useGenderFilter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (filterRef.current && !_e.composedPath().includes(filterRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="section__filter">
      <div className="section__filter-content" ref={filterRef} onClick={() => setOpen(!open)}>
        <img
          className="section__filter-image"
          src={filter}
          alt=""
          width="36"
          height="36"
          loading="lazy"
        />
        <h3 className="section__filter-title">Filter</h3>

        {open && (
          <form className="section__filter-block" onClick={handleFilterClick}>
            <h3 className="section__filter-title">Applies for each page individually!</h3>
            <input
              type="checkbox"
              id="all"
              name="all"
              value="all"
              checked={allGenders}
              onChange={() => handleGenderChange('all')}
            />
            <label htmlFor="all">All</label>
            <br />
            <input
              type="checkbox"
              id="male"
              name="male"
              value="male"
              checked={male}
              onChange={() => handleGenderChange('male')}
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
              type="checkbox"
              id="female"
              name="female"
              value="female"
              checked={female}
              onChange={() => handleGenderChange('female')}
            />
            <label htmlFor="female">Female</label>
            <br />
            <input
              type="checkbox"
              id="N/A"
              name="N/A"
              value="N/A"
              checked={notAvailableGender}
              onChange={() => handleGenderChange('N/A')}
            />
            <label htmlFor="N/A">N/A</label>
          </form>
        )}
      </div>
    </div>
  );
};
