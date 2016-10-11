/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';

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
  title: PropTypes.string,
  handleDetailsToggle: PropTypes.func,
  cardDetails: PropTypes.element,
  showDetails: PropTypes.bool,
  color: PropTypes.string,
};

module.exports = CardDetails;
