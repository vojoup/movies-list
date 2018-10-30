import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { picture, name } = this.props;
    return <img className="poster" src={picture} alt={`${name} poster`} />;
  }
}
