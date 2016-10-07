import React from 'react';
import Card from './Card';

const List = (props) => {
  const singleCard = function singleCard(card) {
    return (
      <Card
        id={card.id}
        title={card.title}
        description={card.description}
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
  cards: React.PropTypes.instanceOf(Array),
  title: React.PropTypes.string,
};

module.exports = List;
