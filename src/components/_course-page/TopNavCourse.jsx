import ProfileBar from '../shared/Profilebar';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function TopNavCourse() {
    const { IdLearning } = useParams();
    const index = parseInt(useParams().index);
    const [data, setData] = useState();
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await import(
                    `../../DummyData/${IdLearning}.json`
                );
                const data = response.default;
                setData(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        console.log();
        fetchData(); // Call the fetchData function
    }, [IdLearning]); // Add IdLearning as a dependency

    if (loading) return <div>Loading</div>;
    return (
        <nav className='flex md:px-40 justify-between items-center md:h-18 top-0 sticky z-20 py-2 bg-[#588157] font-poppins'>
            <div className='flex'>
                <Link className='mr-2 text-white' to={'/learning'}>
                    <FaArrowLeftLong />
                </Link>
                <p className='text-white'>{data.title}</p>
            </div>
            <div>
                <ProfileBar />
            </div>
        </nav>
    );
}
