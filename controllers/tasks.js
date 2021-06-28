const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send("get all tasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  const { taskID } = req.params;

  try {
    const task = await Task.findOne({ _id: taskID });
    //right patter of taskID provided but not found task we have to handle this error by ourself
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(201).json({ task: task });
  } catch (error) {
    //will catch error with the wrong pattern of inputed taskID only,
    res.status(500).json({ mgs: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.taskID });
    if (!task) {
      return res.status(400).json({ msg: `not found task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskID } = req.params;
    //can add option object in findOneAndUpdate so we can tell user to MUST provide "name" with new update
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400).json({ msg: `Not found task id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
