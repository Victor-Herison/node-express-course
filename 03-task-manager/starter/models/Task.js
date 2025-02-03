const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    task: String,
    completed: Boolean
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;