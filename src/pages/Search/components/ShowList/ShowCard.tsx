import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type ShowCardProps = {
  show: Show;
};

const ShowCard: FC<ShowCardProps> = ({ show }) => {
  return (
    <figure className="show-card">
      <Link to={`/show/${show.id}`}>
        <h2 className="show-card__title">{show.name}</h2>
      </Link>
      <div className="show-card__img-wrapper">
        {show.image?.medium && (
          <img className="show-card__image" src={show.image?.medium} alt="film desc" />
        )}{' '}
      </div>
      {!!show.genres.length && <p>genres: {show.genres.join(', ')}</p>}
    </figure>
  );
};

export default ShowCard;