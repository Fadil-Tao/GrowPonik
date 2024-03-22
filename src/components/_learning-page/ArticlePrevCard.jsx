import { Link } from "react-router-dom";

export default function ArticlePreviewCard({ img, title, desc, to }) {
    return (
        <div className='w-[335px] md:h-[20rem] h-auto grid rounded-xl mt-2 md:mx-2 mx-5 font-nunito'>
            <div className='w-full h-[12rem]'>
                <img
                    src={img}
                    alt='img'
                    className='object-cover w-full h-full rounded-xl'
                />
            </div>
            <div className=''>
                <p className='text-[#3A5A40] font-semibold text-2xl'>
                    <Link to={`/artikel/${to}`}>{title}</Link>
                </p>
            </div>
            <div className='md:block hidden'>
                <p className=' px-1 text-xs'>{desc}</p>
            </div>
        </div>
    );
}
