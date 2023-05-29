import Task from "../models/TaskModel.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const moment = require('moment');

export const allTask = async (req, res) => {
    try {
        const taskList = await Task.findAll({
            attributes: ['id_task','id_waypoints','status','priority','package_code','createdAt','launchedAt','finishedAt']
        });
	const formattedTaskList = taskList.map(task => ({
	    id_task: task.id_task,
	    id_waypoints: task.id_waypoints,
	    status: task.status,
	    priority: task.priority,
	    package_code: task.package_code,
	    createdAt: moment(task.createdAt).add(7,'hours').format('YYYY-MM-DD HH:mm:ss'),
	    launchedAt: task.launchedAt ? moment(task.launchedAt).add(7,'hours').format('YYYY-MM-DD HH:mm:ss'): '-',
	    finishedAt: task.finishedAt ? moment(task.finishedAt).add(7,'hours').format('YYYY-MM-DD HH:mm:ss'): '-'
	}));

        res.json(formattedTaskList);
    } catch (error) {
        res.status(500).json({error});
    }
};

export const addTask = async(req, res) =>{
    const { id_waypoints, status, priority, package_code} = req.body; 
    
    try {
        const newTask = {
          id_waypoints: id_waypoints,
          status: status,
          priority: priority,
          package_code: package_code
        };

        const task = await Task.create(newTask);
        res.status(200).json({msg: "Register berhasil"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const editTask = async(req, res) =>{
    try {
        await Task.update(req.body, {
            where:{
                id_task: req.params.id_task
            }
        });

        res.status(200).json({msg: "Update success"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteTask = async(req, res) =>{
    try {
        await Task.destroy({
            where:{
                id_task: req.params.id_task
            }
        });

        res.status(200).json({msg: "Delete success"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const LaunchMission = async (req, res) => {
    try {
      const limit = 2; // batas data yang akan diupdate
      const topTwoOldestData = await Task.findAll({
        where: { status: 0 },
        order: [['createdAt', 'ASC']],
        limit: limit
      });
      if (topTwoOldestData) {
        const newStatus = 1; // nilai status yang baru
        for (const data of topTwoOldestData) {
          await Task.update({ status: newStatus, launchedAt: moment().format('YYYY-MM-DD HH:mm:ss') }, {
            where: { id_task: data.id_task }
          });
        }

        res.status(200).json({msg: "sukses"});
      }
    } catch (error) {
      res.status(500).json({error});
    }
};
