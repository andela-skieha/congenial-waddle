import React, { PropTypes } from 'react';
import Card from './Card';

const List = (props) => {
  const singleCard = function singleCard(card) {
    return (
      <Card
        key={card.id}
        id={card.id}
        title={card.title}
        description={card.description}
        color={card.color}
        tasks={card.tasks}
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
};

module.exports = List;
