/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';

const CardDetails = (props) => {
  const sideColor = {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    width: 7,
    backgroundColor: props.color,
  };

  return (
    <div className="card">
      <div style={sideColor} />
      <div
        className={props.showDetails
        ? 'card__title card__title--is-open'
        : 'card__title'}
        onClick={props.handleDetailsToggle}
      >
        {props.title}
      </div>
      {props.cardDetails}
    </div>
  );
};

CardDetails.propTypes = {
  title: React.PropTypes.string,
  handleDetailsToggle: React.PropTypes.func,
  cardDetails: React.PropTypes.element,
  showDetails: React.PropTypes.bool,
  color: React.PropTypes.string,
};

module.exports = CardDetails;
