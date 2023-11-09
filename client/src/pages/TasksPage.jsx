import React, { useEffect } from 'react'
import { useTasks } from '../context/taskContext'
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard'

function TasksPage() {

  const {getTasks, tasks} = useTasks()
  
  useEffect(() =>{
    getTasks();
  }, [])

  if(tasks.length === 0) {
    return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-zinc-800 max-w-md p-10 rounded-md text-center'>
          <h1>Don't have tasks!</h1>
          <Link to="/tasks/new" className='text-sm text-sky-500 inline-block'>Create new task here</Link>
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-3 gap-2'>
      {
        tasks.map(task => (
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage