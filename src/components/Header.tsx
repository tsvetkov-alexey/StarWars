import logo from '@/assets/logo.svg';
import { setCurrentPage, setSearch } from '@/redux/filter/slice';
import { useAppDispatch } from '@/redux/store';
import { Link } from 'react-router-dom';

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogo = () => {
    dispatch(setSearch(''));
    dispatch(setCurrentPage(1));
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo logo" aria-label="Star Wars" onClick={handleLogo}>
          <img
            src={logo}
            alt=""
            className="header__logo-img"
            width="54"
            height="54"
            loading="lazy"
          />
          <span className="header__logo-text">Star Wars</span>
        </Link>
        <nav className="header__menu">
          <Link to="/favourites" className="header__menu-link">
            Favourites
          </Link>
        </nav>
      </div>
    </header>
  );
};
