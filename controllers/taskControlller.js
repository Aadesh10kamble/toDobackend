const taskModel = require("../models/tasks.js");

exports.getTasks = async (request, response, next) => {
    try {
        const tasks = await taskModel.find({}).sort ({createdAt : 1});
        if (!tasks) throw Error("User doesn't Exist");
        response.status(200).json({
            status: "present",
            result: tasks.length,
            data: {
                tasks
            }
        });
    } catch (error) {
        response.status(200).json({ status: "absent" });
    }
};

exports.createTasks = async (request, response, next) => {
    try {
        console.log ();
        const tasks = await taskModel.create(request.body);
        response.status(200).json({
            status: "success",
            data: tasks
        })
    } catch (error) {
        next(error);
    }
};

exports.deleteTasks = async (request, response, next) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(request.params.taskId);
        response.status(200).json({
            status: "success",
            deleted: deletedTask
        })
    } catch (error) {
        next(error);
    }
};

exports.changeStatus = async (request, response, next) => {
    try {
        const updatedTask = await taskModel.findById(request.params.taskId);
        updatedTask.status = !updatedTask.status;
        await updatedTask.save({ validateModifiedOnly: true });

        response.status(200).json({
            status: "success",
            updated: updatedTask
        })
    } catch (error) {
        console.log(error);
    }
}