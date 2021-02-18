

function FavCity({change}) {
  
  return (
    <div>
      <h2 className="fav-h2">Favorite Cities</h2>
      <div className="cities-container">
        <label htmlFor="cities">Choose a city: </label>
        <select name="cities" id="cities" onChange={change}>
          <option value="London">Budapest</option>
          <option value="Budapest">Sonkád</option>
          <option value="Köln">Bugyi</option>
          <option value="Sydney">Ondód</option>
          <option value="Detroit">Makkoshotyka</option>
        </select>
      </div>
    </div>
  )
}

export default FavCity;
