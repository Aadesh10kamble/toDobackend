const taskController = require("../controllers/taskControlller.js");
const taskRouter = require ("express").Router ();

taskRouter.route ("/get-task/").get (taskController.getTasks);
taskRouter.route ("/create-task/").post (taskController.createTasks);
taskRouter.get ("/task-delete/:taskId",taskController.deleteTasks);
taskRouter.get ("/change-status/:taskId",taskController.changeStatus);

module.exports = taskRouter;