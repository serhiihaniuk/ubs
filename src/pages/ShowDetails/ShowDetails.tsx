import React, { memo } from 'react';
import './ShowDetails.scss';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSingleShow } from '@src/services/api';
import { sanitizeHTML } from '@src/utils/sanitizeHTML';

const ShowDetails = () => {
  const { id } = useParams();
  const {
    data: show,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['show', String(id)],
    queryFn: getSingleShow
  });

  if (isLoading) return <main className="show-details">Loading...</main>;
  if (isError) return <main className="show-details">Error...</main>;

  return (
    <main className="show-details">
      <h1 className="show-details__title"> {show?.name}</h1>
      <div className="show-details__img-wrapper">
        <img className="show-details__image" src={show?.image?.medium} alt={show?.name} />
      </div>
      <p>{!!show?.genres.length && 'Genres: ' + show.genres.join(', ')}</p>
      <p> Language: {show?.language}</p>
      {show?.rating.average && <p> Rating: {show.rating.average}</p>}
      {show?.network?.country?.name && <p> Country: {show.network.country.name}</p>}
      {show?.network?.officialSite && (
        <p>
          <a href={show.network.officialSite}> Official Site</a>
        </p>
      )}
      <p>{sanitizeHTML(show?.summary || '')}</p>
      <p>Status: {show?.status}</p>
    </main>
  );
};

export default memo(ShowDetails);