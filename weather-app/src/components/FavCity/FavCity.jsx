

function FavCity({change}) {
  
  return (
    <div>
      <label htmlFor="cities">Choose a city:</label>
      <select name="cities" id="cities" onChange={change}>
        <option value="London">London</option>
        <option value="Budapest">Budapest</option>
        <option value="Köln">Köln</option>
        <option value="Sydney">Sydney</option>
        <option value="Detroit">Detroit</option>
      </select>
    </div>
  )
}

export default FavCity;
