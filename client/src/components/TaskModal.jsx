import React, { useState, useEffect } from "react";

export default function TaskModal({ isOpen, onClose, onSave, initialTask, boardId, status }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "High",
    status: status || "ToDo",
    boardId: boardId || "",
  });

  useEffect(() => {
    if (initialTask) {
      setTask(initialTask);
    } else {
      setTask((t) => ({ ...t, status: status || "ToDo", boardId: boardId || "" }));
    }
  }, [initialTask, status, boardId]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{initialTask ? "Edit Task" : "Create Task"}</h2>
        <form onSubmit={handleSubmit}>
          <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
          <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" />
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
