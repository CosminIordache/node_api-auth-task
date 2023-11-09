import {createContext, useContext, useState} from 'react';
import {createTaskRequest, getTasksRequest} from '../api/tasks'

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

    return(
        <tasksContext.Provider value={{tasks, createTask, getTasks}}>
            {children}
        </tasksContext.Provider>
    )
}