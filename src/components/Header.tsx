import logo from '@/assets/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="/" className="header__logo logo" aria-label="Star Wars">
          <img
            src={logo}
            alt=""
            className="header__logo-img"
            width="54"
            height="54"
            loading="lazy"
          />
          <span className="header__logo-text">Star Wars</span>
        </a>
        <nav className="header__menu">
          <a href="/" className="header__menu-link">
            Favourites
          </a>
        </nav>
      </div>
    </header>
  );
};
