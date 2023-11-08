import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function RegisterPage() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigation = useNavigate()
    
    useEffect(() => {
        if(isAuthenticated) {
            console.log('Navigating to /tasks');   
            navigation('/tasks');
        }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit( async values => {
        signup(values)
    });

    return(

        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white rounded-md my-2' key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className='text-2xl font-bold'>Register</h1>
                <form onSubmit= {onSubmit}>
                    <input type="text" {...register('username', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='username'
                    />

                    {
                        errors.username && (
                            <p className='text-red-500'>Username is required</p>
                        )
                    }

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

                    <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2'>Register</button>
                </form>
                <p className='flex gap-x-2 justify-between text-center'> Already have account? <Link to="/login" className='text-sky-500'>Login here</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage