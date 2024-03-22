import AuthInput from '../inputs/AuthInputs';
import { Link } from 'react-router-dom';

export default function FormRegister() {
    return (
        <div className='border-2 rounded-xl p-10 w-[25rem] bg-white'>
            <h1 className='text-center text-2xl text-[#3A5A40] font-bold'>
                Growponik
            </h1>
            <h2 className='text-center'>Join With Us!</h2>
            <form action='' className='grid place-items-start '>
                <AuthInput
                    lable={'Username'}
                    name={'username'}
                    type={'name'}
                    placeholder={'Enter Your Username'}
                />
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
                <AuthInput
                    lable={'Retype Password'}
                    name={'passwordRetype'}
                    type={'passwordRetype'}
                    placeholder={'Retype Your password'}
                />
                <button
                    type='submit'
                    className='flex w-full justify-center bg-[#588157]  text-[#DAD7CD] p-2 rounded-3xl'
                >
                    Register
                </button>
                <p className='text-center'>
                    Already Have An Account?{' '}
                    <span className=' text-green-700'>
                        <Link to={'/login'}>Let's Log-In!</Link>
                    </span>
                </p>
            </form>
        </div>
    );
}
