import MentorCard from './MentorCards';
import { Link } from 'react-router-dom';

export default function MentorsContainer() {
    return (
        <div>
            <div className='my-6'>
                <p className='text-center font-poppins font-semibold text-xl'>
                    Pilih Mentor Anda :
                </p>
                <div></div>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                <MentorCard />
                <MentorCard />
                <MentorCard />
            </div>
            <div className='text-center font-medium text-primaryGreen my-4'>
                <Link
                    className='border-2 rounded-full border-primaryGreen p-2'
                    to={'/mentor/mentorList'}
                >
                    Lihat Lebih Banyak
                </Link>
            </div>
        </div>
    );
}
