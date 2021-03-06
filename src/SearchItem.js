import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault(e)}>
        <label htmlFor="searchItem"></label>
        <input 
         type="text"
         id="searchItem"
         placeholder='Search Item'
         role='searchbox'
         value={search}
         onChange={(e) =>{setSearch(e.target.value)}} />
    </form>
  )
}

export default SearchItem