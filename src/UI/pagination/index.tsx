import { setCharacters } from '@/redux/characters/slice';
import { selectFilter, setCurrentPage } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';

export const Pagination = () => {
  const totalPages = 9;

  const { currentPage } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const allPages = [...new Array(totalPages)].map((_, i) => (
    <li
      onClick={() => dispatch(setCurrentPage(i + 1))}
      key={i}
      className={
        i + 1 === currentPage ? 'pagination__item pagination__item--active' : 'pagination__item'
      }>
      {i + 1}
    </li>
  ));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCharacters([]));
      dispatch(setCurrentPage(page));
    }
  };

  return (
    <div className="pagination container section">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="pagination__button"
        disabled={currentPage === 1}>
        &lt;
      </button>
      <ul className="pagination__list">{allPages}</ul>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="pagination__button"
        disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};
