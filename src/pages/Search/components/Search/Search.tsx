import React, { FC, useEffect, useRef, useState } from 'react';
import SearchDropdown from '@src/pages/Search/components/Search/SearchDropdown';
import { useClickOutside } from '@src/hooks/useClickOutside';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

export type SearchResult = { id: number; value: string };
type SearchProps = {
  onChange: (value: string) => void;
  onSelect: (res: SearchResult) => void;
  onSubmit: (res: SearchResult) => void;
  label: string;
  value: string;
  searchResults?: SearchResult[];
};

const Search: FC<SearchProps> = ({ onChange, label, searchResults, onSelect, value, onSubmit }) => {
  const [isSearchFocused, setFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SearchResult | undefined>(undefined);

  const submitRef = useRef<HTMLButtonElement>(null);

  // close searchBar only if click event occurs outside of search component, not on input blur.
  const searchRef = useRef(null);
  useClickOutside(searchRef, () => setFocused(false));

  const showDropdown = () => {
    setFocused(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(void 0);
    onChange(e.target.value);
  };

  const handleSelect = (searchResult: SearchResult) => {
    onSelect(searchResult);
    setSelectedValue(searchResult);
    setFocused(false);
  };

  const handleSubmit = () => {
    if (!selectedValue) return;
    onSubmit(selectedValue);
    setSelectedValue(void 0);
  };

  useEffect(() => {
    //focus submit button on selection
    if (selectedValue) submitRef.current?.focus();
  }, [selectedValue]);

  return (
    <div ref={searchRef} className="search">
      <div className="search__top-bar">
        <label className="search__label" htmlFor="search_input">
          {label}
        </label>
        {selectedValue && (
          <button className="search__submit" onClick={handleSubmit} ref={submitRef}>
            <span>Add</span>
            <FontAwesomeIcon icon={faPlus} className="search__icon-add" />
          </button>
        )}
      </div>
      <div className="search__field">
        <FontAwesomeIcon icon={faSearch} className="search__icon-search" />
        <input
          className="search__input"
          type="text"
          id="search_input"
          placeholder="Find show
"
          value={value}
          onChange={handleChange}
          onFocus={showDropdown}
        />
        {isSearchFocused && (
          <SearchDropdown onSelect={handleSelect} searchResults={searchResults} />
        )}
      </div>
    </div>
  );
};

export default Search;