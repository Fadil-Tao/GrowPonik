import ProfileBar from '../shared/Profilebar';
import { Link } from 'react-router-dom';

export default function TopNavCourse() {
    return (
        <nav className='flex md:px-40 justify-between items-center md:h-18 top-0 sticky z-20 py-2 bg-[#588157] font-poppins'>
            <div className='flex'>
                <Link className='mr-2 text-white' to={'/learning'}>
                    {'<---'}
                </Link>
                <p className='text-white'>Seed Selection And Planting</p>
            </div>
            <div>
                <ProfileBar />
            </div>
        </nav>
    );
}
