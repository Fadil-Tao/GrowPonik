import { Link } from 'react-router-dom';
import GuestNavbarMenu from './GuestNavbarMenu';
import { useState } from 'react';
import UserNavbarMenu from './UserNavbarMenu';

export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    return (
        <nav className='sticky top-0 bg-secondaryGreen md:px-28 py-6 px-4 md:h-20 md:py-1 items-center w-full text-white font-montserrat md:flex md:justify-between z-20'>
            <div className='flex justify-between'>
                <Link to={'/'} className='font-semibold'>
                    Growponik
                </Link>
                <div className='md:hidden rounded-full bg-primaryGreen w-9 h-9 flex items-center justify-center'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <div className='w-4 h-[1px] my-1 bg-white'></div>
                        <div className='w-4 h-[1px] my-1 bg-white'></div>
                        <div className='w-4 h-[1px] my-1 bg-white'></div>
                    </button>
                </div>
            </div>
            <div className={`overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
                <div
                    className={`transform transition-transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    {isLoggedIn ?<UserNavbarMenu /> :<GuestNavbarMenu />  }
                </div>
            </div>
        </nav>
    );
}
