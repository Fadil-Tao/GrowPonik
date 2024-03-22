import AuthInput from '../inputs/AuthInputs';
import { Link } from 'react-router-dom';
export default function LoginForm() {
    return (
        <div className='border-2 rounded-xl p-10 w-[25rem] bg-white'>
            <h1 className='text-center text-2xl text-[#3A5A40] font-bold'>
               Growponik
            </h1>
            <h2 className='text-center'>
                Great To See You Again! Lets Sign in .
            </h2>
            <form action='' className='grid place-items-start '>
                <AuthInput
                    lable={'Email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'Enter Your Email'}
                />
                <AuthInput
                    lable={'Password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Enter Your password'}
                />
                <button
                    type='submit'
                    className='flex w-full justify-center bg-[#588157]  text-[#DAD7CD] p-2 rounded-3xl'
                >
                    Log In
                </button>
                <p className='text-center'>
                    Doesnt Have An Account?{' '}
                    <span className=' text-green-700'>
                        <Link to={'/register'}>Let's Make One!</Link>
                    </span>
                </p>
            </form>
        </div>
    );
}
