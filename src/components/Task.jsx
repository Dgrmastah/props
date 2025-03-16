import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  return (
    <li
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(task.id)}
    >
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default Task;
