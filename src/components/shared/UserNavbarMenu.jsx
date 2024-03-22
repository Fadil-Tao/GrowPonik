import { Link } from 'react-router-dom';
import ProfileBar from './Profilebar';

export default function UserNavbarMenu() {
    return (
        <div className='md:flex md:items-center grid place-items-center'>
            <ul className='md:flex md:my-0 my-3'>
                <li>
                    <Link
                        href='#tentang'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                        to={'/learning'}
                    >
                        Belajar
                    </Link>
                </li>
                <li>
                    <Link
                        to='/komunitas'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Komunitas
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/mentor'}
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Mentor
                    </Link>
                </li>
                <li>
                    <Link
                        to='/langganan'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Langganan
                    </Link>
                </li>
            </ul>
            <ProfileBar />
        </div>
    );
}
