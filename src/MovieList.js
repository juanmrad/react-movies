import React from 'react';
import SingleMovie from './SingleMovie';
import CardColumns from 'react-bootstrap/CardColumns';

function MovieList(props) {

  const items = []

  if(props.movies) {
    props.movies.forEach( (movie, index) => {
      items.push(
        <SingleMovie movie={movie} index={index} />
      )
    })
  }

  return (
    <CardColumns>
      {items}
    </CardColumns>
  );
}

export default MovieList;
