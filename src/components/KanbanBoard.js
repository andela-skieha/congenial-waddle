import React, { PropTypes } from 'react';
import List from './List';

const KanbanBoard = function KanbanBoard(props) {
  return (
    <div className="app">
      <List
        id="todo"
        title="To Do"
        toggleTask={props.toggleTask}
        deleteTask={props.deleteTask}
        addTask={props.addTask}
        cards={props.cards.filter(card => card.status === 'todo')}
      />
      <List
        id="in-progress"
        title="In Progress"
        toggleTask={props.toggleTask}
        deleteTask={props.deleteTask}
        addTask={props.addTask}
        cards={props.cards.filter(card => card.status === 'in-progress')}
      />
      <List
        id="done"
        title="Done"
        toggleTask={props.toggleTask}
        deleteTask={props.deleteTask}
        addTask={props.addTask}
        cards={props.cards.filter(card => card.status === 'done')}
      />
    </div>
  );
};

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  toggleTask: PropTypes.func,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

module.exports = KanbanBoard;
