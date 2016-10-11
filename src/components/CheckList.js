import React, { PropTypes } from 'react';

const CheckList = (props) => {
  const singleTask = function singleTask(task) {
    return (
      <li key={task.id} className="checklist__task">
        <input type="checkbox" defaultChecked={task.done} />
        {task.name}
        <button href="#" className="checklist__task--remove" />
      </li>
    );
  };

  const tasks = props.tasks.map(singleTask);

  return (
    <div className="checklist">
      <ul>{tasks}</ul>
      <input
        type="text"
        className="checklist--add-task"
        placeholder="Type then hit Enter to add a task"
      />
    </div>
  );
};

CheckList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

module.exports = CheckList;
