import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

function Header(props) {
  const [search, setSearch] = useState(false)

  function fetchMovies() {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=f2e8db35`)
    .then(res => res.json())
    .then((results) => {
      props.onChange(results.Search);
    })
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
      <Row>
        <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for Movies..."
            aria-label="Movie Search"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button onClick={fetchMovies} variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>
  );
}

export default Header;
