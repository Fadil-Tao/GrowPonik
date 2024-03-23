import MentorshipCard from '../components/_mentorList-page/MentorCard';
import Person1 from '../assets/Person1.png';
import Person2 from '../assets/Person2.png';
import Person3 from '../assets/Person3.png';

export default function MentorListPage() {
    return (
        <div className='md:px-28 py-6'>
            <div className='flex justify-center text-center '>
                <h1 className=' text-4xl font-semibold font-poppins'>
                    Mentor Tersertifikasi Kami
                </h1>
            </div>
            <div>
                <MentorshipCard name={'Dimas Subagio'} img={Person1} />
                <MentorshipCard name={'Rizal Susanto'} img={Person2} />
                <MentorshipCard name={'Diana Singh'} img={Person3} />
            </div>
        </div>
    );
}
