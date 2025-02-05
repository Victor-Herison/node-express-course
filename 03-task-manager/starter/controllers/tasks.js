const Task = require('../models/Task')

const getAllTasks = async (req, res) =>{
    res.json(await Task.find({}).then(console.log("usuarios encontrado")).catch(err => console.log(err)))
} 

const createTask = async (req, res) =>{
    try {

        const task = await Task.create(req.body)
        res.status(201).json({task})

    } catch (error) {
        
        res.status(500).json({msg: error})

    }
}

const getTask = async (req, res) =>{
    try {
        const task = await Task.findOne({task: req.params.task})
        if(!{task: req.params.task}){
            return
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({msg: error})
    }

}

const deleteTask = async (req, res) =>{
    try {
        const task = await Task.deleteOne({task: req.params.task})
        if(!{task: req.params.task}){
            return
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({msg: error})
    }
  
}

const updateTask = async(req, res) =>{
    try {
        const task = await Task.updateOne({ task: req.params.task }, req.body );
        if(!{task: req.params.task}){
            return
        }

        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({msg: error})
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}