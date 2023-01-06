import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { boundShowActions } from "@src/store/actions/showActions";

type ShowCardProps = {
  show: Show;
};

const ShowCard: FC<ShowCardProps> = ({ show }) => {
    const handleRemove = () => {
        boundShowActions.remove(show.id);
    }
  return (
    <figure className="show-card">
      <Link to={`/show/${show.id}`}>
        <h2 className="show-card__title">{show.name}</h2>
      </Link>
      <div className="show-card__img-wrapper">
        {show.image?.medium && (
          <img className="show-card__image" src={show.image?.medium} alt="film desc" />
        )}
      </div>
      <p>{!!show.genres.length && 'genres: ' +  show.genres.join(', ')}</p>

        <button onClick={handleRemove}>Remove</button>
    </figure>
  );
};

export default ShowCard;