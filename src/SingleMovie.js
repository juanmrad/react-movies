import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleMovie(props) {

  return (
    <Card key={props.index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.Poster} />
      <Card.Body>
      <Card.Title>{props.movie.Title}</Card.Title>
        <Card.Text>
          {props.movie.Year}
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
  )
}


export default SingleMovie;