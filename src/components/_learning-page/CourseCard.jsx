import { Link } from 'react-router-dom';

export default function CourseCard({
    title = 'Title',
    img = 'https://placebear.com/200/300',
    desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Necessitatibus quasi beatae iure fugit provident tempora molestiae laborum ad praesentium illo ipsam delectus eumreprehenderit eveniet voluptatibus consequatur totamperferendis voluptas.',
    to,
}) {
    return (
        <div className='w-[335px] md:h-[20rem] h-auto rounded-md mr-4 mt-2'>
            <div className='w-full h-32'>
                <img
                    src={img}
                    alt='img'
                    className='object-cover w-full h-full rounded-t-xl'
                />
            </div>
            <div className='my-4'>
                <p className='text-[#3A5A40] font-semibold text-2xl text-center'>
                    <Link to={to}>{title}</Link>
                </p>
            </div>
            <div className='md:block hidden'>
                <p className='text-center px-1 text-xs'>{desc}</p>
            </div>
        </div>
    );
}
