import React from "react";


export default function Sidebar({ boards, selectedBoardId, onSelectBoard }) {
  return (
    <aside className="sidebar">
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => (
          <li
            key={board._id}
            className={selectedBoardId === board._id ? "active" : ""}
            onClick={() => onSelectBoard(board._id)}
          >
            {board.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
