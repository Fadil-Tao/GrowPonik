import ArticlePreviewContainer from '../components/_learning-page/ArtPrevContainer';
import CourseCardContainer from '../components/_learning-page/CourseContainer';

const courseList = [
    {
        title: 'Pengenalan Hidroponik',
        desc: 'Topik ini berisi mengenai pengenalan hidroponik, Manfaat Hidroponik, dan jenis tanaman hidroponik',
        to: 'pengenalanHidroponik',
    },
    {
        title: 'Metode Penanaman dengan Hidroponik',
        desc: 'Topik ini berisi mengenai berbagai macam teknik penanaman dengan Hidroponik.',
        to: 'metodeHidroponik',
    },
    {
        title: 'Menanam dengan teknik Wick System',
        desc: 'Topik ini membahas suatu teknik penanaman hidroponik yang bernama wick system.',
        to: 'wickSystem',
    },
];



const list = [
    {
        title: 'Seed Selection and Planting',
        desc: 'This topic covers the importance of selecting appropriate seeds based on factors such as climate, soil type, and intended use. It also includes guidance on proper planting techniques, including seed depth, spacing, and timing.',
        to: 'seedselection',
    },
    {
        img: 'https://placebear.com/300/200',
        title: 'How regenerative agriculture is changing the game?',
        to: 'rootbear',
        desc: 'Discover how this innovative approach is improving soil health, boosting yields, and creating a more resilient future for our farms.',
    },
    {
        img: 'https://placebear.com/300/200',
        title: 'rootbear!',
        to: 'rootbear',
        desc: 'Look Theres A bear!',
    },
];

const blogData = [
    {
        img: 'https://placebear.com/300/200',
        title: 'How Technology innovation is shaping agriculture',
        to: 'rootbear',
        desc: "Explore the exciting ways technology is transforming our farms, from precision agriculture to automation, and how it's leading to a more efficient and sustainable food system.",
    },
    {
        img: 'https://placebear.com/300/200',
        title: 'The journey of your food from farm to fork',
        to: 'rootbear',
        desc: 'Take a behind-the-scenes look at the fascinating path your food travels, from the seed we sow to the plate on your table.',
    },
    {
        img: 'https://placebear.com/300/200',
        title: 'How regenerative agriculture is changing the game?',
        to: 'rootbear',
        desc: 'Discover how this innovative approach is improving soil health, boosting yields, and creating a more resilient future for our farms.',
    },
    {
        img: 'https://placebear.com/300/200',
        title: 'rootbear!',
        to: 'rootbear',
        desc: 'Look Theres A bear!',
    },
];
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
                    array={courseList}
                    title={'Pengenalan Hidroponik'}
                />
                <CourseCardContainer
                    array={list}
                    title={'Metode Menanam Dengan Hidroponik'}
                />
                <CourseCardContainer
                    array={courseList}
                    title={'Menanam Dengan Weak System'}
                />
            </div>
            <div className='md:px-28 bg-[#DAD7CD] md:py-10'>
                <ArticlePreviewContainer array={blogData} />
            </div>
        </div>
    );
}
