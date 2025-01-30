const getAllTasks = (req, res) =>{
    res.send("get all tasks")
}

const createTask = (req, res) =>{
    res.send('create task')
}
const getTask = (req, res) =>{
    res.send("get single tasks")
}

const deleteTask = (req, res) =>{
    res.send("delete tasks")
}

const updateTask = (req, res) =>{
    res.send("update tasks")
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}