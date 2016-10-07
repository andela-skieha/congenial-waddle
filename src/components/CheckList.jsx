import React from 'react';

const CheckList = (props) => {
  const singleTask = function singleTask(task) {
    return (
      <li className="checklist__task">
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
    </div>
  );
};

CheckList.propTypes = {
  tasks: React.PropTypes.instanceOf(Array),
};

module.exports = CheckList;
