import mongoose from "mongoose";
import Board from "../model/model.board.js";
import Task from "../model/model.task.js";


export const handleListBoard = async (req, res) => {
  try {
    const allList = await Board.find();
    return res.status(200).json({ message: "All users", allList });
  } catch (error) {
    return res.status(404).josn({ message: error });
  }
};

export const handleCreateBoard = async (req, res) => {
  const { name } = req.body;
  try {
    const createBoard = await Board.create({ name: name });
    if (!createBoard)
      return res.status(404).josn({ message: "not create board try again" });
    return res
      .status(200)
      .json({ message: "craete board scuessfully", createBoard });
  } catch (error) {
    return res.status(404).josn({ message: error });
  }
};


// export const handleBoardById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const board = await Board.findById(id);
//     if (!board) {
//       return res.status(404).json({ message: "Board not found" });
//     }
//     return res.status(200).json({ message: "Board found", board });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const handleUpdateBoard = async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   try {
//     const updatedBoard = await Board.findByIdAndUpdate(
//       id,
//       { name },
//       { new: true, runValidators: true }
//     );
//     if (!updatedBoard) {
//       return res.status(404).json({ message: "Board not found" });
//     }
//     return res
//       .status(200)
//       .json({ message: "Board updated successfully", updatedBoard });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const handleDeleteBoard = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedBoard = await Board.findByIdAndDelete(id);
//     if (!deletedBoard) {
//       return res.status(404).json({ message: "Board not found" });
//     }
//     return res.status(200).json({ message: "Board deleted successfully" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };


export const handleListTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    return res.status(200).json({ message: "All tasks", allTasks });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const handleTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task found", task });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




export const handleUpdateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


export const handleDeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const handleCreateTaskByBoardId = async (req, res) => {
  const { id } = req.params;
  try {
    const newTask = await Task.create({ ...req.body, boardId:id });
    return res.status(201).json({ message: "Task created successfully for board", newTask });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};