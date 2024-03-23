import ArticlePreviewContainer from '../components/_learning-page/ArtPrevContainer';
import CourseCardContainer from '../components/_learning-page/CourseContainer';
import { metode, pengelolaan, pengenalan } from '../DummyData/DummyData';
import { blogData } from '../DummyData/DummyData';

export default function Learning() {
    return (
        <div>
            <div className='py-2  md:px-28 '>
                <div className='my-6'>
                    <h2 className=' font-poppins md:text-2xl  text-xl font-medium text-center'>
                        Selamat Datang di Koridor Kelas!
                    </h2>
                </div>
                <CourseCardContainer
                    array={pengenalan}
                    title={'Pengenalan Hidroponik'}
                />
                <CourseCardContainer
                    array={metode}
                    title={'Metode Dalam Hidroponik'}
                />
                <CourseCardContainer
                    array={pengelolaan}
                    title={'Pengelolaan Hidroponik'}
                />
            </div>
            <div className='md:px-28 bg-[#DAD7CD] md:py-10'>
                <ArticlePreviewContainer array={blogData} />
            </div>
        </div>
    );
}
