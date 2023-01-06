import React, { FC } from 'react';

type SearchDropDownProps = {
    searchResults?: { id: number; value: string }[];
    onSelect: (value: string, id: number) => void;
};

const SearchDropdown: FC<SearchDropDownProps> = ({ onSelect, searchResults }) => {

    if (!searchResults || !searchResults.length) return null;

    return (
        <ul className="search__dropdown">
            {searchResults.map(({ value, id }) => <SearchDropdownItem key={id} value={value} id={id} onSelect={onSelect}/>)}
        </ul>
    );
};

type SearchDropDownItemProps = {
    value: string;
    id: number;
    onSelect: (value: string, id: number) => void;
};
const SearchDropdownItem: FC<SearchDropDownItemProps> = ({ value, onSelect, id }) => {
    const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSelect(value, id);
    }
    return <li>
        <button onClick={handleSelect}>{value}</button>
    </li>
}
export default SearchDropdown;