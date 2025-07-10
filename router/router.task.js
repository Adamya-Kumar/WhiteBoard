
import express from "express";
import {handleUpdateTask,handleDeleteTask } from "../controllers/controller.js";

const routers= express.Router();


routers.post('/tasks/:id',handleUpdateTask)
routers.delete('/tasks/:id',handleDeleteTask)

export default routers;