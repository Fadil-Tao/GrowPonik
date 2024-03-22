import { Outlet } from 'react-router-dom';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

export default function BaseLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}
