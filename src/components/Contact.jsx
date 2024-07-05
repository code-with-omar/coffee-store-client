import Logo from './../../public/images/more/logo1.png'
import './css/contact.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div className="logo-brand d-flex">
                <img src={Logo} alt="Espresso Emporium" className="brand-logo" />
                <h2 className='fw-400 font-family font-dark-02'>Espresso Emporium</h2>
            </div>
            <div className="contact-details font-dark-03 mt-4 font-family-2 fs-20 fw-400">
                <p className='font-family fw-400 fs-20'>
                    Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                </p>
                <div className="social-site my-4">
                    <FaFacebook className='social-icon m-0' />
                    <FaTwitter className='social-icon' />
                    <FaInstagram className='social-icon' />
                    <FaLinkedin className='social-icon ' />
                </div>
                <h3 className='font-dark-03 font-family fw-400'>Get in Touch</h3>
                <div className="contact-way font-dark-03 font-family-02 mt-4 fs-20 fw-400">
                    <p><FaPhoneAlt className='fs-24' /> <span className='mx-4'>+88 01533 333 333</span></p>
                    <p><FaEnvelope className='fs-24' /> <span className='mx-4'>info@gmail.com</span></p>
                    <p><FaMapMarkerAlt className='fs-24' /> <span className='mx-4'>72, Wall Street, King Road, Dhaka</span></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;