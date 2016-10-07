import React from 'react';
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
  cards: React.PropTypes.instanceOf(Array),
};

module.exports = KanbanBoard;
