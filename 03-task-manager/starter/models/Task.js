const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    task: {
        type: String,
        required: [true, "a task precisa ser entitulada"],
        trim: true,
        maxlength: [200, 'a task não pode ter mais do que 200 letras']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;