import MentorCard from './MentorCards';
import { Link } from 'react-router-dom';
import Person1 from '../../assets/Person1.png'
import Person2 from '../../assets/Person2.png'
import Person3 from '../../assets/Person3.png'

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
                <MentorCard img={Person1} name={'Mr. Dimas Subagio'}/>
                <MentorCard img={Person2} name={'Mr. Rizal Susanto'}/>
                <MentorCard img={Person3} name={'Mrs Diana Singh'}/>
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
