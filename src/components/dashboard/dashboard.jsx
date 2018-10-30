import React, { Component } from 'react';
import './dashboard.scss';
import MovieListWrapper from '../movie-list-wrapper/movie-list-wrapper';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <header>
          <h1>
            The Movies List{' '}
            <span role="img" aria-label="movie emoji">
              🎥
            </span>
          </h1>
        </header>
        <MovieListWrapper />
      </>
    );
  }
}
