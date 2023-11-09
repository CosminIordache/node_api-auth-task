import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signin, isAuthenticated ,errors: loginErrors} = useAuth();
    const navigation = useNavigate()
    
    // useEffect(() => {
    //     if(isAuthenticated) {
    //         console.log('Navigating to /tasks');   
    //         navigation('/tasks');
    //     }
    // }, [isAuthenticated]);

    const onSubmit = handleSubmit((data) => {
        signin(data);
        console.log(data);
    })

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {
                    loginErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white rounded-md my-2' key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className='text-2xl font-bold'>Login</h1>

                <form onSubmit= {onSubmit}>

                    <input type="email" {...register('email', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='email'
                    />

                    {
                        errors.email && (
                            <p className='text-red-500'>Email is required</p>
                        )
                    }

                    <input type="password" {...register('password', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='password'
                    />

                    {
                        errors.password && (
                            <p className='text-red-500'>Password is required</p>
                        )
                    }   

                    <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2'>Login</button>
                </form>

                <p className='flex gap-x-2 justify-between text-center'> Don't have account? <Link to="/register" className='text-sky-500'>Register here</Link></p>
            </div>

        </div>
    );
}

export default LoginPage