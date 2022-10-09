import {AiOutlineSearch } from 'react-icons/ai'

import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => (
    <header className="Searchbar">
  <form className="SearchForm" onSubmit={onSubmit}>
    <button type="submit" className="SearchForm-button">
    <span className="searchForm-button-label">
          <AiOutlineSearch  className="SearchForm-button-search-icon" />
        </span>
    </button>

    <input
      className="SearchForm-input"
      name="query"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};