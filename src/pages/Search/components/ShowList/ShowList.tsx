import React, { FC, memo } from 'react';
import './ShowList.scss';
import { useTypedSelector } from '@src/hooks/useTypedSelector';
import ShowCard from '@src/pages/Search/components/ShowList/ShowCard';
import { ShowState } from '@src/store/types/reduxShowTypes';

const ShowList: FC<Record<string, unknown>> = () => {
    const showMap = useTypedSelector((state) => state.selectedShow);

    const showSortedByDateAdded = sortByDateAdded(showMap);


    return (
        <main className="show-list">

            {showSortedByDateAdded.length ?
                showSortedByDateAdded.map((show) => (
                    <ShowCard key={show.id} show={show}/>
                )) :
                <p className='show-list__placeholder'>Your show will be displayed here</p>
            }
        </main>
    );
};

export default memo(ShowList);

function sortByDateAdded (showMap: ShowState) {
    const show = Object.values(showMap);

    return show.sort((a, b) => {
        if (!a.dateAdded || !b.dateAdded) return 0;
        return a.dateAdded - b.dateAdded;
    });
}