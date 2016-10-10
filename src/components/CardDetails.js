import React from 'react';

const CardDetails = function CardDetails(props) {
  return (
    <div className="card">
      <div
        className="card__title"
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
};

module.exports = CardDetails;
