import React, { memo, useMemo, useState } from 'react';
import './SearchPage.scss';
import { getShow } from '@src/services/api';
import { useQuery } from '@tanstack/react-query';
import Search, { type SearchResult } from '@src/pages/Search/components/Search/Search';
import { boundShowActions } from '@src/store/actions/showActions';
import ShowList from '@src/pages/Search/components/ShowList/ShowList';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showQuery, setShowQuery] = useState('');
  const { data: showData } = useQuery({
    queryKey: ['show', showQuery],
    queryFn: getShow
  });

  const searchResults: SearchResult[] | undefined = useMemo(
    () =>
      showData?.map(({ show }) => ({
        id: show.id,
        value: show.name
      })),
    [showData]
  );

  const handleSelect = ({ value }: SearchResult) => {
    setSearchValue(value);
  };

  const handleQueryChange = (value: string) => {
    setShowQuery(value);
    setSearchValue(value);
  };

  const handleAddShow = (selectedShow: SearchResult) => {
    if (!showData) return;
    const selectedShowData = showData.find(({ show }) => show.id === selectedShow.id);

    if (selectedShowData) {
      boundShowActions.add(selectedShowData.show);

      //reset inputs
      setShowQuery('');
      setSearchValue('');
    }
  };

  return (
    <main className="search-page">
      <div className="search-page__search">
        <Search
          onChange={handleQueryChange}
          onSelect={handleSelect}
          label={'Find show'}
          searchResults={searchResults}
          value={searchValue}
          onSubmit={handleAddShow}
        />
      </div>
      <ShowList />
    </main>
  );
};

export default memo(SearchPage);
