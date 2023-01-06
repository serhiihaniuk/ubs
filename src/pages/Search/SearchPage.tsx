import { getFilms } from '@src/services/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Search, { SearchResults } from '@src/pages/Search/components/Search/Search';

const SearchPage = () => {
  const [showQuery, setShowQuery] = useState('');
  const [selectedShowID, setSelectedShowID] = useState<number>();
  const { data } = useQuery({
    queryKey: ['show', showQuery],
    queryFn: getFilms
  });

  //TODO: memo this calculation
  const searchResults: SearchResults[] | undefined = data?.map(({ show }) => ({ id: show.id, value: show.name }));

  const handleSelect = (value: number) => {
    setSelectedShowID(value);
  };

  const handleQueryChange = (value: string) => {
    setShowQuery(value);
    setSelectedShowID(undefined);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Search
        onChange={handleQueryChange}
        onSelect={handleSelect}
        label={'Show'}
        searchResults={searchResults}
      />
      {selectedShowID && <div>ADD {selectedShowID}</div>}
    </div>
  );
};

export default SearchPage;
