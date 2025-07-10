import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import BoardDetail from "./components/BoardDetail";
import TaskModal from "./components/TaskModal";
import { getBoards, createBoard, getBoardById } from "./api/boardApi";
import { getTasks, createTask, updateTask, deleteTask } from "./api/taskApi";
import "./App.css";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [modalStatus, setModalStatus] = useState("ToDo");
  const [editTask, setEditTask] = useState(null);
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    getBoards().then((data) => {
      setBoards(data);
      if (data.length && !selectedBoardId) {
        setSelectedBoardId(data[0]._id);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedBoardId) {
      getBoardById(selectedBoardId).then((data) => setSelectedBoard(data.board));
      getTasks(selectedBoardId).then(setTasks);
    } else {
      setSelectedBoard(null);
      setTasks([]);
    }
  }, [selectedBoardId]);

  const handleSelectBoard = (id) => setSelectedBoardId(id);

  const handleOpenTaskModal = (status) => {
    setModalStatus(status);
    setEditTask(null);
    setShowTaskModal(true);
  };

  // Prevent task actions if no board is selected
  const handleSaveTask = async (task) => {
    if (!selectedBoardId) return;
    if (editTask) {
      await updateTask(editTask._id, task);
    } else {
      await createTask(selectedBoardId, { ...task, status: modalStatus });
    }
    setShowTaskModal(false);
    getTasks(selectedBoardId).then(setTasks);
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setShowTaskModal(true);
  };

  const handleDeleteTask = async (id) => {
    if (!selectedBoardId) return;
    await deleteTask(id);
    getTasks(selectedBoardId).then(setTasks);
  };

  const handleOpenBoardModal = () => {
    setShowBoardModal(true);
    setNewBoardName("");
  };

  const handleCreateBoard = async (e) => {
    e.preventDefault();
    if (!newBoardName.trim()) return;
    const res = await createBoard({ name: newBoardName });
    if (res.createBoard && res.createBoard._id) {
      setBoards((prev) => [...prev, res.createBoard]);
      setSelectedBoardId(res.createBoard._id);
    }
    setShowBoardModal(false);
  };

  return (
    <div className="app-container">
      <Sidebar boards={boards} selectedBoardId={selectedBoardId} onSelectBoard={handleSelectBoard} />
      <main>
        <button onClick={handleOpenBoardModal} style={{marginBottom: '1rem'}}>+ Create Board</button>
        <BoardDetail
          board={selectedBoard}
          tasks={tasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          onOpenTaskModal={handleOpenTaskModal}
        />
      </main>
      <TaskModal
        isOpen={showTaskModal}
        onClose={() => setShowTaskModal(false)}
        onSave={handleSaveTask}
        initialTask={editTask}
        boardId={selectedBoardId}
        status={modalStatus}
      />
      {showBoardModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Board</h2>
            <form onSubmit={handleCreateBoard}>
              <input
                value={newBoardName}
                onChange={e => setNewBoardName(e.target.value)}
                placeholder="Board Name"
                required
              />
              <button type="submit">Create</button>
              <button type="button" onClick={() => setShowBoardModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
