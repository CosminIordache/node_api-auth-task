import {useForm} from 'react-hook-form'
import { useTasks } from '../context/taskContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';


function TasksFormPage() {

  const {register, handleSubmit, setValue,} = useForm()
  const {createTask, getTask, updateTask} = useTasks();
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    async function loadTask() {
      if (params.id){
        const task = await getTask(params.id);
        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit( async (data) => {
    if(params.id){
      await updateTask(params.id, data);
    }else{
      await createTask(data);
    }
    navigate('/tasks');
  });


  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>        
        <form onSubmit={onSubmit}>
          <h1 className='text-2xl font-bold'>New Task</h1>
          <input 
            type="text" 
            placeholder="Title"
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            {...register('title')}
            autoFocus
          />
          <textarea 
            rows="3" 
            placeholder='Description'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            {...register('description')}
          />
          <button className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default TasksFormPage