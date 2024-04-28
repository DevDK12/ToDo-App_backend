import CatchAsync from "../error/catchAsync.js";
import AppError from "../error/appError.js";
import Task from '../models/task.js';





export const getTasks = CatchAsync(async (req, res, next) => {

    const tasks = await Task.find({});

    res.status(200).json({
        status: 'success',
        data: {
            tasks
        }
    })

});



export const deleteTask= CatchAsync(async (req, res, next) => {

    const { taskId } = req.params;

    const task = await Task.findById(taskId);

    if (!task) throw new AppError('No Task found', 400);

    await Task.findByIdAndDelete(taskId);

    res.status(200).json({
        status: 'success',
        message: 'Task deleted',
    })

});



export const putUpdateTask= CatchAsync(async (req, res, next) => {

    const { taskId } = req.params;
    const {msg, date, tags, isFinished} = req.body;


    const task = await Task.findById(taskId);

    if (!task) throw new AppError('No task found', 400);


    task.msg = msg || task.msg;
    task.date = date || task.date;
    task.tags = tags || task.tags;
    task.isFinished = isFinished || task.isFinished;

    await task.save();


    res.status(200).json({
        status: 'success',
        message: 'Updated task',
    })

});




export const postNewTask= CatchAsync(async (req, res, next) => {

    const {_id, msg, date, tags} = req.body;

    const newTask = new Task({
        _id,
        msg,
        date,
        tags,
    })

    await newTask.save();


    res.status(200).json({
        status: 'success',
        message: 'Task created',
    })

});