import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FooterButtom from "./FooterButtom";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <FooterButtom></FooterButtom>
        </div>
    );
};

export default Home;