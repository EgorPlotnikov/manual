import "./buttonsearch.css"

function ButtonSearch() {
  return (
    <div className="button-search">
        <input id="1" placeholder="Поиск" />
        <div className={'search-box'}>
          <img src="/search.svg" alt="Search" width={16} height={16} />
        </div>
    </div>
  )
}

export default ButtonSearch