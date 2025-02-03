const Task = require('../models/Task')

const getAllTasks = async (req, res) =>{
    res.json(await Task.find({}).then(console.log("usuarios encontrado")).catch(err => console.log(err)))
} 

const createTask = async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = async (req, res) =>{
    const task = await Task.findOne({task: req.params.task})
    res.status(200).json(task)
}

const deleteTask = async (req, res) =>{
    console.log({task: req.params.task})
    const task = await Task.deleteOne({task: req.params.task})
    res.status(200).json(task)
    
}

const updateTask = async(req, res) =>{ 
    const task = await Task.updateOne({ task: req.params.task }, req.body );
    res.status(200).json(task)
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}