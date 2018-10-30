import React, { Component } from 'react';
import movies from './movies.json';
import Movie from '../movie/movie';
import './styles.scss';

export default class MovieListWrapper extends Component {
  renderMovies() {
    return movies.map(movie => (
      <Movie movie={movie.name} id={movie._id} key={movie._id} />
    ));
  }

  render() {
    return <main className="wrapper">{this.renderMovies()}</main>;
  }
}
