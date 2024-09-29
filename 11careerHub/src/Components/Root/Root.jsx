import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Nav/>
                <Outlet/>
            </div>


            <Footer/>
        </div>
    );
};

export default Root;