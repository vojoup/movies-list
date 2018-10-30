import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './mavie.scss';

class Movie extends Component {
  openMovieDetail(id) {
    const { history } = this.props;
    console.log('ID', id);
    history.push(`movie/${id}`);
  }

  render() {
    const { movie, id } = this.props;
    return (
      <div className="movie" onClick={() => this.openMovieDetail(id)}>
        <h2>{movie}</h2>
      </div>
    );
  }
}

export default withRouter(Movie);
