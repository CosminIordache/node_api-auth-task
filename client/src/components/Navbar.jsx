import {Link} from 'react-router-dom'
import { useAuth } from '../context/authContext'

function Navbar() {

    const {isAuthenticated, logout, user} = useAuth()

  return (
    <nav className='bg-zinc-700 my-3 mx-3 flex justify-between py-5 px-10 rounded-lg'>
        <Link to='/'>
            <h1 className='text-2xl font-bold'>Task Manager</h1>
        </Link>
        <ul className='flex gap-x-2'>

            {isAuthenticated ? (
                <>
                    <li>
                        Welcome <strong>{user.username}</strong>
                    </li>
                    <li>
                        <Link className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2' to='/add-task'>New task</Link>
                    </li>
                    <li>
                        <Link className='w-full bg-red-500 text-white px-4 py-2 rounded-md my-2' to='/' onClick={() => {
                            logout();
                        }}>Logout</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2' to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2' to='/register'>Register</Link>
                    </li>
                </>
            )}

            
        </ul>
    </nav>
  )
}

export default Navbar