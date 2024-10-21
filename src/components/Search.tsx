import searchIcon from '@/assets/search-icon.svg';

export const Search = () => {
  return (
    <div className="section__search">
      <form className="section__form">
        <input type="text" placeholder="Type in character’s name..." className="section__form-input"/>
        <img src={searchIcon} width="42" height="42" loading="lazy" className="section__form-image" />
        <button className="section__form-button button button--transparent hidden-mobile" type="button">Search</button>
      </form>
    </div>
  )
}
