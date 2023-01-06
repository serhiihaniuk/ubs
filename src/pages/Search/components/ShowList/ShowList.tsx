import React, { FC } from 'react';
import './ShowList.scss';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import ShowCard from '@src/pages/Search/components/ShowList/ShowCard';
import { ShowState } from '@src/store/types/reduxShowTypes';

const ShowList: FC<Record<string, unknown>> = () => {
  const showMap = useTypedSelector((state) => state.selectedShow);

  return (
    <div className="show-list">
      {sortByDateAdded(showMap).map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;

function sortByDateAdded(showMap: ShowState) {
  const show = Object.values(showMap);
  return show.sort((a, b) => {
    if (!a.dateAdded || !b.dateAdded) return 0;
    return a.dateAdded - b.dateAdded;
  });
}