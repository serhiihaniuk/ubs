import React, { FC, useRef, useState } from 'react';
import SearchDropdown from '@src/pages/Search/components/Search/SearchDropdown';
import { useClickOutside } from '@src/hooks/useClickOutside';
import './Search.scss';

export type SearchResults = { id: number; value: string };
type SearchProps = {
  onChange: (value: string) => void;
  onSelect: (value: number) => void;
  label: string;
  searchResults?: SearchResults[];
};

const Search: FC<SearchProps> = ({ onChange, label, searchResults, onSelect }) => {
  const [value, setValue] = useState('');
  const [isSearchFocused, setFocused] = useState(false);

  // close searchBar only if click event occurs outside of search component, not on input blur.
  const searchRef = useRef(null);
  useClickOutside(searchRef, () => setFocused(false));

  const showDropdown = () => {
    setFocused(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect = (value: string, id: number) => {
    onSelect(id);
    setValue(value);
    setFocused(false);
  };

  return (
    <div ref={searchRef}>
      <label>
        {label}
        <input type="text" value={value} onChange={handleChange} onFocus={showDropdown} />
        {isSearchFocused && (
          <SearchDropdown onSelect={handleSelect} searchResults={searchResults} />
        )}
      </label>
    </div>
  );
};

export default Search;