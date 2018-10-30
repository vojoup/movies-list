import React, { Component } from 'react';
import './back-button.scss';

export default class BackButton extends Component {
  render() {
    const { goBack } = this.props;
    return (
      <button className="back" type="button" onClick={goBack}>
        <span role="img" aria-label="pointing-finger-left">
          👈
        </span>
        Back
      </button>
    );
  }
}
