const mongoose = require("mongoose");
taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Tasks should have a title"],
    },
    description: {
        type: String,
        default: this.title
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt : {
        type : Date,
        default : new Date ()
    }
}
);

const taskModel = mongoose.model("Task", taskSchema);
module.exports = taskModel;