import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import MovieDetail from './components/movie-detail/movie-detail';
import Spinner from './components/spinner/spinner';

class App extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <div>
            <Spinner />
            Loading...
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/movie/:id" component={MovieDetail} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
