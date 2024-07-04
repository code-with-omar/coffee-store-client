
import { Image } from 'react-bootstrap';
import logo from './../../public/images/more/logo1.png'
import './css/header.css'
const Header = () => {
    return (
        <div className="header-wrap">
            <div className='header-contain'>
                <Image src={logo} className='header-image' />
                <h2>Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Header;