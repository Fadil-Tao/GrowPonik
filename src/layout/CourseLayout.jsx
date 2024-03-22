import BottomNavCourse from '../components/_course-page/BottomNavCourse';
import CourseBody from '../components/_course-page/CourseContent';
import SideNavCourse from '../components/_course-page/SideNavCourse';
import TopNavCourse from '../components/_course-page/TopNavCourse';

export default function CourseLayout() {
    return (
        <>
            <TopNavCourse />
            <SideNavCourse />
            <CourseBody />
            <BottomNavCourse />
        </>
    );
}
