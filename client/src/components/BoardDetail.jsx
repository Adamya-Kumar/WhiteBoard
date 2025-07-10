import React from "react";

export default function BoardDetail({ board, tasks, onEditTask, onDeleteTask, onOpenTaskModal }) {
  // Group tasks by status
  const grouped = tasks.reduce((acc, task) => {
    acc[task.status] = acc[task.status] || [];
    acc[task.status].push(task);
    return acc;
  }, {});

  const statuses = ["ToDo", "InProgess", "Done"];

  return (
    <div className="board-detail">
      <h2>{board?.name || "Select a board"}</h2>
      <div className="status-columns">
        {statuses.map((status) => (
          <div key={status} className="status-column">
            <h3>{status}</h3>
            <ul>
              {(grouped[status] || []).map((task) => (
                <li key={task._id} className={`task priority-${task.priority.toLowerCase()}`}>
                  <div>
                    <strong>{task.title}</strong>
                    <span className={`badge badge-${task.priority.toLowerCase()}`}>{task.priority}</span>
                  </div>
                  <div>{task.description}</div>
                  <button onClick={() => onEditTask(task)}>Edit</button>
                  <button onClick={() => onDeleteTask(task._id)}>Delete</button>
                </li>
              ))}
            </ul>
            <button onClick={() => onOpenTaskModal(status)}>+ Add Task</button>
          </div>
        ))}
      </div>
    </div>
  );
}
