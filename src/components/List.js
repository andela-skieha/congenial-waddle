import React, { PropTypes } from 'react';
import Card from './Card';

const List = (props) => {
  const singleCard = function singleCard(card) {
    return (
      <Card
        key={card.id}
        toggleTask={props.toggleTask}
        deleteTask={props.deleteTask}
        addTask={props.addTask}
        {...card}
      />
    );
  };

  const cards = props.cards.map(singleCard);

  return (
    <div className="list">
      <h1>{props.title}</h1>
      {cards}
    </div>
  );
};

List.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  toggleTask: PropTypes.func,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

module.exports = List;
