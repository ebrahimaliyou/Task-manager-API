const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try{
        const task = await Task.find({});
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg:error})
    }  
}
const getTask = async (req,res)=>{
    try{
        const task = await Task.findOne({ _id:req.params.taskID});
        if(!task){
            return res.status(404).json({msg:`Task with name ${req.params.taskID} is not found`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res) => {
    try{
        const task = await Task.findOneAndUpdate({_id:req.params.taskID} , req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
            return res.status(404).json({msg:`Task with name ${req.params.taskID} is not found`});
        }
        res.status(200).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }
}



const deleteTask= async(req,res)=>{
    try{
        const task = await Task.deleteOne({_id:req.params.taskID});
        if(!task){
            return res.status(404).json({msg:`Task with name ${req.params.taskID} is not found`});
        }
        res.status(204).json(task);
    }catch(error){
        res.status(500).json({msg:error});
    }
}


module.exports = {
    getAllTasks,getTask,createTask,updateTask,deleteTask
}

// const updateTask= async (req,res)=>{
//     try{
//         const task = await Task.updateOne({name:req.params.name} , {name:req.body.name, completed:req.body.completed});
//         if(!task){
//             return res.status(404).json({msg:`Task with name ${req.params.name} is not found`});
//         }
//         res.status(200).json({task});
//     }catch(error){
//         res.status(500).json({msg:error});
//     }
// }