import {Link} from 'react-router-dom'
import { useTasks } from '../context/taskContext';

function TaskCard({ task }) {

  const { deleteTask } = useTasks();

  return (
    <div className='bg-zinc-800 max-w-md w-full p-4 rounded-md mx-3 mb-3'>
        <p className='text-right'>{new Date(task.date).toLocaleDateString()}</p>
        <h1 className='text-2xl font-bold text-center'>{task.title}</h1>
        <p className='text-slate-300'>{task.description}</p>
        <div className='flex justify-end'>
            <Link className='bg-blue-500 text-white px-4 py-3 rounded-md my-2 mr-2' to={`/tasks/${task._id}`}>Edit</Link>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md my-2 ml-2' onClick={ () => { deleteTask(task._id); } }>Delete</button>
        </div>
    </div>
  )
}

export default TaskCard