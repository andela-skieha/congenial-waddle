import React from 'react';
import CheckList from './CheckList';

const Card = function Card(props) {
  return (
    <div className="card">
      <div className="card__title">
        {props.title}
      </div>
      <div className="card__details">
        {props.description}
        <CheckList cardId={props.id} tasks={props.tasks} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  tasks: React.PropTypes.string,
  id: React.PropTypes.number,
};

module.exports = Card;
