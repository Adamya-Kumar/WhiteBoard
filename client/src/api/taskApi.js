const API_URL = "/boards";

export async function getTasks(boardId) {
  const res = await fetch(`${API_URL}/${boardId}/tasks`);
  const data = await res.json();
  return data.allTasks || [];
}

export async function createTask(boardId, task) {
  const res = await fetch(`${API_URL}/${boardId}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}

export async function updateTask(id, task) {
  const res = await fetch(`/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`/tasks/${id}`, {
    method: "DELETE" });
  return res.json();
}
