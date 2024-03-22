import MentorshipCard from '../components/_mentorList-page/MentorCard';

export default function MentorListPage() {
    return (
        <div className='md:px-28 py-6'>
            <div className='flex justify-center text-center '>
                <h1 className=' text-4xl font-semibold font-poppins'>
                    Mentor Tersertifikasi Kami
                </h1>
            </div>
            <div>
                <MentorshipCard />
                <MentorshipCard />
                <MentorshipCard />
            </div>
        </div>
    );
}
