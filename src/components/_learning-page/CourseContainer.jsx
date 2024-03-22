import DropDownNav from '../shared/DropDown';
import CourseCard from './CourseCard';

export default function CourseCardContainer({ array, title }) {
    return (
        <div className='md:my-8'>
            <DropDownNav title={title} titleSize={'text-3xl font-nunito'}>
                <ul className='flex flex-wrap md:justify-between justify-evenly'>
                    {array.map((data, key) => {
                        return (
                            <li key={key}>
                                <CourseCard
                                    to={data.to}
                                    desc={data.desc}
                                    title={data.title}
                                />
                            </li>
                        );
                    })}
                </ul>
            </DropDownNav>
        </div>
    );
}