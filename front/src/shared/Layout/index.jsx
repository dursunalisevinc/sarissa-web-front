import { Outlet } from "react-router-dom";
import Navbar from '../../component/Navbar';

const Index = () => {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    )
}

export default Index;
