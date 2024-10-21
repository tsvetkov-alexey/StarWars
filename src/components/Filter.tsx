import filter from '@/assets/filter.svg'

export const Filter = () => {
  return (
    <div className="section__filter">
      <div className="section__filter-content">
        <img className="section__filter-image"
          src={filter}
           alt="" 
          width="36" height="36" loading="lazy"
        />
        <h3 className="section__filter-title">Filter</h3>
      </div>
    </div>
  )
}
