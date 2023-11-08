import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signup, isAuthenticated} = useAuth();
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
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

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
                <input type="password" {...register('password', {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='password'
                />
                <button type='submit'>Register</button>
            </form>

        </div>
    )
}

export default RegisterPage