const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({task});
};

const getTask = (req, res) => {
  const { taskID } = req.params;
  res.send(`get single task ${taskID}`);
};

const updateTask = (req, res) => {
  res.send(`update a task ${req.params.taskID}`);
};

const deleteTask = (req, res) => {
  res.send("delete a task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
