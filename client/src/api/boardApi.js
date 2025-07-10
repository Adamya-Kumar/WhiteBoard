const API_URL = "/boards";

export async function getBoards() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.allList || [];
}

export async function createBoard(board) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
  return res.json();
}

export async function getBoardById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
