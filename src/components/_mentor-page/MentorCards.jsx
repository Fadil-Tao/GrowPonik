export default function MentorCard({ img, name, desc }) {
    return (
        <div className='relative w-[20rem] h-[20rem] px-2 my-2'>
            <img
                src='https://placebear.com/600/600'
                alt='img'
                className=' brightness-50 object-cover h-full w-full'
            />
            <div className=' bottom-8 absolute left-10'>
                <p className='text-white font-poppins text-2xl font-semibold'>
                    Mr Dimas
                </p>
                <p className='text-white font-poppins text-sm '>Mr Dimas</p>
            </div>
        </div>
    );
}
