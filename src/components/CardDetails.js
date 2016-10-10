import React from 'react';

const CardDetails = function CardDetails(props) {
  return (
    <div className="card">
      <div
        className={props.showDetails ?
        'card__title card__title--is-open' :
        'card__title'}
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
};

module.exports = CardDetails;
