import React, { FC } from 'react';
import { SearchResult } from '@src/pages/Search/components/Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';

type SearchDropDownProps = {
  searchResults?: { id: number; value: string }[];
  onSelect: (res: SearchResult) => void;
};

const SearchDropdown: FC<SearchDropDownProps> = ({ onSelect, searchResults }) => {
  if (!searchResults || !searchResults.length) return null;

  return (
    <ul className="search__dropdown">
      {searchResults.map((searchResult) => (
        <SearchDropdownItem key={searchResult.id} searchResult={searchResult} onSelect={onSelect} />
      ))}
    </ul>
  );
};

type SearchDropDownItemProps = {
  searchResult: SearchResult;
  onSelect: (res: SearchResult) => void;
};
const SearchDropdownItem: FC<SearchDropDownItemProps> = ({ searchResult, onSelect }) => {
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSelect(searchResult);
  };
  return (
    <li className="search__item">
      <FontAwesomeIcon icon={faFilm} />
      <button onClick={handleSelect}>{searchResult.value}</button>
    </li>
  );
};
export default SearchDropdown;