import ArticlePreviewCard from './ArticlePrevCard';
import { Link } from 'react-router-dom';

export default function ArticlePreviewContainer({ array }) {
    return (
        <div className='relative overflow-hidden'>
            <div className='text-center text-primaryGreen md:text-3xl font-semibold md:mb-10'>
                <h3>Beberapa Rekomendasi Artikel Buatmu</h3>
            </div>
            <ul className='flex overflow-x-scroll'>
                {array.map((item, key) => {
                    return (
                        <li key={key} className='flex-none'>
                            <ArticlePreviewCard
                                title={item.title}
                                desc={item.desc}
                                img={item.img}
                                to={item.to}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className='flex justify-evenly my-4'>
                <Link
                    className=' text-primaryGreen font-semibold  border-2 border-primaryGreen rounded-full p-2'
                    to={'/artikel'}
                >
                    Lihat Lebih Banyak
                </Link>
            </div>
        </div>
    );
}
