/* eslint-disable  no-param-reassign */
/* eslint-disable  react/jsx-no-bind */

import React, { PropTypes, Component } from 'react';

class CheckList extends Component {
  constructor() {
    super();
    this.checkInputKeyPress = this.checkInputKeyPress.bind(this);
  }

  checkInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.addTask(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }

  render() {
    const self = this;
    const singleTask = function singleTask(task, taskIndex) {
      return (
        <li key={task.id} className="checklist__task">
          <input
            type="checkbox"
            defaultChecked={task.done}
            onChange={self.props.toggleTask.bind(null, self.props.cardId, task.id, taskIndex)}
          />
          {task.name}{' '}
          <button
            href="#"
            className="checklist__task--remove"
            onClick={self.props.deleteTask.bind(null, self.props.cardId, task.id, taskIndex)}
          />
        </li>
      );
    };

    const tasks = this.props.tasks.map(singleTask);

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"
          onKeyPress={this.checkInputKeyPress}
        />
      </div>
    );
  }
}

CheckList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  toggleTask: PropTypes.func,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
  cardId: PropTypes.number,
};

module.exports = CheckList;
