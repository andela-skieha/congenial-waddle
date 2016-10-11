import React, { PropTypes } from 'react';
import List from './List';

const KanbanBoard = function KanbanBoard(props) {
  return (
    <div className="app">
      <List
        id="todo"
        title="To Do"
        cards={props.cards.filter(card => card.status === 'todo')}
      />
      <List
        id="in-progress"
        title="In Progress"
        cards={props.cards.filter(card => card.status === 'in-progress')}
      />
      <List
        id="done"
        title="Done"
        cards={props.cards.filter(card => card.status === 'done')}
      />
    </div>
  );
};

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

module.exports = KanbanBoard;
