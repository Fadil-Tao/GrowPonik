import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
export default function BottomNavCourse() {
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
        fetchData();
    }, [IdLearning]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='flex py-5 bg-white w-full justify-between md:px-40 px-3 fixed bottom-0 border-t-2'>
            <div>
                <Link
                    to={`/learning/${IdLearning}/${index - 1}`}
                    className={
                        index === 0 || index == null
                            ? 'opacity-10 disabled pointer-events-none'
                            : ''
                    }
                    disabled={index === 0 || index == null}
                >
                    <FaArrowLeft />
                </Link>
            </div>
            <div className=''>
                <p className='font-poppins'>
                    {!index
                        ? data.modules[0].subtitles
                        : data.modules[index].subtitles}
                </p>
            </div>
            <div>
                <Link
                    to={`/learning/${IdLearning}/${index + 1}`}
                    className={
                        Number(index) === data.modules.length - 1
                            ? 'opacity-10 disabled pointer-events-none'
                            : ''
                    }
                    disabled={Number(index) === data.modules.length - 1}
                >
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
}
