import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CourseBody() {
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

    if (loading) return <div>Loading...</div>;
    return (
        <div className='flex justify-center md:px-40 px-6 py-3 items-center'>
            <div className=' w-full'>
                <article className=' font-nunito text-black'>
                    <h1 className='font-semibold text-center text-4xl'>
                        {!index
                            ? data.modules[0].subtitles
                            : data.modules[index].subtitles}
                    </h1>
                    <div
                        className='font-nunito text-2xl list-decimal'
                        dangerouslySetInnerHTML={
                            index
                                ? {
                                      __html: data.modules[index].content,
                                  }
                                : { __html: data.modules[0].content }
                        }
                    ></div>
                </article>
            </div>
        </div>
    );
}
