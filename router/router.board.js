import express from "express";
import { handleListBoard, handleCreateBoard, handleCreateTaskByBoardId, handleTaskById } from "../controllers/controller.js";

const routers = express.Router();

routers.get('/', handleListBoard);
routers.post('/', handleCreateBoard);
routers.get('/:id/tasks', handleTaskById);
routers.post('/:id/tasks', handleCreateTaskByBoardId);

export default routers;