import {createContext, useContext, useState} from 'react';
import {createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest} from '../api/tasks'

const tasksContext = createContext();

export const useTasks = () => {
    const context = useContext(tasksContext)

    if(!context) throw new Error("useTasks must be used within a TaskProvider");

    return context;
}

export function TasksProvider({children}){

    const [tasks, setTasks] = useState([]);

    const getTasks = async () =>{
        try{
            const res = await getTasksRequest()
            setTasks(res.data);
        }catch(err){
            console.error(err)
        }
    }

    const createTask = async (task) => {
        try{
            const res = await createTaskRequest(task)
            console.log(res);
        }catch(err){
            console.log(err)
        }
    }

    const deleteTask = async (id) => {
        try{
            const res = await deleteTaskRequest(id)
            if(res.status === 204) setTasks(tasks.filter(task => task._id !== id));
        }catch(err){
            console.error(err);
        }
    };

    const getTask = async (id) => {
        try{
            const res = await getTaskRequest(id);
            console.log(res);
            return res.data;
        
        }catch(err){
            console.error(err);
            return null;
        }
    };

    const updateTask = async (id, task) => {
        try{
            await updateTaskRequest(id, task);
        }catch(err){
            console.error(err);
        }
    };

    return(
        <tasksContext.Provider value={{tasks, createTask, getTasks, deleteTask, getTask, updateTask}}>
            {children}
        </tasksContext.Provider>
    )
}