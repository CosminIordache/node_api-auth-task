import React, { useEffect } from 'react'
import { useTasks } from '../context/taskContext'
import { Link } from 'react-router-dom';

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
    <div>
      {
        tasks.map(task => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TasksPage