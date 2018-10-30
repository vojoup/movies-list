import React, { Component, Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import movies from '../movie-list-wrapper/movies.json';
import './movie-detail.scss';
import Spinner from '../spinner/spinner';
const BackButton = lazy(() => import('../back-button/back-button.jsx'));
const Image = lazy(() => import('../Image/Image'));

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
  }

  getGenres({ genres }) {
    return <span className="film-prop-value genres">{genres}</span>;
  }

  back() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { match } = this.props;
    const id = match.params.id - 1;
    const movie = movies[id];

    return (
      <>
        <BackButton goBack={this.back} />
        <div className="movie-detail">
          <div className="heading">
            <Suspense fallback={<Spinner />}>
              <Image name={movie.name} picture={movie.picture} />
            </Suspense>
            <h1>{movie.name}</h1>
          </div>
          <p className="film-description">{movie.description}</p>
          <p className="film-prop">Genres: {this.getGenres(movie)}</p>
          <p className="film-prop">
            Rating:{' '}
            <span className="film-prop-value rating">{movie.rating}%</span>
          </p>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetail);
